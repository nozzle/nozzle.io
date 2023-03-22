/**
 * This script adds the jquery effects to the Monochrome Pro Theme.
 *
 * @package Monochrome\JS
 * @author StudioPress
 * @license GPL-2.0-or-later
 */
( function( $ ) {

	// Cache DOM selectors.
	var $header    = $( '.site-header' ),
		$hsToggle  = $( '.toggle-header-search' ),
		$hsWrap    = $( '#header-search-wrap' ),
		$hsInput   = $hsWrap.find( 'input[type="search"]' ),
		$footer    = $( '.site-footer' ),
		$container = $( '.site-container' );

	// Make sure JS class is added.
	$( document ).ready( function() {
		$( 'body' ).addClass( 'js' );
	});

	// Run on page scroll.
	$( window ).scroll( function() {

		// Toggle header class after threshold point.
		if ( 50 < $( document ).scrollTop() ) {
			$( '.site-container' ).addClass( 'shadow' );
		} else {
			$( '.site-container' ).removeClass( 'shadow' );
		}

	});

	// Set the container margin to the footer height for effect.
	$container.css( 'margin-bottom', $footer.outerHeight() );

	// Handler for click a show/hide button.
	$hsToggle.on( 'click', function( event ) {

		event.preventDefault();

		if ( $( this ).hasClass( 'close' ) ) {
			hideSearch();
		} else {
			showSearch();
		}

	});

	// Handler for pressing show/hide button.
	$hsToggle.on( 'keydown', function( event ) {

		// If tabbing from toggle button, and search is hidden, exit early.
		if ( 9 === event.keyCode && ! $header.hasClass( 'search-visible' ) ) {
			return;
		}

		event.preventDefault();
		handleKeyDown( event );

	});

	// Hide search when tabbing or escaping out of the search bar.
	$hsInput.on( 'keydown', function( event ) {

		// Tab: 9, Esc: 27.
		if ( 9 === event.keyCode || 27 === event.keyCode ) {
			hideSearch( event.target );
		}

	});

	// Hide search on blur, such as when clicking outside it.
	$hsInput.on( 'blur', hideSearch );

	// Helper function to show the search form.
	function showSearch() {

		$header.addClass( 'search-visible' );
		$hsWrap.fadeIn( 'fast' ).find( 'input[type="search"]' ).focus();
		$hsToggle.attr( 'aria-expanded', true );

	}

	// Helper function to hide the search form.
	function hideSearch() {

		$hsWrap.fadeOut( 'fast' ).parents( '.site-header' ).removeClass( 'search-visible' );
		$hsToggle.attr( 'aria-expanded', false );

	}

	// Keydown handler function for toggling search field visibility.
	function handleKeyDown( event ) {

		// Enter/Space, respectively.
		if ( 13 === event.keyCode || 32 === event.keyCode ) {

			event.preventDefault();

			if ( $( event.target ).hasClass( 'close' ) ) {
				hideSearch();
			} else {
				showSearch();
			}

		}

	}

}( jQuery ) );
