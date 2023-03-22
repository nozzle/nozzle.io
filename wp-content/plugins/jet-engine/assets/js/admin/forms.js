var GridLayout = VueGridLayout.GridLayout;
var GridItem = VueGridLayout.GridItem;

Vue.component( 'jet-post-field-control', {
	template: '#jet-post-field-control',
	props: [ 'value', 'fields', 'metaProp', 'termsProp' ],
	data: function () {
		return {
			fieldType: '',
			fieldName: '',
			taxonomies: window.JetEngineFormSettings.taxonomies,
		};
	},
	mounted: function() {

		if ( ! this.value ) {
			this.fieldType = 0;
		} else {

			if ( 0 <= this.fieldsProps.indexOf( this.value ) ) {
				this.fieldType = this.value;
			} else {

				if ( this.value.includes( 'jet_tax__' ) ) {
					this.fieldType = this.termsProp;
				} else {
					this.fieldType = this.metaProp;
				}

				this.fieldName = this.value;
			}

		}

	},
	computed: {
		fieldsProps: function() {
			var result = [];

			for ( var prop in this.fields ) {
				if ( 0 !== prop && this.metaProp !== prop && this.termsProp !== prop ) {
					result.push( prop );
				}
			}

			return result;

		},
	},
	methods: {
		setField: function( $event, from ) {

			var value = $event.target.value;

			if ( 'field_name' === from ) {
				this.fieldName = value;
				this.$emit( 'input', value );
			} else {
				this.fieldType = value;

				if ( this.metaProp !== value && this.termsProp !== value ) {
					this.$emit( 'input', value );
				} else {
					this.$emit( 'input', this.fieldName );
				}
			}

		}
	}
});

Vue.component( 'jet-form-preset-editor', {
	template: '#jet-form-preset-editor',
	props: [ 'value', 'decode', 'encode', 'availableFields' ],
	data: function () {
		return {
			preset: {
				from: 'post',
				post_from: 'current_post',
				user_from: 'current_user',
				query_var: '_post_id',
				fields_map: {},
				current_field_prop: '',
				current_field_key: '',
			},
			taxonomies: window.JetEngineFormSettings.taxonomies,
			postTypes: window.JetEngineFormSettings.post_types,
			userFields: window.JetEngineFormSettings.user_fields,
			presetSources: window.JetEngineFormSettings.preset_sources,
			editorMounted: false,
			optionsPages: window.JetEngineFormSettings.options_list,
		};
	},
	created: function() {

		if ( ! this.decode ) {
			this.preset = this.value;
		} else {

			var rawVal = this.value;

			if ( rawVal ) {
				try {
					rawVal = JSON.parse( rawVal );
				} catch ( e ) {
					rawVal = this.preset;
				}
			} else {
				rawVal = this.preset;
			}

			if ( 'object' !== typeof rawVal || null === rawVal ) {
				rawVal = this.preset;
			}

			rawVal.jet_preset = 1;

			this.preset = rawVal;

		}

		if ( this.availableFields ) {

			for ( var i = 0; i < this.availableFields.length; i++ ) {

				var fieldName = this.availableFields[ i ];

				if ( ! this.preset.fields_map[ fieldName ] ) {
					this.$set( this.preset.fields_map, fieldName, {
						'prop': '',
						'key': '',
					} );
				}

			}

		}

		this.editorMounted = true;

		//console.log( this.optionsPages );

	},
	watch: {
		preset: {
			deep: true,
			handler: function() {
				if ( this.editorMounted ) {
					this.emitData();
				}
			}
		},
	},
	methods: {
		emitData: function() {

			var value = this.preset;

			if ( this.encode ) {
				value = JSON.stringify( value );
			}

			this.$emit( 'input', value );

		}
	}
});

var JEBookingFormBuilder = new Vue({
	el: '#form_builder',
	components: {
		GridLayout: GridLayout,
		GridItem: GridItem,
	},
	data: {
		layout: JSON.parse( JSON.stringify( JetEngineFormSettings.form_data ) ),
		result: JSON.parse( JSON.stringify( JetEngineFormSettings.form_data ) ),
		index: 1,
		showEditor: false,
		showLogicEditor: false,
		condRuleDelete: false,
		condRuleDynamicIndex: false,
		currentItem: {},
		currentIndex: false,
		fieldTypes: JetEngineFormSettings.field_types,
		inputTypes:JetEngineFormSettings.input_types,
		taxonomies: JetEngineFormSettings.taxonomies,
		postTypes: JetEngineFormSettings.post_types,
		hiddenValues: JetEngineFormSettings.hidden_values,
		captcha: JSON.parse( JSON.stringify( JetEngineFormSettings.captcha ) ),
		preset: JSON.parse( JSON.stringify( JetEngineFormSettings.preset ) ),
		mimes: JetEngineFormSettings.all_mimes,
		userFields: JetEngineFormSettings.user_fields,
		generatorsList: JetEngineFormSettings.generators_list,
		listingItems: JetEngineFormSettings.listing_items,
		editDynamicSettings: false,
		prevDefault: null,
		fieldOptionsSources: JetEngineFormSettings.options_sources,
	},
	mounted: function () {
		this.index = this.layout.length;
		this.adjustPresetFieldsMap();
		// For fix duplicate index
		this.reindexLayout();
		this.reindexResult();
	},
	computed: {
		resultJSON: function() {
			return JSON.stringify( this.result );
		},
		availableFields: function() {
			var fields = [],
				layout = JSON.parse( JSON.stringify( this.layout ) ),
				skipFields = [ 'submit', 'page_break', 'heading', 'group_break', 'repeater_end' ];

			if ( layout ) {
				layout.sort( function( a, b ) {
					if ( a.y === b.y ) {
						return 0;
					}
					return ( a.y < b.y ) ? -1 : 1;
				} );

				layout.forEach( function( item ) {
					if ( -1 === skipFields.indexOf( item.settings.type ) ) {
						fields.push( item.settings.name );
					}
				});
			}

			return fields;

		},
		availableConditionalsFields: function() {
			var fields = [],
				layout = JSON.parse( JSON.stringify( this.layout ) ),
				skipFields = [ 'submit', 'page_break', 'heading', 'group_break', 'repeater_start', 'repeater_end' ],
				currentRepeater = false;

			if ( ! layout ) {
				return fields;
			}

			layout.sort( function( a, b ) {
				if ( a.y === b.y ) {
					return 0;
				}
				return ( a.y < b.y ) ? -1 : 1;
			} );

			layout.forEach( function( item ) {
				if ( -1 === skipFields.indexOf( item.settings.type ) ) {
					var name = item.settings.name;

					if ( currentRepeater ) {
						name = currentRepeater + '::' + name;
					}

					fields.push( name );
				}

				if ( item.settings.type === 'repeater_start' ) {
					currentRepeater = item.settings.name;
				}

				if ( item.settings.type === 'repeater_end' ) {
					currentRepeater = false;
				}
			} );

			return fields;
		},
	},
	watch: {
		layout: {
			handler: function() {
				this.adjustPresetFieldsMap();
			},
			deep: true,
		},
	},
	methods: {
		getAvailableConditionalsFields: function( currentItem ) {
			var fields = [],
				repeaterFields = [],
				currentItemName = currentItem.settings.name,
				parentRepeater = false;

			fields = this.availableConditionalsFields.filter( function( item ) {

				if ( -1 !== item.indexOf( '::' + currentItemName ) ) {
					var itemParts = item.split( '::' );

					parentRepeater = itemParts[0];
				}

				return item !== currentItemName && -1 === item.indexOf( '::' );
			} );

			if ( parentRepeater ) {
				repeaterFields = this.availableConditionalsFields.filter( function( item ) {
					return item !== parentRepeater + '::' + currentItemName && -1 !== item.indexOf( parentRepeater + '::' );
				} );

				fields = fields.concat( repeaterFields );
			}

			return fields;
		},

		showDynamicSettings: function() {

			this.editDynamicSettings = true;

			if ( this.currentItem ) {
				if ( this.showLogicEditor ) {
					this.prevDefault = this.currentItem.conditionals[this.condRuleDynamicIndex].value;
				} else {
					this.prevDefault = this.currentItem.settings.default;
				}
			}

		},
		setDynamicSettings: function() {

			this.editDynamicSettings  = false;
			this.prevDefault          = null;
			this.condRuleDynamicIndex = false;

		},
		cancelDynamicSettings: function() {

			this.editDynamicSettings = false;

			if ( this.currentItem ) {
				if ( this.showLogicEditor ) {
					this.$set( this.currentItem.conditionals[this.condRuleDynamicIndex], 'value', this.prevDefault );
				} else {
					this.$set( this.currentItem.settings, 'default', this.prevDefault );
				}
			}

			this.prevDefault = null;
			this.condRuleDynamicIndex = false;

		},
		setHeadingName: function() {
			if ( 'heading' === this.currentItem.settings.type || 'group_break' === this.currentItem.settings.type ) {
				this.$set( this.currentItem.settings, 'name', this.currentItem.settings.type );
			}
		},
		cancelCondRuleDel: function() {
			this.condRuleDelete = false;
		},
		confirmCondRuleDel: function() {
			this.currentItem.conditionals.splice( this.condRuleDelete, 1 );
		},
		setItemCallback: function( cb ) {
			this.$set( this.currentItem.settings, 'dynamic_update_hook', cb );
			this.showCallbacksPopup = false;
		},
		showCalculatedFormulaField: function( settings ) {

			if ( 'calculated' === settings.type ) {
				return true;
			}

			if ( 'repeater_start' === settings.type && 'custom' === settings.repeater_calc_type ) {
				return true;
			}

			return false;
		},
		newUpdateArg: function() {

			if ( ! this.currentItem.settings.dynamic_update_args ) {
				this.$set( this.currentItem.settings, 'dynamic_update_args', [] );
			}

			this.currentItem.settings.dynamic_update_args.push( '' );

		},
		newRule: function() {
			this.currentItem.conditionals.push({
				type: 'show',
				field: '',
				operator: '',
				value: '',
				set_value: '',
			});
		},
		adjustPresetFieldsMap: function() {

			var self = this;

			if ( self.preset.fields_map && undefined !== self.preset.fields_map.length ) {
				self.preset.fields_map = {};
			}

			self.layout.forEach( function( item ) {

				if ( 'submit' === item.settings.type || ! item.settings.name ) {
					return;
				}

				if ( ! self.preset.fields_map[ item.settings.name ] ) {
					self.$set( self.preset.fields_map, item.settings.name, {
						'prop': '',
						'key': '',
					} );
				}

			} );
		},
		inArray: function( needle, haystack ) {
			return -1 < haystack.indexOf( needle );
		},
		addRepeaterItem: function( items, item ) {
			items.push( item );
		},
		itemInstance: function( item ) {

			var instance = JetEngineFormSettings.labels.field;

			if ( item.settings.is_message ) {
				instance = JetEngineFormSettings.labels.message;
			}

			if ( item.settings.is_submit ) {
				instance = JetEngineFormSettings.labels.submit;
			}

			return instance;

		},
		currentWidth: function( width ) {
			switch( width ) {

				case 2:
					return '1/6';

				case 3:
					return '1/4';

				case 4:
					return '1/3';

				case 6:
					return '1/2';

				case 8:
					return '2/3';

				case 9:
					return '3/4';

				case 10:
					return '5/6';

				case 12:
					return 'Fullwidth';

				default:
					return width + '/12';
			}
		},
		editFieldLogic: function( item, index ) {

			this.applyFieldChanges();

			this.currentItem     = item;
			this.currentIndex    = index;
			this.showLogicEditor = true;

			if ( ! this.currentItem.conditionals ) {
				this.$set( this.currentItem, 'conditionals', [] );
			}

		},
		editField: function( item, index ) {

			this.applyFieldChanges();

			this.currentItem  = item;
			this.currentIndex = index;
			this.showEditor   = true;

		},
		copyField: function( item, index ) {
			var copyItem = JSON.parse( JSON.stringify( item ) );

			copyItem.settings.name = copyItem.settings.name + '_copy';

			copyItem.y++;
			copyItem.i = String(this.index);

			for ( var i = index + 1; i < this.result.length; i++ ) {
				var y = this.result[i].y + 1;

				this.layout[i].y = y;
				this.result[i].y = y;
			}

			this.index++;

			this.layout.splice( index + 1, 0, copyItem );
			this.result.splice( index + 1, 0, copyItem );
		},
		applyFieldChanges: function() {

			if ( false === this.currentIndex ) {
				return;
			}

			this.result.splice( this.currentIndex, 1, this.currentItem );

			this.currentItem     = {};
			this.currentIndex    = false;
			this.showEditor      = false;
			this.showLogicEditor = false;

		},
		cancelFieldChanges: function() {

			this.currentItem     = {};
			this.currentIndex    = false;
			this.showEditor      = false;
			this.showLogicEditor = false;

		},
		deleteRepeterItem: function( index, items ) {
			items.splice( index, 1 );
		},
		addField: function( isSubmit, isMessage, isPageBreak ) {
			var maxY            = 0,
				currY           = 0,
				newItem         = {},
				defaultSettings = JSON.parse( JSON.stringify( JetEngineFormSettings.default_settings ) );

			isPageBreak = isPageBreak || false;

			defaultSettings.is_message    = isMessage;
			defaultSettings.is_submit     = isSubmit;
			defaultSettings.is_page_break = isPageBreak;

			if ( isSubmit ) {
				defaultSettings.type      = 'submit';
				defaultSettings.name      = 'submit';
				defaultSettings.label     = 'Submit';
				defaultSettings.className = '';
			} else if ( isPageBreak ) {
				defaultSettings.type      = 'page_break';
				defaultSettings.name      = 'page_break';
				defaultSettings.label     = 'Next';
				defaultSettings.className = '';
			}

			for ( var i = 0; i < this.result.length; i++ ) {
				currY = this.result[ i ].y;
				if ( currY > maxY ) {
					maxY = currY;
				}
			}

			maxY++;

			newItem = {
				"x": 0,
				"y": maxY,
				"w": 12,
				"h": 1,
				"i": String(this.index),
				"settings": defaultSettings,
			};

			this.index++;

			this.layout.push( newItem );
			this.result.push( newItem );

		},
		updateLayout: function( newLayout ) {
			this.result.splice( 0, this.result.length );
			for ( var i = 0; i <= newLayout.length - 1; i++ ) {
				this.result.push( newLayout[ i ] );
			}
		},
		removeField: function( item, index ) {

			if ( ! confirm( JetEngineFormSettings.confirm_message ) ) {
				return;
			}

			this.layout.splice( index, 1 );
			this.reindexLayout();

			for ( var i = 0; i < this.result.length; i++ ) {
				if ( this.result[ i ].i == item.i ) {
					this.result.splice( i, 1 );
					return;
				}
			}

			this.reindexResult();

		},
		reindexLayout : function () {
			for ( var i = 0; i < this.layout.length; i++ ) {
				this.layout[i]['i'] = String( i );
			}
		},
		reindexResult : function () {
			for ( var i = 0; i < this.result.length; i++ ) {
				this.result[i]['i'] = String( i );
			}
		},
		getCaptchaVal: function ( name ) {
			return this.captcha.use_global
				? JetEngineFormSettings.global_tabs.captcha[ name ]
				: this.captcha[ name ]
		}
	}
});

var SlickList       = window.VueSlicksort.SlickList,
	SlickItem       = window.VueSlicksort.SlickItem,
	HandleDirective = window.VueSlicksort.HandleDirective;

var JEBookingFormNotifications = new Vue({
	el: '#notifications_builder',
	data: {
		items: JSON.parse( JSON.stringify( JetEngineFormSettings.notifications_data ) ),
		index: 1,
		showEditor: false,
		currentItem: {},
		currentIndex: false,
		availableTypes: JetEngineFormSettings.notification_types,
		postTypes: JetEngineFormSettings.post_types,
		postStatuses: JetEngineFormSettings.post_statuses,
		optionsPages: JetEngineFormSettings.options_pages,
		userFields: JetEngineFormSettings.user_fields,
		postProps: JetEngineFormSettings.post_props,
		userProps: JetEngineFormSettings.user_props,
		allPages: JetEngineFormSettings.pages,
		redirectNotice: JetEngineFormSettings.labels.redirect_notice,
		activecampFields: JetEngineFormSettings.activecamp_fields,
		userRoles: JetEngineFormSettings.user_roles,
		requestProcessing: false,
		globalTabs: JetEngineFormSettings.global_tabs
	},
	components: {
		'slick-list': SlickList,
		'slick-item': SlickItem,
	},
	directives: {
		handle: HandleDirective
	},
	mounted: function() {

		var self = this;

		self.items.forEach( function( item, index ) {

			var overwrite = false;

			if ( item.fields_map && undefined !== item.fields_map.length ) {
				item.fields_map = {};
				overwrite = true;
			}

			if ( item.meta_fields_map && undefined !== item.meta_fields_map.length ) {
				item.meta_fields_map = {};
				overwrite = true;
			}

			if ( undefined === item.activecampaign ) {
				item.activecampaign = {
					fields_map: {},
					lists: {}
				};
				overwrite = true;
			}

			if ( item.activecampaign.fields_map && undefined !== item.activecampaign.fields_map.length ) {
				item.activecampaign.fields_map = {};
				overwrite = true;
			}

			if ( item.activecampaign.lists && undefined !== item.activecampaign.lists.length ) {
				item.activecampaign.lists = {};
				overwrite = true;
			}

			if ( undefined === item.default_meta ) {
				item.default_meta = [];
				overwrite = true;
			}

			if ( undefined === item.redirect_args ) {
				item.redirect_args = [];
				overwrite = true;
			}

			if ( undefined === item.mailchimp ) {
				item.mailchimp = {
					fields_map: {},
					data: {}
				};
				overwrite = true;
			}

			if ( item.mailchimp.fields_map && undefined !== item.mailchimp.fields_map.length ) {
				item.mailchimp.fields_map = {};
				overwrite = true;
			}

			if ( item.mailchimp.data && undefined !== item.mailchimp.data.length ) {
				item.mailchimp.data = {};
				overwrite = true;
			}

			if ( undefined === item.getresponse ) {
				item.getresponse = {
					fields_map: {},
					data: {}
				};
				overwrite = true;
			}

			if ( item.getresponse.fields_map && undefined !== item.getresponse.fields_map.length ) {
				item.getresponse.fields_map = {};
				overwrite = true;
			}

			if ( item.getresponse.data && undefined !== item.getresponse.data.length ) {
				item.getresponse.data = {};
				overwrite = true;
			}

			if ( ! item.email ) {
				item.email = {};
			}

			if ( undefined === item.email.content_type ) {
				item.email.content_type = 'text/html';
				overwrite = true;
			}

			if ( overwrite ) {
				self.items.splice( index, 1, item );
			}

		} );

	},
	computed: {
		resultJSON: function() {
			return JSON.stringify( this.items );
		},
		availableFields: function() {

			var fields = JSON.parse( JSON.stringify( JEBookingFormBuilder.availableFields ) );

			this.items.forEach( function( item ) {
				if ( 'register_user' === item.type && item.add_user_id ) {
					fields.push( 'user_id' );
				}

				if ( 'insert_post' === item.type ) {
					fields.push( 'inserted_post_id' );
				}

			});

			return fields;

		},
	},
	methods: {
		showRedirectNotice: function( item, index ) {

			if ( 'redirect' !== item.type ) {
				return false;
			}

			return index < ( this.items.length - 1 );

		},
		addField: function() {

			this.items.push( {
				'type': 'email',
				'mail_to': 'admin',
				'hook_name': 'send',
				'custom_email': '',
				'from_field': '',
				'post_type': '',
				'fields_map': {},
				'meta_fields_map': {},
				'email': {
					content_type: 'text/html',
				},
				'default_meta': [],
				'redirect_args': [],
				'mailchimp': {
					fields_map: {},
					data: {}
				},
				'activecampaign': {
					fields_map: {},
					lists: {}
				},
				'getresponse': {
					fields_map: {},
					data: {}
				}
			} );

		},
		addRepeaterItem: function( items, item ) {
			items.push( item );
		},
		deleteRepeterItem: function( index, items ) {
			items.splice( index, 1 );
		},
		editItem: function( item, index ) {

			this.applyItemChanges();

			this.currentItem  = JSON.parse( JSON.stringify( item ) );
			this.currentIndex = index;
			this.showEditor   = true;

			if ( undefined === this.currentItem.default_meta ) {
				this.$set( this.currentItem, 'default_meta', [] );
			}

			if ( undefined === this.currentItem.redirect_args || undefined === this.currentItem.redirect_args.length ) {
				this.$set( this.currentItem, 'redirect_args', [] );
			}

		},
		applyItemChanges: function() {

			if ( false === this.currentIndex ) {
				return;
			}

			if ( this.currentItem.fields_map ) {
				for ( var field in this.currentItem.fields_map ) {
					if ( 'register_user' === this.currentItem.type ) {
						if ( 0 > this.availableFields.indexOf( this.currentItem.fields_map[ field ] ) ) {
							delete( this.currentItem.fields_map[ field ] );
						}
					} else if ( 'update_user' === this.currentItem.type ) {
						if ( 0 > this.availableFields.indexOf( field ) ) {
							delete( this.currentItem.fields_map[ field ] );
						}
					}
				}
			}

			this.items.splice( this.currentIndex, 1, JSON.parse( JSON.stringify( this.currentItem ) ) );

			this.currentItem  = false;
			this.currentIndex = false;
			this.showEditor   = false;

		},
		cancelItemChanges: function() {

			this.currentItem  = false;
			this.currentIndex = false;
			this.showEditor   = false;

		},
		removeItem: function( item, index ) {

			if ( ! confirm( JetEngineFormSettings.confirm_message ) ) {
				return;
			}

			if( index === this.currentIndex && this.showEditor ){
				this.showEditor   = false;
			}

			this.items.splice( index, 1 );

		},
		validateActiveCampaignAPI: function() {
			this.getActiveCampaignLists( {}, true );
		},
		getActiveCampaignLists: function( event, isValidate ) {
			var self = this,
				url,
				lists = {},
				api_url = this.getCurrentValOrGlobal( 'api_url' ),
				api_key = this.getCurrentValOrGlobal( 'api_key' ),
				endpoint = '/admin/api.php?api_action=list_list';

			isValidate = isValidate || false;

			if ( isValidate ) {
				self.requestProcessing = 'validateActiveCampAPI';
			} else {
				self.requestProcessing = 'loadingActiveCampLists';
			}

			url = api_url + endpoint + '&api_key=' + api_key + '&ids=all&api_output=json';

			jQuery.getJSON( url )
				.success( function( data ) {
					if ( undefined !== data.result_code && data.result_code ) {

						for ( var prop in data ) {
							if ( undefined === data[prop].id ) {
								continue;
							}

							lists[data[prop].id] = data[prop].name;
						}

						self.$set( self.currentItem.activecampaign, 'lists', lists );
						self.$set( self.currentItem.activecampaign, 'isValidAPI', true );
					} else {
						self.$set( self.currentItem.activecampaign, 'isValidAPI', false );
					}

					self.requestProcessing = false;
				} )
				.error( function() {
					self.$set( self.currentItem.activecampaign, 'isValidAPI', false );
					self.requestProcessing = false;
				} );
		},
		validateMailChimpAPI: function() {
			this.getMailChimpData( {}, true );
		},
		getMailChimpData: function( event, isValidate ) {
			var self = this,
				api_key = this.getCurrentValOrGlobal( 'api_key' );

			if ( !api_key ) {
				self.$set( self.currentItem.mailchimp, 'isValidAPI', false );
				return;
			}

			isValidate = isValidate || false;

			if ( isValidate ) {
				self.requestProcessing = 'validateMailChimpAPI';
			} else {
				self.requestProcessing = 'loadingAMailChimpData';
			}

			jQuery.ajax( {
				url: ajaxurl,
				type: 'POST',
				data: {
					'action': 'jet_engine_forms_get_mailchimp_data',
					'api_key': api_key
				},
				success: function( response ) {
					if ( response.success ) {
						self.$set( self.currentItem.mailchimp, 'isValidAPI', true );
						self.$set( self.currentItem.mailchimp, 'data', response.data );
					} else {
						self.$set( self.currentItem.mailchimp, 'isValidAPI', false );
					}

					self.requestProcessing = false;
				},
				error: function() {
					self.$set( self.currentItem.mailchimp, 'isValidAPI', false );
					self.requestProcessing = false;
				}
			} );
		},
		validateGetResponseAPI: function() {
			this.getGetResponseData( {}, true );
		},
		getGetResponseData: function( event, isValidate ) {
			var self = this,
				api_key = this.getCurrentValOrGlobal( 'api_key' );

			if ( !api_key ) {
				self.$set( self.currentItem.getresponse, 'isValidAPI', false );
				return;
			}

			isValidate = isValidate || false;

			if ( isValidate ) {
				self.requestProcessing = 'validateGetResponseAPI';
			} else {
				self.requestProcessing = 'loadingAGetResponseData';
			}

			jQuery.ajax( {
				url: ajaxurl,
				type: 'POST',
				data: {
					'action': 'jet_engine_forms_getresponse_data',
					'api_key': api_key
				},
				success: function( response ) {
					if ( response.success ) {
						self.$set( self.currentItem.getresponse, 'isValidAPI', true );
						self.$set( self.currentItem.getresponse, 'data', response.data );
					} else {
						self.$set( self.currentItem.getresponse, 'isValidAPI', false );
					}

					self.requestProcessing = false;
				},
				error: function() {
					self.$set( self.currentItem.getresponse, 'isValidAPI', false );
					self.requestProcessing = false;
				}
			} );
		},
		isCurrentUseGlobal: function () {
			return this.currentItem[ this.currentItem.type ].use_global;
		},
		currentGlobalTab: function ( key = '' ) {
			return this.globalTab( this.currentItem.type, key );
		},
		globalTab: function ( type, key = '' ) {
			let tabName = JetEngineFormSettings.pairs_notifications_tabs[ type ] || false;
			if ( ! tabName ) {
				tabName = type;
			}
			const globalTab = tabName ? JetEngineFormSettings.global_tabs[ tabName ] : {};

			return key ? globalTab[ key ] : globalTab;
		},
		setCurrentVal: function ( name, value ) {
			this.$set( this.currentItem[ this.currentItem.type ], name, value );
		},
		getCurrentVal: function ( name, empty ) {
			return this.currentItem[ this.currentItem.type ][ name ]
				? this.currentItem[ this.currentItem.type ][ name ]
				: empty;
		},
		getCurrentValOrGlobal: function ( name ) {
			const current = this.currentItem[ this.currentItem.type ];

			return current.use_global ? this.currentGlobalTab( name ) : current[ name ];
		}

	}
});

function JEBookingFormSetMessages() {
	var $messages = jQuery('#messages-settings .messages-list'),
		messages_data = JetEngineFormSettings.messages;

	if( $messages.length ){
		jQuery.each( messages_data, function( message, value ) {
			$messages.find( 'input[name="_messages['+ message + ']"]' )[0].value = value;
		});
	}
}

jQuery( document ).ready( JEBookingFormSetMessages );
