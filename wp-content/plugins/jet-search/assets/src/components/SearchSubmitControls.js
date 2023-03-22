import IconControl from '../controls/icon-control';

const { __ } = wp.i18n;

const {
	TextControl,
	ToggleControl,
	PanelBody,
} = wp.components;

const {
	Fragment
} = wp.element;

const SearchSubmitControls = props => {
    const {
		attributes,
		setAttributes,
	} = props;

    return (
        <PanelBody
            title={ __( 'Search Submit' ) }
            initialOpen={ false }
        >
            <ToggleControl
                label={ __( 'Show Submit Button' ) }
                checked={ attributes.show_search_submit }
                onChange={ () => {
                    props.setAttributes( {
                        show_search_submit: ! attributes.show_search_submit
                    } );
                } }
            />
            { attributes.show_search_submit && <Fragment>
                <TextControl
                    label={ __( 'Button Label' ) }
                    value={ attributes.search_submit_label }
                    onChange={ ( value ) => {
                        props.setAttributes( {
                            search_submit_label: value
                        } )
                    } }
                />
                <p>Button Icon</p>
                <IconControl
                    icon={ attributes.selected_search_submit_icon }
                    defaultIcon
                    onChange={ ( value ) => {
                        props.setAttributes( {
                            selected_search_submit_icon: value
                        } );
                    } }
                />
            </Fragment> }
        </PanelBody>
    );
}

export default SearchSubmitControls;