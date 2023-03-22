const { __ } = wp.i18n;

const {
	TextareaControl,
	PanelBody,
} = wp.components;

const NotificationsControls = props => {
    const {
		attributes,
	} = props;

    return (
        <PanelBody
            title={ __( 'Notifications' ) }
            initialOpen={ false }
        >
            <TextareaControl
                label="Negative search results"
                value={ attributes.negative_search }
                onChange={ value => {
                    props.setAttributes({ negative_search: value });
                } }
            />

            <TextareaControl
                label="Technical error"
                value={ attributes.server_error }
                onChange={ value => {
                    props.setAttributes({ server_error: value });
                } }
            />
        </PanelBody>
    )
}

export default NotificationsControls;