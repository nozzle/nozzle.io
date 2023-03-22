/**
 * Animate elements with CSS as they appear in the viewport via custom classes.
 *
 * Add a single custom class to a block's Advanced field in the block editor:
 * - fade-in
 * - fade-in-up
 *
 * Blocks will be hidden but then animate into view when their top or bottom
 * appears between the viewport top and bottom.
 *
 * Enqueueing this file at the bottom of your site's body element is enough to
 * make the effects available. No further configuration or CSS is required.
 *
 * @author StudioPress
 * @link https://www.studiopress.com/
 * @version 1.0.0
 * @license GPL-2.0-or-later
 */

var studiopress = studiopress || {};

studiopress.blockEffects = ( function() {
	'use strict';

	// Classes that can be applied to elements.
	var effectClasses = [ '.fade-in', '.fade-in-up' ];

	// Whether a position check is running or not.
	var ticking = false;

	/**
	 * Injects effects CSS into the page dynamically.
	 * @since 1.0.0
	 */
	var addCSS = function() {
		var style = document.createElement( 'style' );
		style.classList.add( 'studiopress-block-effects-js' ); // To help identify where inline styles are coming from.

		style.innerHTML =

			// Hide elements with effects on page load, set up animation duration.
			'.fade-in, .fade-in-up { opacity: 0; -webkit-animation-duration: 1s; animation-duration: 1s; -webkit-animation-fill-mode: both; animation-fill-mode: both; -webkit-animation-timing-function: ease-in-out; animation-timing-function: ease-in-out; } ' +

			// Do not apply effects when pages are printed.
			'@media print { .fade-in, .fade-in-up { opacity: 1 !important; -webkit-animation: unset !important; animation: unset !important; -webkit-transition: none !important; transition: none !important; } } ' +

			// Fade in effect.
			'@-webkit-keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } } ' +
			'@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } } ' +
			'.fade-in.in-viewport { -webkit-animation-name: fadeIn; animation-name: fadeIn; } ' +

			// Fade in up effect.
			'@-webkit-keyframes fadeInUp { from { opacity: 0; -webkit-transform: translate3d(0, 20px, 0); transform: translate3d(0, 20px, 0); } ' +
			'to { opacity: 1; -webkit-transform: translate3d(0, 0, 0); transform: translate3d(0, 0, 0); } } ' +
			'@keyframes fadeInUp { from { opacity: 0; -webkit-transform: translate3d(0, 20px, 0); transform: translate3d(0, 20px, 0); } ' +
			'to { opacity: 1; -webkit-transform: translate3d(0, 0, 0); transform: translate3d(0, 0, 0); } } ' +
			'.fade-in-up.in-viewport { -webkit-animation-name: fadeInUp; animation-name: fadeInUp; } ';

		document.body.appendChild( style );
	};

	/**
	 * Checks if the top or bottom of the given element is within the viewport.
	 * Uses top and bottom bounds only and ignores left and right position.
	 * @since 1.0.0
	 * @param {object} elem The element to check.
	 * @returns {bool}
	 */
	var isInViewport = function( elem ) {
		var bounding = elem.getBoundingClientRect();
		return (
			( 0 <= bounding.top &&
			bounding.top <= ( window.innerHeight || document.documentElement.clientHeight ) ) ||
			( 0 <= bounding.bottom &&
			bounding.bottom <= ( window.innerHeight || document.documentElement.clientHeight ) )
		);
	};

	/**
	 * Iterates over elements with effect classes.
	 * Applies in-viewport class when in viewport.
	 * @since 1.0.0
	 */
	var addInViewPortClass = function() {
		var i, j, elements;

		for ( i = 0; i < effectClasses.length; ++i ) {
			elements = document.querySelectorAll( effectClasses[i]);

			for ( j = 0; j < elements.length; ++j ) {
				if ( isInViewport( elements[j]) ) {
					elements[j].classList.add( 'in-viewport' );
				}
			}
		}

		ticking = false;
	};

	/**
	 * Triggers a new animation frame request if none are running.
	 * @since 1.0.0
	 */
	var update = function() {
		if ( ! ticking ) {
			window.requestAnimationFrame( addInViewPortClass );
			ticking = true;
		}
	};

	return {

		/**
		 * Adds CSS and sets up viewport check.
		 * Runs on ready to fade as early as possible, on load to account for
		 * reflow that moves content into the viewport, and on scroll or resize
		 * to show elements that are moved into the viewport by the user.
		 * @since 1.0.0
		 */
		init: function() {
			addCSS();
			update();
			window.addEventListener( 'load', update, false );
			window.addEventListener( 'scroll', update, false );
			window.addEventListener( 'resize', update, false );
		}
	};
}() );

studiopress.blockEffects.init();
