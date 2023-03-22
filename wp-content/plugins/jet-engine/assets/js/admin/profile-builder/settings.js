(function( $, JetEngineProfileBuilder ) {

	'use strict';

	Vue.filter( 'nonAdmins', function ( roles ) {
		var result = roles.filter( function( role ) {
			return "administrator" !== role.value && "jet-engine-guest" !== role.value;
		} );

		return result;
	})

	new Vue( {
		el: '#jet_engine_profile_builder',
		template: '#jet-profile-builder',
		data: {
			settings: JetEngineProfileBuilder.settings,
			pagesList: JetEngineProfileBuilder.pages,
			notLoggedActions: JetEngineProfileBuilder.not_logged_in_actions,
			rewriteOptions: JetEngineProfileBuilder.rewrite_options,
			visibilityOptions: JetEngineProfileBuilder.visibility_options,
			userRoles: JetEngineProfileBuilder.user_roles,
			postTypes: JetEngineProfileBuilder.post_types,
			userPageTitleMacros: JetEngineProfileBuilder.user_page_title_macros,
			saving: false,
		},
		mounted: function() {

			this.$el.className = 'is-mounted';

			if ( ! this.settings.account_page_structure ) {
				this.$set( this.settings, 'account_page_structure', [
					{
						title: 'Main',
						slug: 'main',
						template: '',
						collapsed: false,
						id: this.getRandomID(),
					}
				] );
			}

			if ( ! this.settings.user_page_structure ) {
				this.$set( this.settings, 'user_page_structure', [
					{
						title: 'Main',
						slug: 'main',
						template: '',
						visibility: 'all',
						collapsed: false,
						id: this.getRandomID(),
					}
				] );
			}

		},
		watch: {
			settings: {
				handler: function( newSettings, oldSettings ) {
					var self = this;

					Vue.nextTick( function() {
						self.$refs.settingsTabs.updateState();
					} );
				},
				deep: true,
			}
		},
		computed: {
			userRolesForPages: function() {

				var roles = [],
					hasAdmin = false;

				for ( var i = 0; i < this.userRoles.length; i++) {

					if ( 'administrator' === this.userRoles[ i ].value ) {
						hasAdmin = true;
					}

				}

				if ( ! hasAdmin ) {
					roles.push( {
						value: 'administrator',
						label: 'Administrator',
					} );
				}

				for ( var i = 0; i < this.userRoles.length; i++) {

					if ( 'jet-engine-guest' !== this.userRoles[ i ].value ) {
						roles.push( this.userRoles[ i ] );
					}

				}

				return roles;

			},
			notAccessibleActions: function() {
				return this.notLoggedActions.filter( function( item ) {
					return 'login_redirect' !== item.value;
				} );
			},
		},
		methods: {
			getRandomID: function() {
				return Math.floor( Math.random() * 8999 ) + 1000;
			},
			stringifyRoles: function( roles, placeholder ) {

				placeholder = placeholder || false;

				if ( ! roles || ! roles.length ) {
					if ( placeholder ) {
						return 'all users';
					} else {
						return '';
					}
				}

				return roles.join( ', ' );

			},
			stringifyLimit: function( limit ) {

				if ( ! limit || 0 == limit ) {
					limit = '∞';
				}

				return '' + limit;

			},
			preSetSlug: function( index, setting ) {

				var pages   = this.settings[ setting ],
					page    = pages[ index ];

				if ( ! page.slug && page.title ) {
					var regex = /\s+/g;
					page.slug = page.title.toLowerCase().replace( regex, '-' );
					pages.splice( index, 1, page );
					this.$set( this.settings, setting, pages );
				}

			},
			addNewRepeaterItem: function( setting, item ) {
				var items = this.settings[ setting ];

				item.id = this.getRandomID();

				items.push( item );

				this.$set( this.settings, setting, items );
			},
			addNewPage: function( setting ) {

				var pages   = this.settings[ setting ],
					newPage = {
						title: '',
						slug: '',
						template: '',
						collapsed: false,
						id: this.getRandomID(),
					};

				pages.push( newPage );

				this.$set( this.settings, setting, pages );

			},
			buildQuery: function( params ) {
				return Object.keys( params ).map(function( key ) {
					return key + '=' + params[ key ];
				}).join( '&' );
			},
			getPosts: function( query, ids ) {

				if ( ids.length ) {
					ids = ids.join( ',' );
				}

				return wp.apiFetch( {
					method: 'get',
					path: JetEngineProfileBuilder.search_api + '?' + this.buildQuery( {
						query: query,
						ids: ids,
						post_type: JetEngineProfileBuilder.search_in.join( ',' ),
					} )
				} );
			},
			cloneItem: function( index, setting, keys ) {

				var items   = this.settings[ setting ],
					item    = items[ index ],
					newItem = {};

				for ( var i = 0; i < keys.length; i++ ) {
					newItem[ keys[ i ] ] = item[ keys[ i ] ];
				};

				newItem.id = this.getRandomID();

				newItem = JSON.parse( JSON.stringify( newItem ) );

				items.push( newItem );

				this.$set( this.settings, setting, items );

			},
			clonePage: function( index, setting ) {
				var pages   = this.settings[ setting ],
					page    = pages[ index ],
					newPage = {
						title: page.title + ' (Copy)',
						slug: page.slug + '-copy',
						template: page.template,
						id: this.getRandomID(),
					};

				pages.push( newPage );

				this.$set( this.settings, setting, pages );

			},
			deleteItem: function( index, setting ) {
				var items = this.settings[ setting ];
				items.splice( index, 1 );
				this.$set( this.settings, setting, items );
			},
			deletePage: function( index, setting ) {
				var pages = this.settings[ setting ];
				pages.splice( index, 1 );
				this.$set( this.settings, setting, pages );
			},
			setPageProp: function( index, key, value, setting ) {
				var pages = this.settings[ setting ],
					page  = pages[ index ];

				page[ key ] = value;

				pages.splice( index, 1, page );
				this.$set( this.settings, setting, pages );
			},
			isCollapsed: function( object ) {

				if ( undefined === object.collapsed || true === object.collapsed ) {
					return true;
				} else {
					return false;
				}

			},
			addTitleMacro: function( macro ) {
				this.settings.user_page_seo_title += ' ' + macro;
			},
			saveSettings: function() {

				var self = this;

				self.saving = true;

				jQuery.ajax({
					url: window.ajaxurl,
					type: 'POST',
					dataType: 'json',
					data: {
						action: 'jet_engine_save_settings',
						settings: self.settings,
						_nonce: JetEngineProfileBuilder._nonce,
					},
				}).done( function( response ) {

					self.saving = false;

					if ( response.success ) {
						self.$CXNotice.add( {
							message: 'Settings Saved!',
							type: 'success',
							duration: 7000,
						} );
					} else {
						self.$CXNotice.add( {
							message: response.data.message,
							type: 'error',
							duration: 7000,
						} );
					}

				} ).fail( function( e, textStatus ) {
					self.saving = false;
					self.$CXNotice.add( {
						message: e.statusText,
						type: 'error',
						duration: 7000,
					} );
				} );

			},
		}
	} );

})( jQuery, window.JetEngineProfileBuilder );
