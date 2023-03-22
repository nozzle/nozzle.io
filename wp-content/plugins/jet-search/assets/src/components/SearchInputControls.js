import IconControl from '../controls/icon-control';

const { __ } = wp.i18n;

const {
	TextControl,
	ToggleControl,
	SelectControl,
	PanelBody,
    RangeControl,
} = wp.components;

const {
	Fragment
} = wp.element;

const SearchInputControls = props => {
    const {
		taxonomies,
		attributes,
		setAttributes,
	} = props;

    return (
        <PanelBody
            title={ __( 'Search Input' ) }
        >

            <TextControl
                label={ __( 'Placeholder' ) }
                help={ __( 'Placeholder text for the search input' ) }
                value={ attributes.search_placeholder_text }
                onChange={ ( value ) => {
                    props.setAttributes( {
                        search_placeholder_text: value
                    } )
                } }
            />
            <p>Input Icon</p>
            <IconControl
                icon={ attributes.selected_search_field_icon }
                onChange={ ( value ) => {
                    props.setAttributes( {
                        selected_search_field_icon: value
                    } );
                } }
            />

            <ToggleControl
                label={ __( "Show Categories List" ) }
                checked={ attributes.show_search_category_list }
                onChange={ ( value ) => {
                    props.setAttributes( {
                        show_search_category_list: value
                    } );
                } }
            />

            { attributes.show_search_category_list &&
                <Fragment>

                    <SelectControl
                        label= { __( "Taxonomy" ) }
                        value={ attributes.search_taxonomy }
                        options={ taxonomies }
                        onChange={ value => {
                            props.setAttributes({ search_taxonomy: value });
                        }}
                    />

                    <TextControl
                        type="text"
                        label={ __("Select Placeholder") }
                        value={ attributes.search_category_select_placeholder }
                        onChange={ ( value ) => {
                            props.setAttributes( {
                                search_category_select_placeholder: value
                            } );
                        } }
                    />
                </Fragment>
            }

            <ToggleControl
                label={ __( "Responsive Form on Mobile" ) }
                checked={ attributes.search_form_responsive_on_mobile }
                onChange={ ( value ) => {
                    props.setAttributes( {
                        search_form_responsive_on_mobile: value
                    } );
                } }
            />

            <RangeControl
                label={ __( 'Minimal Quantity of Symbols for Search' ) }
                value={ attributes.symbols_for_start_searching }
                onChange={ value => {
                    props.setAttributes({ symbols_for_start_searching: value })
                } }
                min={ 1 }
                max={ 10 }
            />
        </PanelBody>
    )
}

export default SearchInputControls;