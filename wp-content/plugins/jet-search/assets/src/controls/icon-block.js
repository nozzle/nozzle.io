import parse, { domToReact, attributesToProps } from 'html-react-parser';

const {
	Icon
} = wp.components;

const {
	Fragment
} = wp.element;

const IconBlock = function( props ) {

	const {
		iconSrc,
		iconSize,
		iconContainer,
		iconStyles
	} = props;

	let customIcon = null;

	if ( iconSrc ) {

		customIcon = parse( iconSrc, {
			trim: true,
			replace: ( domNode ) => {
				// TODO: Very basic SVG sanitization, needs more refinement.
				if (
					domNode.type !== 'tag' ||
					( ! domNode.parent && domNode.name !== 'svg' ) ||
					! domNode.name
				) {
					return <Fragment></Fragment>;
				}

				if ( 'svg' === domNode.name && iconSize ) {

					const svgProps = attributesToProps( domNode.attribs );
					const children = domNode.children;

					if ( ! children.length ) {
						return <Fragment></Fragment>;
					}

					svgProps.width     = iconSize;
					svgProps.height    = iconSize;
					svgProps.className = 'jet-advanced-list-item-block__icon';
					svgProps.style     = {};

					if ( iconStyles && iconStyles.color ) {
						svgProps.style.color = iconStyles.color;
					}

					return <svg { ...svgProps }>{ domToReact( children ) }</svg>;

				}

			},
		} );
	}

	const containerStyles = {};

	if ( iconStyles && ( iconStyles.paddingTop || 0 === iconStyles.paddingTop ) ) {
		containerStyles.paddingTop = iconStyles.paddingTop + 'px';
	}

	if ( iconStyles && ( iconStyles.paddingRight || 0 === iconStyles.paddingRight ) ) {
		containerStyles.paddingRight = iconStyles.paddingRight + 'px';
	}

	return <div
		className={ iconContainer }
		style={ containerStyles }
	>
		{ iconSrc && <Icon icon={ customIcon } /> }
	</div>
}

export default IconBlock;
