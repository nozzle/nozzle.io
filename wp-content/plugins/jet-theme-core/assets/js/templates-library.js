(function( $ ) {

	'use strict';

	Vue.config.devtools = true;

	var JetTemplatesLibraryAdminEventBus = new Vue();

	var JetTemplatesLibraryAdmin = {

		errorClass: 'jet-template-types-popup__error',

		templateLibraryInstance: null,

		init: function() {
			this.initEvents();
			this.initVueComponents();
			this.initTemplateLibrary();

			$( '#wpbody-content' ).find( '.page-title-action' ).remove();
			$( '#wpbody-content' ).find( '.wp-heading-inline' ).after( '<a id="jet-template-create-trigger" href="#" class="page-title-action">Add New</a><a id="jet-template-import-trigger" href="#" class="page-title-action">Import</a>' );
		},

		initEvents: function() {
			$( document )
				.on( 'click.JetTemplatesType', '#jet-template-create-trigger', this.openNewTemplatePopup )
				.on( 'click.JetTemplatesType', '#jet-template-import-trigger', this.openImportTemplatePopup )
				.on( 'click.JetTemplatesType', '.jet-template-library__theme-location-info-label', ( event ) => {
					JetTemplatesLibraryAdmin.templateLibraryInstance.templateLocationWarningPopupVisible = true;
				} )
				.on( 'click.JetTemplatesType', '.jet-template-library__template-edit-conditions', this.openTemplateConditionPopup );
		},

		openNewTemplatePopup: function( event ) {
			event.preventDefault();
			JetTemplatesLibraryAdmin.templateLibraryInstance.newTemplatePopupVisible = true;
		},

		openImportTemplatePopup: function( event ) {
			event.preventDefault();
			JetTemplatesLibraryAdmin.templateLibraryInstance.importTemplatePopupVisible = true;
		},

		openTemplateConditionPopup: function () {
			let $this         = $( this ),
				templateId    = $this.data( 'template-id' ),
				structureType = $this.data( 'structure-type' );

			JetTemplatesLibraryAdmin.templateLibraryInstance.conditionsManagerPopupVisible = true;
			JetTemplatesLibraryAdmin.templateLibraryInstance.templateId = templateId;
			JetTemplatesLibraryAdmin.templateLibraryInstance.structureType = structureType;

			return false;
		},

		initVueComponents: function() {

			Vue.component( 'jet-theme-core-template-conditions-item', {
				template: '#tmpl-jet-theme-core-template-conditions-item',

				props: {
					id: String,
					rawCondition: Object
				},

				data: function() {
					return ( {
						сondition: this.rawCondition,
						requestLoading: false,
						remoteOptionsList: [],
					} )
				},

				created: function() {},

				watch: {
					'сondition.group': function( curr ) {

						if ( this.subGroupAvaliable ) {
							let subGroups     = this.$root.rawConditionsData[ this.сondition.group ]['sub-groups'],
							    subGroupsKeys = Object.keys( subGroups );

							if ( 0 !== subGroupsKeys.length ) {
								this.сondition.subGroup = subGroupsKeys[0];

								switch ( this.subGroupValueControl.type ) {
									case 'f-select':
									case 'f-search-select':
										this.сondition.subGroupValue = [];
										break;
									default:
										this.сondition.subGroupValue = '';
										break;
								}
							}

							this.remoteOptionsList = [];

						}
					},
					'сondition.subGroup': function( curr ) {

						if ( this.subGroupAvaliable ) {
							this.сondition.subGroupValue = '';
							this.remoteOptionsList = [];
						}
					}
				},

				computed: {

					groupVisible: function() {
						return true;
					},

					subGroupVisible: function() {
						return 0 !== this.subGroupOptions.length ? true : false;
					},

					subGroupValueVisible: function() {
						return this.subGroupValueControl ? true : false;
					},

					subGroupValueControl: function() {

						if ( ! this.subGroupAvaliable ) {
							return false;
						}

						if ( ! this.$root.rawConditionsData.hasOwnProperty( this.сondition.group )) {
							return false;
						}

						if ( ! this.$root.rawConditionsData[ this.сondition.group ]['sub-groups'].hasOwnProperty( this.сondition.subGroup )) {
							return false;
						}

						let subGroupData = this.$root.rawConditionsData[ this.сondition.group ]['sub-groups'][ this.сondition.subGroup ];

						return subGroupData.control;
					},

					subGroupItemAction: function() {

						if ( ! this.subGroupAvaliable ) {
							return false;
						}

						if ( ! this.$root.rawConditionsData.hasOwnProperty( this.сondition.group )) {
							return false;
						}

						if ( ! this.$root.rawConditionsData[ this.сondition.group ]['sub-groups'].hasOwnProperty( this.сondition.subGroup )) {
							return false;
						}

						let subGroupData = this.$root.rawConditionsData[ this.сondition.group ]['sub-groups'][ this.сondition.subGroup ];

						return subGroupData.action;
					},

					isSearch: function () {
						return 'f-search-select' === this.subGroupValueControl.type ? true : false;
					},

					groupOptions: function() {
						let groupList = [],
						    groups    = this.$root.rawConditionsData;

						for ( let group in groups ) {
							groupList.push( {
								value: group,
								label: groups[ group ]['label']
							} );
						}

						return groupList;
					},

					subGroupAvaliable: function() {
						return this.$root.rawConditionsData[ this.сondition.group ].hasOwnProperty( 'sub-groups' );
					},

					subGroupOptions: function() {
						return this.$root.rawConditionsData[ this.сondition.group ]['options'];
					},

					subGroupValueOptions: function() {
						let optionsList = [];

						if ( this.remoteOptionsList.length ) {
							return this.remoteOptionsList;
						}

						if ( ! this.subGroupAvaliable ) {
							return optionsList;
						}

						if ( ! this.$root.rawConditionsData[ this.сondition.group ]['sub-groups'].hasOwnProperty( this.сondition.subGroup ) ) {
							return optionsList;
						}

						let subGroupData = this.$root.rawConditionsData[ this.сondition.group ]['sub-groups'][ this.сondition.subGroup ];

						if ( subGroupData.options ) {
							return subGroupData.options;
						}

						if ( this.subGroupItemAction && ! this.isSearch ) {
							this.getRemoteItems();
						}

						return optionsList;
					}
				},

				methods: {

					deleteCondition: function() {
						JetTemplatesLibraryAdminEventBus.$emit( 'removeCondition', this.id );
					},

					remoteSearchHandler: function ( $query, $values ) {
						let requestData = Object.assign( {}, this.subGroupItemAction.params, {
							query: $query,
							values: $values,
						} );

						return wp.apiFetch( {
							method: 'post',
							path: `/jet-theme-core-api/v2/${ this.subGroupItemAction.action }`,
							data: requestData,
						} );
					},

					onChangeRemoteOptionsHandler: function( options ) {
						this.remoteOptionsList = options;
					},

					getRemoteItems: function( query = '' ) {
						let vueInstance = this;
						let requestData = this.subGroupItemAction.params;

						vueInstance.requestLoading = true;

						wp.apiFetch( {
							method: 'post',
							path: `/jet-theme-core-api/v2/${ this.subGroupItemAction.action }`,
							data: requestData,
						} ).then( function( response ) {
							vueInstance.requestLoading = false;
							vueInstance.$set(
								vueInstance.$root.rawConditionsData[ vueInstance.сondition.group ]['sub-groups'][ vueInstance.сondition.subGroup ],
								'options',
								response
							);
						} );
					}
				},

			} );

			Vue.component( 'jet-theme-core-template-conditions-manager', {
				template: '#tmpl-jet-theme-core-template-conditions-manager',

				props: {
					templateId: Number
				},

				data: function() {
					return ( {
						conditions: [],
						saveConditionsStatus: false,
						getConditionsStatus: false,
					} )
				},

				created: function() {
					var vueInstance        = this,
					    templateConditions = this.$root.templateConditions || [];

					templateConditions.map( function( condition ) {
						condition['id'] = vueInstance.$root.genetateUniqId();

						return condition;
					} );

					this.conditions = templateConditions;

					JetTemplatesLibraryAdminEventBus.$on( 'removeCondition', function ( id ) {
						let templateConditions = vueInstance.conditions;

						vueInstance.conditions = templateConditions.filter( function( condition ) {
							return condition['id'] !== id;
						} );
					} );

					this.getTemplateConditions();
				},

				computed: {
					emptyConditions: function() {
						return ( 0 === this.conditions.length ) ? true : false;
					},

					templateConditions: function() {
						return this.conditions;
					}
				},

				methods: {
					addCondition: function() {
						var newCond = {
							id: this.$root.genetateUniqId(),
							include: 'true',
							group: 'entire',
							subGroup: 'entire',
							subGroupValue: ''
						};

						this.conditions.unshift( newCond );
					},

					getTemplateConditions: function () {

						this.getConditionsStatus = true;

						wp.apiFetch( {
							method: 'post',
							path: window.JetThemeCoreTemplatesLibrary.getTemplateConditionsPath,
							data: {
								template_id: this.templateId,
							},
						} ).then( ( response ) => {

							this.getConditionsStatus = false;

							if ( response.success ) {
								this.conditions = response.data.conditions;
							} else {
								this.$CXNotice.add( {
									message: response.message,
									type: 'error',
									duration: 5000,
								} );
							}
						} );
					},

					closeConditionsManagerPopupHandler: function () {
						this.$root.conditionsManagerPopupVisible = false;
					},

					saveConditions: function() {
						this.saveConditionsStatus = true;

						wp.apiFetch( {
							method: 'post',
							path: window.JetThemeCoreTemplatesLibrary.updateTemplateConditionsPath,
							data: {
								template_id: this.templateId,
								conditions: this.conditions
							},
						} ).then( ( response ) => {
							this.saveConditionsStatus = false;

							if ( response.success && response.data.verboseHtml ) {

								// Rerender verbose html
								$( `.jet-template-library__template-conditions[data-structure-type="${ this.$root.structureType }"] .active-structure` ).remove()
								$( `.jet-template-library__template-conditions[data-template-id="${ this.templateId }"]` ).html( response.data.verboseHtml );

								this.closeConditionsManagerPopupHandler();

								this.$CXNotice.add( {
									message: response.message,
									type: 'success',
									duration: 5000,
								} );
							} else {
								this.$CXNotice.add( {
									message: response.message,
									type: 'error',
									duration: 5000,
								} );
							}
						} );
					}
				}

			} );
		},

		initTemplateLibrary: function() {

			if ( ! $( '#jet-theme-core-template-library' )[0] ) {
				return;
			}

			this.templateLibraryInstance = new Vue( {
				el: '#jet-theme-core-template-library',
				data: {
					newTemplatePopupVisible: false,
					importTemplatePopupVisible: false,
					templateCreatingStatus: false,
					getTemplateConditionsStatus: false,
					newTemplateData: {
						name: '',
						type: 'jet_header',
						content: 'default',
					},
					conditionsManagerPopupVisible: false,
					rawConditionsData: window.JetThemeCoreTemplatesLibrary.rawConditionsData,
					templateId: 0,
					structureType: false,
					readyToImport: false,
					importFile: false,
					importProgressState: false,
					templateLocationWarningPopupVisible: false,
				},

				mounted: function() {
					this.$el.className = 'is-mounted';
				},

				computed: {
					getTemplateTypeOptions: function () {
						return window.JetThemeCoreTemplatesLibrary.templateTypeOptions;
					},
					getTemplateContentTypeOptions: function () {
						return window.JetThemeCoreTemplatesLibrary.templateContentTypeOptions;
					},
				},

				methods: {
					createTemplateHandler: function () {
						this.templateCreatingStatus = true;

						wp.apiFetch( {
							method: 'post',
							path: window.JetThemeCoreTemplatesLibrary.createTemplatePath,
							data: {
								name: this.newTemplateData.name,
								type: this.newTemplateData.type,
								content: this.newTemplateData.content,
							},
						} ).then( ( response ) => {

							if ( response.success ) {

								if ( response.data.redirect ) {
									setTimeout( () => {
										window.open( response.data.redirect, '_self' ).focus();
									}, 2000 );
								}

								this.$CXNotice.add( {
									message: response.message,
									type: 'success',
									duration: 5000,
								} );
							} else {
								this.templateCreatingStatus = false;

								this.$CXNotice.add( {
									message: response.message,
									type: 'error',
									duration: 5000,
								} );
							}
						} );
					},

					importPageTemplateHandler( name, files ) {

						if ( ! this.readyToImport ) {
							return false;
						}

						let formData = new FormData(),
						    xhr      = null;

						formData.append( '_file', this.importFile );
						formData.append( 'action', 'jet_theme_core_import_template' );
						this.importProgressState = true;

						xhr = new XMLHttpRequest();

						xhr.open( 'POST', window.ajaxurl, true );
						xhr.onload = ( event, request ) => {
							this.importProgressState = false;

							if ( xhr.status == 200 ) {
								let response = event.currentTarget.response;

								response = JSON.parse( response );

								if ( response.success ) {
									document.location.reload();
								} else {
									console.log( response.data.message );
								}
							} else {
								console.log( xhr.status )
							}
						};

						xhr.send( formData );
					},

					prepareToImport( files ) {
						this.importFile = files[0];
						this.readyToImport = true;
					},

					closeTemplatePopupHandler: function () {
						this.newTemplatePopupVisible = false;
					},

					closeConditionsManagerPopupHandler: function () {
						this.closeTemplatePopupVisible = false;
					},

					importTemplatePopupCloseHandler: function () {
						this.importTemplatePopupVisible = false;
					},

					genetateUniqId: function() {
						return '_' + Math.random().toString(36).substr(2, 9);
					},
				}

			} );
		},

	};

	JetTemplatesLibraryAdmin.init();

})( jQuery );