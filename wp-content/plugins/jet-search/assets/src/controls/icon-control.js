import IconBlock from './icon-block';
const { __ } = wp.i18n;

const {
	Button,
	ButtonGroup,
	TextareaControl,
	defaultIcon,
	Notice,
	Icon,
	RangeControl
} = wp.components;

const {
	MediaUpload,
	MediaUploadCheck,
	ColorPalette
} = wp.blockEditor;

const {
	Fragment,
	Component,
	useState
} = wp.element;

class IconControl extends Component {

	constructor( props ) {

		super( props );

		const iconType = this.getTypeFromProps();

		this.state = {
			iconType: iconType,
			error: '',
		};

	}

	getTypeFromProps() {

		let type = 'media';

		if ( this.props.icon && this.props.icon.src && this.props.icon.id ) {
			type = 'raw';
		}

		return type;

	}

	onChange( fieldName, value ) {

		this.setState( ( state ) => {
			const newState = assign( {}, state, { [ fieldName ]: value } );
			this.props.onChange( newState );
			return newState;
		} );

	}

	isHidden( control ) {

		if ( ! this.props.hideControls || ! this.props.hideControls.length ) {
			return false;
		}

		return this.props.hideControls.includes( control );
	}

	getIconSrc() {
		if ( this.props.icon && 'object' === typeof this.props.icon && this.props.icon.src ) {
			return this.props.icon.src;
		} else {
			return '';
		}
	}

	getIconID() {
		if ( this.props.icon && 'object' === typeof this.props.icon && this.props.icon.id ) {
			return this.props.icon.id;
		} else {
			return null;
		}
	}

	render() {

		const supportSVG = window.JetSearchData.supportSVG;

		const {
			icon,
			onChange,
			defaultIcon,
		} = this.props;

		const showRawInput = ( 'raw' === this.state.iconType || ! supportSVG );
		const ALLOWED_MEDIA_TYPES = [ 'image/svg+xml' ];

		let defaultIconSrc = '';

		if ( this.props.defaultIcon ) {
			defaultIconSrc = "\u003csvg xmlns=\u0022http://www.w3.org/2000/svg\u0022 width=\u002224\u0022 height=\u002224\u0022 viewBox=\u00220 0 24 24\u0022\u003e\u003cpath d=\u0022M23.809 21.646l-6.205-6.205c1.167-1.605 1.857-3.579 1.857-5.711 0-5.365-4.365-9.73-9.731-9.73-5.365 0-9.73 4.365-9.73 9.73 0 5.366 4.365 9.73 9.73 9.73 2.034 0 3.923-.627 5.487-1.698l6.238 6.238 2.354-2.354zm-20.955-11.916c0-3.792 3.085-6.877 6.877-6.877s6.877 3.085 6.877 6.877-3.085 6.877-6.877 6.877c-3.793 0-6.877-3.085-6.877-6.877z\u0022/\u003e\u003c/svg\u003e";
		}

		return <Fragment>
			{ supportSVG && <ButtonGroup style={ { paddingBottom: '15px' } }>
				<Button
					isSmall={ true }
					isPrimary={ ( 'raw' === this.state.iconType ) }
					isSecondary={ ( 'raw' !== this.state.iconType ) }
					onClick={ () => {
						this.setState( { iconType: 'raw' } );
					} }
				>{ __( 'Raw icon' ) }</Button>
				<Button
					isSmall={ true }
					isPrimary={ ( 'media' === this.state.iconType ) }
					isSecondary={ ( 'media' !== this.state.iconType ) }
					onClick={ () => {
						this.setState( { iconType: 'media' } );
					} }
				>{ __( 'From media library' ) }</Button>
			</ButtonGroup> }
			{ showRawInput && <TextareaControl
				label={ __( 'SVG Icon', 'jet-advanced-list-block' ) }
				help={ __( 'Paste raw SVG icon code', 'jet-advanced-list-block' ) }
				value={ this.getIconSrc() }
				onChange={ ( value ) => {
					this.props.onChange( {
						src: value,
						id: false,
					} )
				} }
			/> }
			{ ! showRawInput && <MediaUploadCheck>
				<MediaUpload
					onSelect={ ( media ) => {

						const requestURL = window.ajaxurl + '?action=jet_advanced_list_block_get_svg&media_id=' + media.id;

						wp.apiFetch( {
							method: 'get',
							url: requestURL,
						} ).then( ( response ) => {
							if ( response.success ) {

								this.props.onChange( {
									src: response.data,
									id: media.id
								} );

								this.setState( {
									error: '',
								} );
							} else {
								this.setState( {
									error: response.data,
								} );
							}
						} );
					} }
					allowedTypes={ ALLOWED_MEDIA_TYPES }
					value={ this.getIconID() }
					render={ ( { open } ) => (
						<div>
							<div style={ {
								display: 'flex',
								justifyContent: 'space-between',
							} }>
								<Button
									onClick={ open }
									isSecondary={ true }
								>{ __( 'Select or upload icon' ) }</Button>
								{ this.getIconID() && <Button
									onClick={ () => {
										this.props.onChange( {
											src: defaultIconSrc,
											id: false,
										} );
									} }
									isDestructive={ true }
								>{ __( 'Reset' ) }</Button> }
							</div>
							{ this.state.error && <div
								className="components-notice is-error"
								style={ {
									margin: '10px 0 0 0'
								} }
							>
								<div className="components-notice__content">{ this.state.error }</div>
							</div> }
							<br/>
						</div>
					) }
				/>
			</MediaUploadCheck> }
			<IconBlock
				iconSrc={ this.props.icon.src }
				iconContainer={ 'jet-search--icon-preview' }
			/>
		</Fragment>

	}
}

export default IconControl;
