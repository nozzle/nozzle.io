(function( $, exportConfig, presetsConfig ) {

	'use strict';

	Vue.component( 'jet-engine-skins-presets', {
		template: '#jet_engine_skins_presets',
		data: function() {
			return {
				isActive: false,
				loading: false,
				currentPreset: false,
				presets: presetsConfig,
				successDialog: false,
				successMessage: false,
			};
		},
		methods: {
			importPreset: function( preset ) {

				var self = this;

				self.loading       = true;
				self.currentPreset = preset;

				jQuery.ajax({
					url: window.ajaxurl,
					type: 'POST',
					dataType: 'json',
					data: {
						action: 'jet_engine_import_preset',
						preset: self.currentPreset,
						_nonce: window.JetEngineDashboardConfig._nonce,
					},
				}).done(function() {
					self.successMessage = self.getPresetMsg( self.currentPreset );
					self.loading        = false;
					self.currentPreset  = false;
					self.successDialog  = true;
				}).fail(function() {
					self.loading       = false;
					self.currentPreset = false;
				});


			},
			isLoading: function( preset ) {
				return this.loading && preset === this.currentPreset;
			},
			getPresetMsg: function( preset ) {
				var presetData = this.presets[ preset ];

				return presetData.success_msg;

			},
			missDeps: function( preset ) {

				var presetData    = this.presets[ preset ],
					activeModules = [];

				if ( window.JetEngineDashboardConfig.active_modules && window.JetEngineDashboardConfig.active_modules.length ) {
					activeModules = window.JetEngineDashboardConfig.active_modules;
				}

				if ( ! presetData || ! presetData.deps || ! presetData.deps.length ) {
					return false;
				}

				for ( var i = 0; i < presetData.deps.length; i++ ) {

					var depsModule = presetData.deps[ i ];

					if ( 0 > activeModules.indexOf( depsModule ) ) {
						return true;
					}

				}

				return false;

			},
			getDeps: function( preset ) {

				var presetData      = this.presets[preset],
					internalModules = window.JetEngineDashboardConfig.internal_modules,
					externalModules = window.JetEngineDashboardConfig.external_modules,
					allModules      = internalModules.concat( externalModules ),
					result          = [];

				if ( ! presetData || ! presetData.deps || ! presetData.deps.length ) {
					return null;
				}

				for ( var i = 0; i < allModules.length; i++ ) {
					var module = allModules[ i ];

					if ( 0 <= presetData.deps.indexOf( module.value ) ) {
						result.push( module.label );
					}

				}

				return result.join( ', ' );
			},
			isDisabled: function( preset ) {
				if ( this.missDeps( preset ) ) {
					return true;
				} else {
					return this.loading && preset !== this.currentPreset;
				}
			}
		}
	} );

	Vue.component( 'jet-engine-skin-export', {
		template: '#jet_engine_skin_export',
		data: function() {
			return {
				isActive: false,
				postTypes: exportConfig.post_types,
				taxonomies: exportConfig.taxonomies,
				metaBoxes: exportConfig.meta_boxes,
				relations: exportConfig.relations,
				optionsPages: exportConfig.options_pages,
				listingItems: exportConfig.listing_items,
				glossariesList: exportConfig.glossaries,
				queriesList: exportConfig.queries,
				skin: exportConfig.skin_vars,
			};
		},
		methods: {
			serialize: function( object, prefix ) {

				var str = [],
					prop;

				for ( prop in object ) {

					if ( object.hasOwnProperty( prop ) ) {
						var key = prefix ? prefix + "[" + prop + "]" : prop,
							val = object[ prop ];

						if ( val && typeof val === "object" ) {
							val = this.serialize( val, key );
						} else {
							val = encodeURIComponent( key ) + "=" + encodeURIComponent( val );
						}

						str.push( val );
					}
				}

				return str.join( "&" );
			},
			goToExport: function() {
				window.location = exportConfig.base_url + "&" + this.serialize( this.skin );
			}
		}
	} );

	Vue.component( 'jet-engine-skin-import', {
		template: '#jet_engine_skin_import',
		data: function() {
			return {
				isActive: false,
				isLoading: false,
				readyToImport: false,
				file: null,
				error: null,
				log: false,
			};
		},
		methods: {
			prepareToImport: function( e ) {

				var file;

				if ( ! e.target.files ) {
					this.readyToImport = false;
					return;
				}

				file = e.target.files[0];

				if ( 'application/json' !== file.type ) {
					this.readyToImport = false;
					return;
				}

				this.file          = file;
				this.readyToImport = true;

			},
			logItems: function( items ) {
				return items.join( ", " );
			},
			processImport: function() {

				var self = this,
					formData,
					xhr;

				self.isLoading = true;

				formData = new FormData();
				formData.append( '_skin', self.file );
				formData.append( 'action', 'jet_engine_import_skin' );
				formData.append( '_nonce', window.JetEngineDashboardConfig._nonce );


				xhr = new XMLHttpRequest();

				xhr.open( 'POST', ajaxurl, true );

				xhr.onload = function( e, r ) {

					if ( xhr.status == 200 ) {
						var response = e.currentTarget.response;
						response = JSON.parse( response );

						if ( ! response.success ) {
							self.error = response.data;
							return;
						} else {
							self.log = response.data;
						}

					} else {
						self.error = xhr.status;
					}

				};

				xhr.send( formData );
			}
		}
	} );

})( jQuery, window.JetEngineExportConfig, window.JetEnginePresetsConfig );
