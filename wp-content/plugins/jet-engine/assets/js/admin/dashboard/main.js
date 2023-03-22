(function( $, dashboardConfig ) {

	'use strict';

	Vue.component( 'jet-video-embed', {
		props: [ 'embed' ],
		template: `
			<div class="jet-engine-module-video"><iframe width="500" height="281" :src="embed" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
		`
	});

	window.JetEngineDashboard = new Vue( {
		el: '#jet_engine_dashboard',
		data: {
			internalModules: dashboardConfig.internal_modules,
			externalModules: dashboardConfig.external_modules,
			activeModules: dashboardConfig.active_modules,
			toUpdate: dashboardConfig.modules_to_update,
			componentsList: dashboardConfig.components_list,
			isLicenseActive: dashboardConfig.is_license_active,
			activeTab: 'modules',
			shortcode: {
				component: '',
				meta_field: '',
				page: '',
				field: '',
				form_id: '',
				fields_layout: 'row',
				fields_label_tag: 'div',
				submit_type: 'reload',
				cache_form: '',
				copied: false,
			},
			saving: false,
			result: false,
			installationLog: {
				inProgress: false,
				showInstallPopup: false,
				module: {},
			},
			errorMessage: '',
			successMessage: '',
			moduleDetails: false,
			updateLog: {}
		},
		created: function() {

			let tab = window.location.hash;

			if ( tab ) {
				tab = tab.replace( '#', '' );
				this.activeTab = tab;
			}

		},
		mounted: function() {
			this.$el.className = 'is-mounted';
		},
		methods: {
			isActive: function( module ) {
				return 0 <= this.activeModules.indexOf( module );
			},
			isExternalActive: function( module ) {
				return module.is_related_plugin_active;
			},
			switchActive: function( input, module ) {

				if ( this.isActive( module.value ) ) {
					var index = this.activeModules.indexOf( module.value );
					this.activeModules.splice( index, 1 );
				} else {
					this.activeModules.push( module.value );
				}

			},
			linkIsVisible: function( link, module ) {

				if ( ! link.is_local ) {
					return true;
				} else {
					return this.isExternalActive( module );
				}

			},
			processUpdate: function( file ) {

				this.$set( this.updateLog, file, 'updating' );

				jQuery.ajax({
					url: window.ajaxurl,
					type: 'POST',
					dataType: 'json',
					data: {
						action: 'jet_engine_update_module',
						file: file,
						_nonce: dashboardConfig._nonce,
					},
				}).done( ( response ) => {

					let type = 'success';
					let duration = 3000;

					if ( ! response.success ) {
						type = 'error';
						duration = 15000;
						this.$set( this.updateLog, file, false );
					} else {
						this.$set( this.updateLog, file, 'done' );
					}

					this.$CXNotice.add( {
						message: response.data.message,
						type: type,
						duration: duration,
					} );

				} ).fail( ( e, textStatus ) => {
					this.$set( this.updateLog, file, false );
					this.$CXNotice.add( {
						message: e.statusText,
						type: 'error',
						duration: 15000,
					} );
				} );

			},
			updateExternalPluginState: function( module, newVal ) {
				for ( var i = 0; i < this.externalModules.length; i++) {
					if ( this.externalModules[ i ].value === module.value ) {
						this.$set( this.externalModules[ i ], 'is_related_plugin_active', newVal );
					}
				}
			},
			switchExternalActive: function( input, module ) {

				if ( this.isExternalActive( module ) ) {
					this.updateExternalPluginState( module, false );
					this.uninstallExternalModule( module );
				} else {
					this.updateExternalPluginState( module, true );
					this.installExternalModule( module );
				}

			},
			closeInstallationPopup: function() {
				this.$set( this.installationLog, 'showInstallPopup', false );
				this.$set( this.installationLog, 'message', false );
				this.$set( this.installationLog, 'actions', false );
			},
			uninstallExternalModule: function( module ) {

				var self = this;

				jQuery.ajax({
					url: window.ajaxurl,
					type: 'POST',
					dataType: 'json',
					data: {
						action: 'jet_engine_uninstall_module',
						module: module,
						_nonce: dashboardConfig._nonce,
					},
				}).done( function( response ) {

					let type = 'success';
					let duration = 3000;

					if ( ! response.success ) {
						type = 'error';
						duration = 15000;
					}

					self.$CXNotice.add( {
						message: response.data.message,
						type: type,
						duration: duration,
					} );

				} ).fail( function( e, textStatus ) {
					self.$CXNotice.add( {
						message: e.statusText,
						type: 'error',
						duration: 15000,
					} );
				} );

			},
			installExternalModule: function( module ) {

				var self = this;

				self.$set( self.installationLog, 'showInstallPopup', true );

				if ( ! self.isLicenseActive ) {
					return;
				}

				self.$set( self.installationLog, 'inProgress', true );
				self.$set( self.installationLog, 'module', module );

				jQuery.ajax({
					url: window.ajaxurl,
					type: 'POST',
					dataType: 'json',
					data: {
						action: 'jet_engine_install_module',
						module: module,
						_nonce: dashboardConfig._nonce,
					},
				}).done( function( response ) {

					self.$set( self.installationLog, 'inProgress', false );
					self.$set( self.installationLog, 'message', response.data.message );

					if ( response.success ) {
						self.$set( self.installationLog, 'actions', response.data.actions );
					} else {
						self.updateExternalPluginState( module, false );
					}

				} ).fail( function( e, textStatus ) {
					self.$set( self.installationLog, 'inProgress', false );
					self.updateExternalPluginState( module, false );
				} );

			},
			saveModules: function() {

				var self = this;

				self.saving = true;

				jQuery.ajax({
					url: window.ajaxurl,
					type: 'POST',
					dataType: 'json',
					data: {
						action: 'jet_engine_save_modules',
						modules: self.activeModules,
						_nonce: dashboardConfig._nonce,
					},
				}).done( function( response ) {

					self.saving = false;

					if ( response.success ) {
						self.result = 'success';

						if ( ! response.data.reload ) {
							self.successMessage = dashboardConfig.messages.saved;
						} else {

							self.successMessage = dashboardConfig.messages.saved_and_reload;

							setTimeout( function() {
								window.location.reload();
							}, 4000 );

						}

					} else {
						self.result = 'error';
						self.errorMessage = 'Error!';

						if ( response.data && response.data.message ) {
							self.errorMessage += ' ' + response.data.message;
						}
					}

					self.hideNotice();

				} ).fail( function( e, textStatus ) {
					self.result       = 'error';
					self.saving       = false;
					self.errorMessage = e.statusText;
					self.hideNotice();
				} );

			},
			hideNotice: function() {
				var self = this;
				setTimeout( function() {
					self.result       = false;
					self.errorMessage = '';
				}, 8000 );
			},
			getForms: function( query ) {
				return wp.apiFetch( {
					method: 'get',
					path: dashboardConfig.api_path_search + '?query=' + query + '&post_type=jet-engine-booking',
				} );

			},
		}
	} );

})( jQuery, window.JetEngineDashboardConfig );
