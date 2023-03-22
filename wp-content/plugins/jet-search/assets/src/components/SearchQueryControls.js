import Select from 'react-select';

const { __ } = wp.i18n;

const {
	RangeControl,
	TextControl,
	ToggleControl,
	SelectControl,
	PanelBody,
} = wp.components;

const {
	Fragment
} = wp.element;

const SearchQueryControls = props => {
    const {
        postTypes,
		attributes,
        taxonomies,
        multipleSelector,
		setAttributes,
	} = props;

    return (
        <PanelBody
            title={ __( 'Search Query' ) }
            initialOpen={ false }
        >
            <ToggleControl
                label={ __( 'Search by the current query' ) }
                help={ __( 'Use for Archive Templates' ) }
                className="jet-ajax-search-block-separator__before"
                checked={ attributes.current_query }
                onChange={ ( value ) => {
                    props.setAttributes( {
                        current_query: value
                    } );
                } }
            />

            { ! attributes.current_query &&
                <Fragment>
                    <p>Source</p>
                    <Select
                        defaultValue={ attributes.search_source_list }
                        className="jet-ajax-search-block-separator__after"
                        isMulti
                        options={ postTypes }
                        onChange={ ( value ) => {
                            multipleSelector( value, 'search_source' );
                        } }
                    />
                    <p className="control-help">You can select particular search areas. If nothing is selected in the option, the search will be made over the entire site.</p>
                </Fragment>
            }

            <TextControl
                type="text"
                label={ __("Search in custom fields") }
                help={ __( 'Set comma separated custom fields keys list (_sku, _price, etc.)') }
                value={ attributes.custom_fields_source }
                onChange={ ( value ) => {
                    props.setAttributes( {
                        custom_fields_source: value
                    } );
                } }
            />

            <ToggleControl
                label={ __( 'Sentence Search' ) }
                checked={ attributes.sentence }
                onChange={ ( value ) => {
                    props.setAttributes( {
                        sentence: value
                    } );
                } }
            />

            <ToggleControl
                label={ __( 'Search in taxonomy terms' ) }
                help={ __( 'Include in the search results the posts containing the terms of the selected taxonomies with the search phrase in the term name' ) }
                checked={ attributes.search_in_taxonomy }
                onChange={ ( value ) => {
                    props.setAttributes( {
                        search_in_taxonomy: value
                    } );
                } }
            />

            { attributes.search_in_taxonomy &&
                <Fragment>
                    <p>Taxonomies</p>
                    <Select
                        defaultValue={ attributes.search_in_taxonomy_source_list }
                        className="jet-ajax-search-block-separator__after"
                        isMulti
                        options={ taxonomies }
                        onChange={ ( value ) => {
                            multipleSelector( value, 'search_in_taxonomy_source' );
                        } }
                    />
                </Fragment>
            }

            <SelectControl
                label= { __( "Results Order By" ) }
                value={ attributes.results_order_by }
                options={ [
                    {
                        value: 'relevance',
                        label: __( 'Relevance' ),
                    },
                    {
                        value: 'ID',
                        label: __( 'ID' ),
                    },
                    {
                        value: 'author',
                        label: __( 'Author' ),
                    },
                    {
                        value: 'title',
                        label: __( 'Title' ),
                    },
                    {
                        value: 'date',
                        label: __( 'Date' ),
                    },
                    {
                        value: 'modified',
                        label: __( 'Last modified' ),
                    },
                    {
                        value: 'rand',
                        label: __( 'Rand' ),
                    },
                    {
                        value: 'comment_coun',
                        label: __( 'Number of Comments (descending)' ),
                    },
                    {
                        value: 'menu_order',
                        label: __( 'Menu order' ),
                    }
                ] }
                onChange={ value => {
                    props.setAttributes({ results_order_by: value });
                } }
            />

            <SelectControl
                label= { __( "Results Order" ) }
                value={ attributes.results_order }
                options={ [
                    {
                        value: 'asc',
                        label: __( 'ASC' ),
                    },
                    {
                        value: 'desc',
                        label: __( 'DESC' ),
                    }
                ] }
                onChange={ value => {
                    props.setAttributes({ results_order: value });
                } }
            />

            <RangeControl
                label={ __( 'Posts Per Page' ) }
                help={ __( 'A number of results displayed on one search page.' ) }
                value={ attributes.limit_query }
                onChange={ value => {
                    props.setAttributes({ limit_query: value })
                } }
                min={ 0 }
                max={ 50 }
            />

            <RangeControl
                label={ __( 'Posts Number' ) }
                help={ __( 'A number of results displayed in one search query.' ) }
                value={ attributes.limit_query_in_result_area }
                onChange={ value => {
                    props.setAttributes({limit_query_in_result_area: value})
                } }
                min={ 0 }
                max={ 150 }
            />
        </PanelBody>
    )
}

export default SearchQueryControls;