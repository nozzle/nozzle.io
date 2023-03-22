(function( $, seoSettings ) {

	'use strict';

	Vue.component( 'jet-engine-seo-settings', {
		template: '#jet_engine_seo_settings',
		data: function() {
			return {
				fields: seoSettings.fields,
				settings: seoSettings.settings,
				nonce: seoSettings._nonce,
				saving: false,
				result: false,
				errorMessage: '',
				successMessage: '',
			};
		},
		methods: {
			saveSettings: function() {
				var self = this;

				self.saving = true;

				jQuery.ajax({
					url: window.ajaxurl,
					type: 'POST',
					dataType: 'json',
					data: {
						action: 'jet_engine_seo_save_settings',
						nonce: self.nonce,
						settings: self.settings,
					},
				} ).done( function( response ) {

					self.saving = false;

					if ( response.success ) {
						self.result = 'success';
						self.successMessage = response.data.message;
					} else {
						self.result = 'error';
						self.errorMessage = response.data.message;
					}

					self.hideNotice();

				} ).fail( function( jqXHR, textStatus, errorThrown ) {
					self.saving = false;
					self.result = 'error';
					self.errorMessage = jqXHR.statusText;

					self.hideNotice();
				} );
			},

			hideNotice: function() {
				var self = this;

				setTimeout( function() {
					self.result       = false;
					self.successMessage = '';
					self.errorMessage = '';
				}, 8000 );
			},
		}
	} );

})( jQuery, window.JetEngineSeoSettings );