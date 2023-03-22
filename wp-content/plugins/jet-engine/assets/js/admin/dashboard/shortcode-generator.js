Vue.component( 'jet-engine-shortcode-generator', {
	name: 'jet-engine-shortcode-generator',
	template: '#jet-engine-shortcode-generator',
	data: function() {
		return {
			sources: window.JetEngineDashboardConfig.shortode_generator.sources,
			objectFields: window.JetEngineDashboardConfig.shortode_generator.object_fields,
			sourceArgs: window.JetEngineDashboardConfig.shortode_generator.source_args,
			metaFields: window.JetEngineDashboardConfig.shortode_generator.meta_fields,
			optionsPages: window.JetEngineDashboardConfig.shortode_generator.options_pages,
			callbacks: window.JetEngineDashboardConfig.shortode_generator.callbacks,
			cbArgs: window.JetEngineDashboardConfig.shortode_generator.cb_args,
			contextList: window.JetEngineDashboardConfig.shortode_generator.context_list,
			labels: window.JetEngineDashboardConfig.shortode_generator.labels,
			shortcode: '[jet_engine_data ]',
			controls: {},
			showCopyShortcode: undefined !== navigator.clipboard && undefined !== navigator.clipboard.writeText,
			attrs: {},
			copied: false,
		};
	},
	created: function() {
		
		this.addControl( 'dynamic_field_source', {
			label: this.labels.dynamic_field_source.label,
			type: 'select',
			default: 'object',
			options: this.sources,
		} );

		this.addControl( 'dynamic_field_post_object', {
			label: this.labels.dynamic_field_post_object.label,
			type: 'select',
			default: 'post_title',
			groups: this.objectFields,
			condition: {
				'dynamic_field_source': 'object',
			},
		} );

		this.addControl( 'dynamic_field_wp_excerpt', {
			label: this.labels.dynamic_field_wp_excerpt.label,
			type: 'switcher',
			default: '',
			condition: {
				'dynamic_field_source': 'object',
				'dynamic_field_post_object': 'post_excerpt',
			},
		} );

		this.addControl( 'dynamic_excerpt_more', {
			label: this.labels.dynamic_excerpt_more.label,
			type: 'text',
			default: '...',
			condition: {
				'dynamic_field_source': 'object',
				'dynamic_field_post_object': 'post_excerpt',
			},
		} );

		this.addControl( 'dynamic_excerpt_length', {
			label: this.labels.dynamic_excerpt_length.label,
			type: 'text',
			default: 0,
			condition: {
				'dynamic_field_source': 'object',
				'dynamic_field_post_object': 'post_excerpt',
			},
		} );

		this.addControl( 'dynamic_field_post_meta', {
			label: this.labels.dynamic_field_post_meta.label,
			type: 'select',
			default: '',
			groups: this.metaFields,
			condition: {
				'dynamic_field_source': 'meta',
			},
		} );

		this.addControl( 'dynamic_field_option', {
			label: this.labels.dynamic_field_option.label,
			type: 'select',
			default: '',
			groups: this.optionsPages,
			condition: {
				'dynamic_field_source': 'options_page',
			},
		} );

		this.addControl( 'dynamic_field_var_name', {
			label: this.labels.dynamic_field_var_name.label,
			type: 'text',
			default: '',
			condition: {
				'dynamic_field_source': 'query_var',
			},
		} );

		if ( this.sourceArgs && this.sourceArgs.length ) {
			for (var i = 0; i < this.sourceArgs.length; i++) {
				this.addControl( this.sourceArgs[ i ].name, this.sourceArgs[ i ].data );
			}
		}

		this.addControl( 'dynamic_field_post_meta_custom', {
			label: this.labels.dynamic_field_post_meta_custom.label,
			type: 'text',
			default: '',
			description: this.labels.dynamic_field_post_meta_custom.description,
			condition: {
				'dynamic_field_source!': [ 'query_var', 'options_page', 'relations_hierarchy' ],
			},
		} );

		this.addControl( 'hide_if_empty', {
			label: this.labels.hide_if_empty.label,
			type: 'switcher',
			default: '',
		} );

		this.addControl( 'field_fallback', {
			label: this.labels.field_fallback.label,
			type: 'text',
			default: '',
			condition: {
				'hide_if_empty': false,
			},
		} );

		this.addControl( 'dynamic_field_filter', {
			label: this.labels.dynamic_field_filter.label,
			type: 'switcher',
			default: '',
		} );

		const repeaterFields = {};

		repeaterFields.filter_callback = {
			label: this.labels.filter_callback.label,
			type: 'select',
			default: '',
			options: this.callbacks,
		};

		for ( const [ fieldName, fieldData ] of Object.entries( this.cbArgs ) ) {
			repeaterFields[ fieldName ] = fieldData;
		}

		this.addControl( 'filter_callbacks', {
			label: 'Applied Callbacks',
			type: 'repeater',
			title: 'filter_callback',
			fields: repeaterFields,
			condition: {
				'dynamic_field_filter': 'yes',
			},
		} );

		this.$set( this.attrs, 'filter_callbacks', [] );

		this.addControl( 'dynamic_field_custom', {
			label: this.labels.dynamic_field_custom.label,
			type: 'switcher',
			default: '',
		} );

		this.addControl( 'dynamic_field_format', {
			label: this.labels.dynamic_field_format.label,
			type: 'textarea',
			default: '%s',
			description: this.labels.dynamic_field_format.description,
			condition: {
				'dynamic_field_custom': 'yes',
			},
		} );

		this.addControl( 'object_context', {
			label: this.labels.object_context.label,
			type: 'select',
			default: 'default_object',
			options: this.contextList,
		} );

	},
	computed: {
		generatedShortcode: function() {

			var result = '[jet_engine_data';

			for ( const attr in this.attrs ) {

				if ( ! this.isVisible( this.controls[ attr ] ) ) {
					continue;
				}

				let value = this.attrs[ attr ];

				if ( value === this.controls[ attr ].default ) {
					continue;
				}

				if ( value instanceof Array ) {
					
					let toString = [];
					
					for ( var i = 0; i < value.length; i++ ) {

						let row = { ...value[ i ] }

						if ( undefined !== row._id ) {
							delete row._id;
						}

						if ( undefined !== row.collapsed ) {
							delete row.collapsed;
						}

						for ( const prop in row ) {
							let field = this.controls[ attr ].fields[ prop ]
							if ( ! this.isRepeaterFieldVisible( field, row ) ) {
								delete row[ prop ];
							}
						}

						row = new URLSearchParams( row );
						toString.push( '{' + row.toString() + '}' );
					}
					
					value = toString.join( ',' );
				} else {
					value = JSON.stringify( value );
				}
 
				result += ' ' + attr + '=' + value;

			}

			result += ']';

			return result;

		},
	},
	methods: {
		addControl: function( name, data ) {
			
			const preparedControls = this.getPreparedControls( { [name]: data } );

			for ( var i = 0; i < preparedControls.length; i++ ) {
				this.$set( this.controls, preparedControls[ i ].name, preparedControls[ i ] );
			}
			
		},
		addNewItem: function( event, props, parent, control, callback ) {

			props = props || [];

			var field = {};

			for ( const prop in control.fields ) {
				if ( control.fields[ prop ].default ) {
					field[ prop ] = control.fields[ prop ].default;
				}
			}

			field._id = Math.round( Math.random() * 1000000 );
			field.collapsed = false;

			parent.push( field );

			if ( callback && 'function' === typeof callback ) {
				callback( field, parent );
			}

		},
		deleteItemProp: function( id, key, parent ) {
			
			let index = this.searchByID( id, parent );

			if ( false === index ) {
				return;
			}

			let field = parent[ index ];

			delete field[ key ];

			parent.splice( index, 1, field );
		},
		setItemProp: function( id, key, value, parent ) {

			let index = this.searchByID( id, parent );

			if ( false === index ) {
				return;
			}

			let field = parent[ index ];

			field[ key ] = value;

			parent.splice( index, 1, field );

		},
		cloneItem: function( index, id, parent, callback ) {

			let field = JSON.parse( JSON.stringify( parent[ index ] ) );

			field.collapsed = false;
			field._id = Math.round( Math.random() * 1000000 );

			parent.splice( index + 1, 0, field );

			if ( callback && 'function' === typeof callback ) {
				callback( field, parent, id );
			}

		},
		deleteItem: function( index, id, parent, callback ) {

			index = this.searchByID( id, parent );

			if ( false === index ) {
				return;
			}

			parent.splice( index, 1 );

			if ( callback && 'function' === typeof callback ) {
				callback( id, index, parent );
			}

		},
		isCollapsed: function( parent ) {
			if ( undefined === parent.collapsed || true === parent.collapsed ) {
				return true;
			} else {
				return false;
			}
		},
		searchByID: function( id, list ) {

			for ( var i = 0; i < list.length; i++ ) {
				if ( id == list[ i ]._id ) {
					return i;
				}
			}

			return false;

		},
		getPreparedControls: function( inputControls ) {

			controls = [];

			for ( const controlID in inputControls ) {

				let control     = inputControls[ controlID ];
				let optionsList = [];
				let type        = control.type;
				let label       = control.label;
				let description = control.description || '';
				let defaultVal  = control.default;
				let groupsList  = [];
				let condition   = control.condition || {};
				let fields      = false;
				let title       = false;
				let inputType   = 'text';

				switch ( control.type ) {

					case 'text':
						type = 'cx-vui-input';
						break;

					case 'number':
						type = 'cx-vui-input';
						inputType = 'number';
						break;

					case 'textarea':
						type = 'cx-vui-textarea';
						break;

					case 'switcher':
						type = 'cx-vui-switcher';
						if ( 'yes' === defaultVal || 'true' === defaultVal ) {
							defaultVal = true;
						} else {
							defaultVal = false;
						}
						break;

					case 'repeater':
						type = 'repeater';
						title = control.title;
						fields = control.fields;
						break;

					case 'select':

						type = 'cx-vui-select';

						if ( control.groups ) {

							for ( var i = 0; i < control.groups.length; i++) {

								let group = control.groups[ i ];
								let groupOptions = [];

								if ( group.options ) {
									for ( const optionValue in group.options ) {
										
										if ( group.options[ optionValue ].value ) {
											groupOptions.push( group.options[ optionValue ] );
										} else {
											groupOptions.push( {
												value: optionValue,
												label: group.options[ optionValue ],
											} );
										}
										
									}
								} else if ( group.values ) {
									for ( var j = 0; j < group.values.length; j++ ) {
										groupOptions.push( group.values[ j ] );
									}
								}

								groupsList.push( {
									label: group.label,
									options: groupOptions,
								} );

							}
						} else {
							for ( const optionValue in control.options ) {
								if ( control.options[ optionValue ].value ) {
									optionsList.push( {
										value: control.options[ optionValue ].value,
										label: control.options[ optionValue ].label,
									} );
								} else {
									optionsList.push( {
										value: optionValue,
										label: control.options[ optionValue ],
									} );
								}
							}
						}

						break;

				}

				if ( undefined === this.attrs[ controlID ] ) {
					this.$set( this.attrs, controlID, defaultVal );
				}

				controls.push( {
					type: type,
					name: controlID,
					label: label,
					default: defaultVal,
					optionsList: optionsList,
					groupsList: groupsList,
					condition: condition,
					fields: fields,
					title: control.title,
					inputType: inputType,
				} );

			}

			return controls;

		},
		copyShortcodeToClipboard: function() {
			
			var self = this;

			navigator.clipboard.writeText( this.generatedShortcode ).then( function() {
				// clipboard successfully set
				self.copied = true;
				setTimeout( function() {
					self.copied = false;
				}, 2000 );
			}, function() {
				// clipboard write failed
			} );
		},
		isVisible: function( control ) {
			if ( ! control ) {
				return false;
			}
			if ( ! control.condition ) {
				return true;
			} else {
				return this.checkCondition( control.condition, this.attrs );
			}
		},
		isRepeaterFieldVisible: function( control, item ) {

			let res = false;

			if ( ! control.condition ) {
				res = true;
			} else {
				res = this.checkCondition( control.condition, item );
			}

			return res;

		},
		checkCondition: function( condition, attrs ) {

			let checkResult = true;

			condition = condition || {};

			for ( const [ fieldName, check ] of Object.entries( condition ) ) {

				let isExcl = fieldName.includes( '!' );
				let valToCheck = check;

				if ( 'yes' === check ) {
					valToCheck = true;
				}

				if ( 'no' === check ) {
					valToCheck = false;
				}

				if ( isExcl ) {

					let rFieldName = fieldName.replace( '!', '' );

					if ( valToCheck && valToCheck.length && 'string' !== typeof valToCheck ) {
						if ( valToCheck.includes( attrs[ rFieldName ] ) || valToCheck.includes( this.attrs[ rFieldName ] ) ) {
							checkResult = false;
						}
					} else {
						if ( valToCheck == attrs[ rFieldName ] || valToCheck == this.attrs[ rFieldName ] ) {
							checkResult = false;
						}
					}

				} else {
					if ( valToCheck && valToCheck.length && 'string' !== typeof valToCheck ) {
						if ( ! valToCheck.includes( attrs[ fieldName ] ) && ! valToCheck.includes( this.attrs[ fieldName ] ) ) {
							checkResult = false;
						}
					} else {
						if ( valToCheck != attrs[ fieldName ] && valToCheck != this.attrs[ fieldName ] ) {
							checkResult = false;
						}
					}
				}
				
			}

			return checkResult;

		}
	},
} );
