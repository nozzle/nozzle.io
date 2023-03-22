(function( $, mapsSettings ) {

	'use strict';

	Vue.component( 'jet-engine-maps-settings', {
		template: '#jet_engine_maps_settings',
		data: function() {
			return {
				settings: mapsSettings.settings,
				nonce: mapsSettings._nonce,
				validating: false,
				validated: false,
				validateResult: {
					success: true,
					message: 'We successfully get coordinates for random address with your API key, you can use it with maps listings!'
				},
				sources: mapsSettings.sources,
				allFields: mapsSettings.fields,
				showPopup: false,
				currentPopupSource: '',
				currentPopupFields: [],
			};
		},
		methods: {
			getRandStreet: function() {
				var streets = [
					'Lazurna St',
					'Ozerna St',
					'Henerala Karpenka St',
					'Bila St',
					'Central Ave',
					'Halyny Petrovoi St',
					'Hvardiiska St',
					'Nikol\'s\'ka St',
					'Terasna St',
					'Admirala Makarova St',
					'Observatorna St',
					'Shosseina St',
					'3-ya Poperechna St',
					'Dunajeva St',
					'Zashchuka St',
					'Ryumina St',
					'Sadova St',
					'Chkalova St',
					'7th Slobids\'ka St',
					'Pohranychna St',
					'Kolodyazna St',
				];

				var streetIndex = Math.floor( Math.random() * 20 );
				var street = streets[0];

				if ( streets[ streetIndex ] ) {
					street = streets[ streetIndex ];
				}

				return street + ', Mykolaiv, Mykolaiv Oblast, Ukraine';

			},
			validateKey: function() {

				var self = this,
					apiKey = false;
				
				self.validating = true;
				self.validated = false;

				if ( self.settings.use_geocoding_key ) {
					apiKey = self.settings.geocoding_key;
				} else {
					apiKey = self.settings.api_key;
				}

				if ( ! apiKey ) {
					self.validated = true;
					self.$set( self.validateResult, 'success', false );
					self.$set( self.validateResult, 'message', 'Please set API key before' );
				}

				jQuery.ajax({
					url: 'https://maps.googleapis.com/maps/api/geocode/json',
					type: 'GET',
					dataType: 'json',
					data: {
						address: encodeURI( self.getRandStreet() ),
						key: encodeURI( apiKey )
					},
				}).done( function( response ) {
					
					self.validating = false;
					self.validated = true;

					if ( response.status && 'OK' === response.status ) {
						self.$set( self.validateResult, 'success', true );
						self.$set( self.validateResult, 'message', 'We successfully get coordinates for random address with your API key, you can use it with maps listings!' );
						return;	
					} else if ( response.error_message ) {
						self.$set( self.validateResult, 'success', false );
						self.$set( self.validateResult, 'message', response.error_message );
					} else{
						self.$set( self.validateResult, 'success', false );
						self.$set( self.validateResult, 'message', 'Unknown error, please check your key and try again.' );
					}

				} ).fail( function( jqXHR, textStatus, errorThrown ) {
					self.validating = false;
					self.validated = true;
					self.$set( self.validateResult, 'success', false );
					self.$set( self.validateResult, 'message', errorThrown );
				} );

			},
			updateSetting: function( value, setting ) {

				var self = this;

				self.$set( self.settings, setting, value );

				jQuery.ajax({
					url: window.ajaxurl,
					type: 'POST',
					dataType: 'json',
					data: {
						action: 'jet_engine_maps_save_settings',
						nonce: self.nonce,
						settings: self.settings,
					},
				}).done( function( response ) {
					if ( response.success ) {
						self.$CXNotice.add( {
							message: response.data.message,
							type: 'success',
							duration: 7000,
						} );
					} else {
						self.$CXNotice.add( {
							message: response.data.message,
							type: 'error',
							duration: 15000,
						} );
					}
				} ).fail( function( jqXHR, textStatus, errorThrown ) {
					self.$CXNotice.add( {
						message: errorThrown,
						type: 'error',
						duration: 15000,
					} );
				} );
			},
			handlePopupOk: function() {

				if ( this.currentPopupFields.length ) {

					var preloadMeta = this.settings.preload_meta;

					if ( preloadMeta ) {
						preloadMeta = preloadMeta + ',' + this.currentPopupFields.join( '+' );
					} else {
						preloadMeta = this.currentPopupFields.join( '+' );
					}

					this.updateSetting( preloadMeta, 'preload_meta' );
				}

				this.showPopup = false;
				this.currentPopupSource = '';
				this.currentPopupFields = [];
			},
			handlePopupCancel: function() {
				this.showPopup = false;
				this.currentPopupSource = '';
				this.currentPopupFields = [];
			},
			resetPopupFields: function() {
				this.currentPopupFields = [];
				this.$refs.current_popup_fields.setValues( [] );
			}
		}
	} );

})( jQuery, window.JetEngineMapsSettings );
