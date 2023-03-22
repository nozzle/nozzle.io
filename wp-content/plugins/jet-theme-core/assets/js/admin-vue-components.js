'use strict';

let jetThemeCoreSettinsMixin = {
	data: function() {
		return {
			pageOptions: window.jetThemeCoreSettingsConfig.settingsData,
			preparedOptions: {},
			savingStatus: false,
			ajaxSaveHandler: null,
		};
	},

	watch: {
		pageOptions: {
			handler( options ) {
				let prepared = {};

				for ( let option in options ) {

					if ( options.hasOwnProperty( option ) ) {
						prepared[ option ] = options[option]['value'];
					}
				}

				this.preparedOptions = prepared;

				this.saveOptions();
			},
			deep: true
		}
	},

	methods: {
		saveOptions: function() {
			var self = this;

			self.savingStatus = true;

			self.ajaxSaveHandler = jQuery.ajax( {
				type: 'POST',
				url: window.jetThemeCoreSettingsConfig.settingsApiUrl,
				dataType: 'json',
				data: self.preparedOptions,
				beforeSend: function( jqXHR, ajaxSettings ) {

					if ( null !== self.ajaxSaveHandler ) {
						self.ajaxSaveHandler.abort();
					}
				},
				success: function( responce, textStatus, jqXHR ) {
					self.savingStatus = false;

					if ( 'success' === responce.status ) {
						self.$CXNotice.add( {
							message: responce.message,
							type: 'success',
							duration: 3000,
						} );
					}

					if ( 'error' === responce.status ) {
						self.$CXNotice.add( {
							message: responce.message,
							type: 'error',
							duration: 3000,
						} );
					}
				}
			} );
		},
	}
}

Vue.component( 'jet-theme-core-general-settings', {
	template: '#jet-dashboard-jet-theme-core-general-settings',

	mixins: [ jetThemeCoreSettinsMixin ],

	data: function() {
		return {
			ajaxSyncHandler: null,
			syncTemplatesProcessing: false,
		};
	},

	computed: {
		hasElementor: function (){
			return 'true' === window.jetThemeCoreSettingsConfig.hasElementor ? true : false;
		},
		hasElementorPro: function (){
			return 'true' === window.jetThemeCoreSettingsConfig.hasElementorPro ? true : false;
		}
	},

	methods: {
		syncTemplatesLibrary: function() {
			var self = this;

			self.syncTemplatesProcessing = true;

			self.ajaxSyncHandler = jQuery.ajax( {
				type: 'POST',
				url: window.jetThemeCoreSettingsConfig.syncTemplatesApiUrl,
				dataType: 'json',
				beforeSend: function( jqXHR, ajaxSettings ) {

					if ( null !== self.ajaxSyncHandler ) {
						self.ajaxSyncHandler.abort();
					}
				},
				success: function( responce, textStatus, jqXHR ) {
					self.syncTemplatesProcessing = false;

					if ( 'success' === responce.status ) {
						self.$CXNotice.add( {
							message: responce.message,
							type: 'success',
							duration: 3000,
						} );
					}

					if ( 'error' === responce.status ) {
						self.$CXNotice.add( {
							message: responce.message,
							type: 'error',
							duration: 3000,
						} );
					}
				}
			} );
		}
	}
} );

Vue.component( 'jet-theme-core-kava-theme', {
	template: '#jet-dashboard-jet-theme-core-kava-theme',

	mixins: [ jetThemeCoreSettinsMixin ],

	data: function() {
		return {
			themeData: window.jetThemeCoreSettingsConfig.themeData,
			childThemeData: window.jetThemeCoreSettingsConfig.childThemeData,
			appearanceThemePageUrl: window.jetThemeCoreSettingsConfig.appearanceThemePageUrl,
			backupList: window.jetThemeCoreSettingsConfig.backupList,
			ajaxMainThemeHandler: null,
			ajaxMainThemeProcessing: false,
			ajaxChildThemeHandler: null,
			ajaxChildThemeProcessing: false,
			ajaxBackupHandler: null,
			ajaxBackupProcessing: false,
		};
	},

	computed: {
		mainThemeAction: function() {
			let status = this.themeData.status,
				action = false;

			switch( status ) {

				case 'not_installed':
					action = 'install';
				break;

				case 'installed':
				case 'active_child':
					action = 'activate';
				break;

				case 'active':
					action = ! this.themeData.updateAvaliable ? 'checkUpdate' : 'update';
				break;
			}

			return action;
		},

		childThemeAction: function() {
			let status = this.childThemeData.status,
				action = false;

			switch( status ) {

				case 'not_installed':
					action = 'install';
				break;

				case 'installed':
					action = 'activate';
				break;
			}

			return action;
		},
	},

	methods: {
		mainThemeActionHandle: function() {
			let self = this;

			self.ajaxMainThemeHandler = jQuery.ajax( {
				type: 'POST',
				url: ajaxurl,
				dataType: 'json',
				data: {
					action: 'kava_theme_action',
					data: {
						actionType: self.mainThemeAction,
					},
				},
				beforeSend: function( jqXHR, ajaxSettings ) {

					if ( null !== self.ajaxMainThemeHandler ) {
						self.ajaxMainThemeHandler.abort();
					}

					self.ajaxMainThemeProcessing = true;
				},
				success: function( responce, textStatus, jqXHR ) {
					self.ajaxMainThemeProcessing = false;

					if ( 'success' === responce.status ) {
						let responceData = responce.data;

						if ( 'activate' === self.mainThemeAction || 'update' === self.mainThemeAction ) {
							setTimeout( function() {
								window.location.reload();
							}, 1000 );
						}

						self.themeData = responceData;

						self.$CXNotice.add( {
							message: responce.message,
							type: 'success',
							duration: 3000,
						} );
					}

					if ( 'error' === responce.status ) {
						self.$CXNotice.add( {
							message: responce.message,
							type: 'error',
							duration: 3000,
						} );
					}
				}
			} );
		},

		childThemeActionHandle: function() {
			let self       = this;

			self.ajaxChildThemeHandler = jQuery.ajax( {
				type: 'POST',
				url: ajaxurl,
				dataType: 'json',
				data: {
					action: 'kava_child_theme_action',
					data: {
						actionType: self.childThemeAction,
					},
				},
				beforeSend: function( jqXHR, ajaxSettings ) {

					if ( null !== self.ajaxChildThemeHandler ) {
						self.ajaxChildThemeHandler.abort();
					}

					self.ajaxChildThemeProcessing = true;
				},
				success: function( responce, textStatus, jqXHR ) {
					self.ajaxChildThemeProcessing = false;

					if ( 'success' === responce.status ) {
						let responceData = responce.data;

						if ( 'activate' === self.childThemeAction ) {
							setTimeout( function() {
								window.location.reload();
							}, 1000 );
						}

						self.childThemeData = responceData;

						self.$CXNotice.add( {
							message: responce.message,
							type: 'success',
							duration: 3000,
						} );
					}

					if ( 'error' === responce.status ) {
						self.$CXNotice.add( {
							message: responce.message,
							type: 'error',
							duration: 3000,
						} );
					}
				}
			} );
		},

		backupHandler: function( type = false, file = false ) {
			let self = this;

			if ( ! type ) {
				return;
			}

			self.ajaxBackupHandler = jQuery.ajax( {
				type: 'POST',
				url: ajaxurl,
				dataType: 'json',
				data: {
					action: 'backup_theme_action',
					data: {
						actionType: type,
						file: file,
					},
				},
				beforeSend: function( jqXHR, ajaxSettings ) {

					if ( null !== self.ajaxBackupHandler ) {
						self.ajaxBackupHandler.abort();
					}

					self.ajaxBackupProcessing = true;
				},
				success: function( responce, textStatus, jqXHR ) {
					self.ajaxBackupProcessing = false;

					if ( 'success' === responce.status ) {
						let responceData = responce.data;

						self.backupList = responceData;

						self.$CXNotice.add( {
							message: responce.message,
							type: 'success',
							duration: 3000,
						} );
					}

					if ( 'error' === responce.status ) {
						self.$CXNotice.add( {
							message: responce.message,
							type: 'error',
							duration: 3000,
						} );
					}
				}
			} );
		}

	}
} );
