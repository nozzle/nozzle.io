import JetSearchRepeater from '../controls/repeater-control';
import { clone } from '../utils/utility';

const { __ } = wp.i18n;

const {
	TextControl,
	SelectControl
} = wp.components;

const CustomFieldsMetaRepeater = props => {
    const {
		positionSlug,
		attributes,
		setAttributes
	} = props;

    const updateItem = function( item, key, value, prop ) {

		prop = prop || positionSlug;

		const query       = clone( props.attributes[ prop ] );
		const index       = getItemIndex( item );
		const currentItem = query[ getItemIndex( item, prop ) ];

		if ( ! currentItem ) {
			return;
		}

		if ( 'object' === typeof key ) {
			for ( var _key in key ) {
				currentItem[_key] = key[_key];
			}
		} else {
			currentItem[ key ] = value;
		}

		query[ index ] = currentItem;

		props.setAttributes( { [ prop ]: query } );

	};

	const getItemIndex = function( item, prop ) {

		prop = prop || positionSlug;

		return props.attributes[ prop ].findIndex( queryItem => {
			return queryItem == item;
		} );
	};

    return (
        <JetSearchRepeater
            data={ attributes[positionSlug] }
            default={{
                meta_label: "Label",
                meta_format: "%s"
            }}
            onChange={ newData => {
                props.setAttributes({ [positionSlug]: newData });
            } }
        >
            {
                ( item ) =>
                    <div>
                        <TextControl
                            type="text"
                            label={ __("Key") }
                            help={ __( 'Meta key from post-meta table in database' ) }
                            value={ item.meta_key }
                            onChange={ newValue => {
                                updateItem( item, 'meta_key', newValue )
                            } }
                        />

                        <TextControl
                            type="text"
                            label={ __("Label") }
                            value={ item.meta_label }
                            onChange={ newValue => {
                                updateItem( item, 'meta_label', newValue )
                            } }
                        />

                        <TextControl
                            type="text"
                            label={ __("Value Format") }
                            help={ __( 'Value format string, accepts HTML markup. %s - is meta value') }
                            value={ item.meta_format }
                            onChange={ newValue => {
                                updateItem( item, 'meta_format', newValue )
                            } }
                        />

                        <SelectControl
                            label= { __( 'Prepare meta value with callback' ) }
                            value={ item.meta_callback }
                            options={ [
                                {
                                    value: '',
                                    label: __( 'Clean' ),
                                },
                                {
                                    value: 'date',
                                    label: __( 'Format date' ),
                                },
                                {
                                    value: 'date_i18n',
                                    label: __( 'Format date (localized)' ),
                                },
                                {
                                    value: 'get_the_title',
                                    label: 'get_the_title',
                                },
                                {
                                    value: 'wp_get_attachment_url',
                                    label: 'wp_get_attachment_url',
                                },
                                {
                                    value: 'wp_get_attachment_image',
                                    label: 'wp_get_attachment_image',
                                },
                            ] }
                            onChange={ newValue => {
                                updateItem( item, 'meta_callback', newValue )
                            } }
                        />

                        { ('date' === item.meta_callback || 'date_i18n' === item.meta_callback ) &&
                            <TextControl
                                type="text"
                                label={ __("Format") }
                                help={ <a href="https://codex.wordpress.org/Formatting_Date_and_Time" target="_blank">Documentation on date and time formatting</a> }
                                value={ item.date_format }
                                onChange={ newValue => {
                                    updateItem( item, 'date_format', newValue )
                                } }
                            />
                        }
                    </div>
            }
        </JetSearchRepeater>
    )
}

export default CustomFieldsMetaRepeater;