const { __ } = wp.i18n;

const {
	IconButton,
	RangeControl,
	TextControl,
	ToggleControl,
	SelectControl,
	PanelBody,
} = wp.components;

const {
	MediaUpload
} = wp.blockEditor;

const {
	Fragment
} = wp.element;

const ResultsAreaControls = props => {
    const {
        thumbSizes,
        arrowsTypeList,
		attributes
	} = props;

    return (
        <PanelBody
            title={ __( 'Results Area' ) }
            initialOpen={ false }
        >
            <SelectControl
                label= { __( "Results Area Width" ) }
                value={ attributes.results_area_width_by }
                options={ [
                    {
                        value: 'form',
                        label: __( 'by Search Form' ),
                    },
                    {
                        value: 'fields_holder',
                        label: __( 'by Input Box and Categories List' ),
                    },
                    {
                        value: 'custom',
                        label: __( 'Custom' ),
                    }
                ] }
                onChange={ value => {
                    props.setAttributes({ results_area_width_by: value });
                } }
            />

            <ToggleControl
                label={ __( "Highlight Searched Text" ) }
                className="jet-ajax-search-block-separator__before jet-ajax-search-block-separator__after"
                checked={ attributes.highlight_searched_text }
                onChange={ ( value ) => {
                    props.setAttributes( {
                        highlight_searched_text: value
                    } );
                } }
            />

            { 'custom' === attributes.results_area_width_by &&
                <Fragment>
                    <RangeControl
                        label={ __( 'Custom Width' ) }
                        value={ attributes.results_area_custom_width }
                        onChange={ value => {
                            props.setAttributes({ results_area_custom_width: value })
                        } }
                        min={ 0 }
                        max={ 2000 }
                    />

                    <SelectControl
                        label= { __( "Custom Position" ) }
                        value={ attributes.results_area_custom_position }
                        options={ [
                            {
                                value: 'left',
                                label: __( 'Left' ),
                            },
                            {
                                value: 'center',
                                label: __( 'Center' ),
                            },
                            {
                                value: 'right',
                                label: __( 'Right' ),
                            }
                        ] }
                        onChange={ value => {
                            props.setAttributes({ results_area_custom_position: value });
                        } }
                    />
                </Fragment>
            }

            <ToggleControl
                label={ __( "Show Post Thumbnail" ) }
                checked={ attributes.thumbnail_visible }
                onChange={ ( value ) => {
                    props.setAttributes( {
                        thumbnail_visible: value
                    } );
                } }
            />

            { attributes.thumbnail_visible &&
                <Fragment>
                    <SelectControl
                        label= { __( "Thumbnail Size" ) }
                        value={ attributes.thumbnail_size }
                        options={ thumbSizes }
                        onChange={ value => {
                            props.setAttributes({ thumbnail_size: value });
                        }}
                    />

                    <label>Thumbnail Placeholder</label>
                    { attributes.thumbnail_placeholder['url'] &&
                        <div>
                            <img
                                src={ attributes.thumbnail_placeholder['url'] }
                                width="100%"
                                height="auto"
                            />
                        </div>
                    }
                    <MediaUpload
                            onSelect={ media => {
                                    props.setAttributes( { thumbnail_placeholder: { id: media.id, url: media.url } } );
                                }
                            }
                            allowedTypes={ ["image"] }
                            value={ attributes.thumbnail_placeholder['url'] }
                            render={ ( { open } ) => (
                                <IconButton
                                    isSecondary
                                    icon="edit"
                                    onClick={ open }
                                >{ __("Select Image") }</IconButton>
                            ) }
                        />
                </Fragment>
            }

            <SelectControl
                label= { __( "Post Content Source" ) }
                className="jet-ajax-search-block-separator__before"
                value={ attributes.post_content_source }
                options={ [
                    {
                        value: 'content',
                        label: __( 'Post Content' ),
                    },
                    {
                        value: 'excerpt',
                        label: __( 'Post Excerpt' ),
                    },
                    {
                        value: 'custom-field',
                        label: __( 'Custom Field' ),
                    }
                ] }
                onChange={ value => {
                    props.setAttributes({ post_content_source: value });
                } }
            />

            { 'custom-field' === attributes.post_content_source &&
                <TextControl
                    type="text"
                    label={ __("Custom Field Key") }
                    value={ attributes.post_content_custom_field_key }
                    onChange={ ( value ) => {
                        props.setAttributes( {
                            post_content_custom_field_key: value
                        } );
                    } }
                />
            }

            <RangeControl
                label={ __( 'Post Content Length' ) }
                help={ __( 'Set 0 to hide content.' ) }
                value={ attributes.post_content_length }
                onChange={ value => {
                    props.setAttributes({ post_content_length: value })
                } }
                min={ 0 }
                max={ 150 }
            />

            <ToggleControl
                label={ __( "Show Product Price" ) }
                checked={ attributes.show_product_price }
                onChange={ ( value ) => {
                    props.setAttributes( {
                        show_product_price: value
                    } );
                } }
            />

            <ToggleControl
                label={ __( "Show Product Rating" ) }
                checked={ attributes.show_product_rating }
                onChange={ ( value ) => {
                    props.setAttributes( {
                        show_product_rating: value
                    } );
                } }
            />

            <ToggleControl
                label={ __( "Show Results Counter" ) }
                checked={ attributes.show_results_counter }
                onChange={ ( value ) => {
                    props.setAttributes( {
                        show_results_counter: value
                    } );
                } }
            />

            { attributes.show_results_counter &&
                <TextControl
                    type="text"
                    label={ __("Results Counter Text") }
                    value={ attributes.results_counter_text }
                    onChange={ ( value ) => {
                        props.setAttributes( {
                            results_counter_text: value
                        } );
                    } }
                />
            }

            <ToggleControl
                label={ __( "Show All Results Button" ) }
                checked={ attributes.show_full_results }
                onChange={ ( value ) => {
                    props.setAttributes( {
                        show_full_results: value
                    } );
                } }
            />

            { attributes.show_full_results &&
                <TextControl
                    type="text"
                    label={ __("All Results Button Text") }
                    value={ attributes.full_results_btn_text }
                    onChange={ ( value ) => {
                        props.setAttributes( {
                            full_results_btn_text: value
                        } );
                    } }
                />
            }

            <ToggleControl
                label={ __( "Open Results In New Tab" ) }
                checked={ attributes.show_result_new_tab }
                onChange={ ( value ) => {
                    props.setAttributes( {
                        show_result_new_tab: value
                    } );
                } }
            />

            <p>Results Navigation</p>

            <SelectControl
                label= { __( "Bullet Pagination" ) }
                value={ attributes.bullet_pagination }
                options={ [
                    {
                        value: '',
                        label: __( 'Hide' ),
                    },
                    {
                        value: 'in_header',
                        label: __( 'Show in header' ),
                    },
                    {
                        value: 'in_footer',
                        label: __( 'Show in footer' ),
                    },
                    {
                        value: 'both',
                        label: __( 'Show in header and footer' ),
                    }
                ] }
                onChange={ value => {
                    props.setAttributes({ bullet_pagination: value });
                } }
            />

            <SelectControl
                label= { __( "Number Pagination" ) }
                value={ attributes.number_pagination }
                options={ [
                    {
                        value: '',
                        label: __( 'Hide' ),
                    },
                    {
                        value: 'in_header',
                        label: __( 'Show in header' ),
                    },
                    {
                        value: 'in_footer',
                        label: __( 'Show in footer' ),
                    },
                    {
                        value: 'both',
                        label: __( 'Show in header and footer' ),
                    }
                ] }
                onChange={ value => {
                    props.setAttributes({ number_pagination: value });
                } }
            />

            <SelectControl
                label= { __( "Navigation Arrows" ) }
                value={ attributes.navigation_arrows }
                options={ [
                    {
                        value: '',
                        label: __( 'Hide' ),
                    },
                    {
                        value: 'in_header',
                        label: __( 'Show in header' ),
                    },
                    {
                        value: 'in_footer',
                        label: __( 'Show in footer' ),
                    },
                    {
                        value: 'both',
                        label: __( 'Show in header and footer' ),
                    }
                ] }
                onChange={ value => {
                    props.setAttributes({ navigation_arrows: value });
                } }
            />

            { '' != attributes.navigation_arrows &&
                <SelectControl
                    label= { __( "Navigation Arrows Type" ) }
                    value={ attributes.navigation_arrows_type }
                    options={ arrowsTypeList }
                    onChange={ value => {
                        props.setAttributes({ navigation_arrows_type: value });
                    } }
                />
            }
    </PanelBody>
    );
}

export default ResultsAreaControls;