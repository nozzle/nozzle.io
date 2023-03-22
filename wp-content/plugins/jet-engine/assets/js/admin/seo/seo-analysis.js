(function( $ ) {
	'use strict';

	/**
	 * Base Analysis class.
	 */
	class JetEngineSeoAnalysisBase {

		constructor() {

			if ( !this.isActivate() ) {
				return;
			}
			
			this.setup();
			this.hooks();
			this.events();
		}
		
		isActivate() {
			return true;
		}

		setup() {
			this.pluginName = 'jet-engine-seo-analysis';
			this.fields = {
				title: [],
				content: window.JetEngineSeoConfig.fields,
			};

			this.maybeRefresh = this.maybeRefresh.bind( this );
			this.refresh = this.debounce( 500, this.maybeRefresh );
		}

		hooks() {}

		events() {
			let self      = this,
				selectors = [];

			$.each( self.fields.content, function( ind, field ) {
				selectors.push( self.getFieldSelector( field ) );
			} );

			$( document ).on( 'input change', selectors.join( ', ' ), self.refresh );

			if ( tinymce ) {
				tinymce.on( 'AddEditor', function ( event ) {

					let $editor = $( '#' + event.editor.id );

					if ( ! $editor.hasClass( 'cx-ui-wysiwyg' ) ) {
						return;
					}

					$.each( selectors, function( ind, selector ) {
						if ( $editor.closest( selector ) ) {
							event.editor.on( 'keyup change', self.refresh );
						}
					} );
				} );
			}
		}

		maybeRefresh() {}

		getTitle() {}

		getContent( content ) {
			let self = this;

			$.each( this.fields.content, function( ind, field ) {
				const $field = $( self.getFieldSelector( field ) );

				$field.each( function() {
					let $this = $( this );
					content += $this.hasClass( 'wp-editor-area' ) ? self.getWysiwygContent( $this ) : '\n' + $this.val();
				} );

			});

			return content;
		}

		getWysiwygContent ( $field ) {
			const editorID = $field.attr( 'id' );
			let value = $field.val();

			if ( this.isTinyMCEAvailable( editorID ) ) {
				value = ( tinyMCE.get( editorID ) && tinyMCE.get( editorID ).getContent() ) || ''
			}

			return value;
		}

		isTinyMCEAvailable( editorID ) {

			if ( 'undefined' !== typeof tinyMCE && 'undefined' !== typeof tinyMCE.editors &&
				0 !== tinyMCE.editors.length && null !== tinyMCE.get( editorID ) &&
				! tinyMCE.get( editorID ).isHidden()
			) {
				return true
			}

			return false;
		}

		getFieldSelector( field ) {

			if ( -1 !== field.indexOf( '[' ) && -1 !== field.indexOf( ']' ) ) {
				let parts = field.match(/(.+)(\[(?:.)+\])/);

				if ( parts[1] && parts[2] ) {
					return '.cx-control [name^="' + parts[1] + '"][name$="' + parts[2] + '"]';
				}
			}

			return  '.cx-control [name="' + field + '"]';
		}

		debounce( threshold, callback ) {
			let timeout;

			return function debounced( $event ) {
				function delayed() {
					callback.call( this, $event );
					timeout = null;
				}

				if ( timeout ) {
					clearTimeout( timeout );
				}

				timeout = setTimeout( delayed, threshold );
			};
		}
	}

	/**
	 * Rank Math Analysis class.
	 */
	class JetEngineRankMathAnalysis extends JetEngineSeoAnalysisBase {
		hooks() {
			//wp.hooks.addFilter( 'rank_math_title',   this.pluginName, this.getTitle.bind( this ) );
			wp.hooks.addFilter( 'rank_math_content', this.pluginName, this.getContent.bind( this ) );
		}

		maybeRefresh() {
			rankMathEditor.refresh( 'content' )
		}
	}

	/**
	 * Yoast Analysis class.
	 */
	class JetEngineYoastAnalysis extends JetEngineSeoAnalysisBase {

		isActivate() {
			// Ensure YoastSEO.js is present and can access the necessary features.
			if ( 'undefined' === typeof YoastSEO || 'undefined' === typeof YoastSEO.analysis
				|| 'undefined' === typeof YoastSEO.analysis.worker
			) {
				return false;
			}

			return true;
		}

		hooks() {
			YoastSEO.app.registerPlugin( this.pluginName, { status: 'ready' } );
			YoastSEO.app.registerModification( 'content', this.getContent.bind( this ),  this.pluginName, 10 );
		}

		maybeRefresh() {
			YoastSEO.app.refresh();
		}
	}

	// Run on document ready.
	$( function () {

		if ( window.JetEngineSeoConfig.isRankMathActived && 'undefined' !== typeof rankMathEditor ) {
			new JetEngineRankMathAnalysis();
		}

		if ( window.JetEngineSeoConfig.isYoastActived && 'undefined' !== typeof YoastSEO && typeof 'undefined' !== YoastSEO.app ) {
			new JetEngineYoastAnalysis();
		}
	} );

})( jQuery );
