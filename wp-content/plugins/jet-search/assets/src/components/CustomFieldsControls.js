import CustomFieldsMetaRepeater from './CustomFieldsMetaRepeater';

const { __ } = wp.i18n;

const {
	ToggleControl,
	SelectControl,
	PanelBody
} = wp.components;

const {
	Fragment
} = wp.element;

const CustomFieldsControls = props => {

    const {
		className,
		attributes,
		setAttributes,
	} = props;

    return (
        <PanelBody
            title={ __( 'Custom Fields' ) }
            initialOpen={ false }
        >
            <ToggleControl
                label={ __( "Show Meta Before/After Title" ) }
                checked={ attributes.show_title_related_meta }
                onChange={ ( value ) => {
                    props.setAttributes( {
                        show_title_related_meta: value
                    } );
                } }
            />

            { attributes.show_title_related_meta &&
                <Fragment>
                    <SelectControl
                        label= { __( "Meta Fields Position" ) }
                        value={ attributes.meta_title_related_position }
                        options={ [
                            {
                                value: 'before',
                                label: __( 'Before' ),
                            },
                            {
                                value: 'after',
                                label: __( 'After' ),
                            }
                        ] }
                        onChange={ value => {
                            props.setAttributes({ meta_title_related_position: value });
                        } }
                    />

                    <CustomFieldsMetaRepeater attributes={ attributes } setAttributes={ setAttributes } positionSlug="title_related_meta"/>
                </Fragment>
            }

            <ToggleControl
                label={ __( "Show Meta Before/After Content" ) }
                checked={ attributes.show_content_related_meta }
                onChange={ ( value ) => {
                    props.setAttributes( {
                        show_content_related_meta: value
                    } );
                } }
            />

            { attributes.show_content_related_meta &&
                <Fragment>
                    <SelectControl
                        label= { __( "Meta Fields Position" ) }
                        value={ attributes.meta_content_related_position }
                        options={ [
                            {
                                value: 'before',
                                label: __( 'Before' ),
                            },
                            {
                                value: 'after',
                                label: __( 'After' ),
                            }
                        ] }
                        onChange={ value => {
                            props.setAttributes({ meta_content_related_position: value });
                        } }
                    />

                    <CustomFieldsMetaRepeater attributes={ attributes } setAttributes={ setAttributes } positionSlug="content_related_meta"/>
                </Fragment>
            }
        </PanelBody>
    )
}

export default CustomFieldsControls;