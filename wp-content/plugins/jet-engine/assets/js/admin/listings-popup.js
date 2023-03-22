(function( $ ) {

	'use strict';

	var JetListings = {

		editorControl: null,
		editButton: null,
		editXHR: null,

		onEditorCreateClick: function( control ) {
			this.openPopup();
			this.editorControl = control;
		},

		init: function() {

			var self      = this,
				$document = $( document );

			$document
				.on( 'click.JetListings', '.page-title-action', self.openPopup )
				.on( 'click.JetListings', '.jet-engine-listing-edit-settings', self.loadEditPopup )
				.on( 'click.JetListings', '.jet-engine-listing-save', self.saveListingSettings )
				.on( 'click.JetListings', '.jet-engine-listing-cancel', self.closePopup )
				.on( 'click.JetListings', '.jet-listings-popup__overlay, .jet-listings-popup__close', self.closePopup );

			if ( window.JetListingsSettings.isAjax ) {
				$document.on( 'submit.JetListings', '#templates_type_form', self.ajaxSubmit );
			}

			$( 'body' ).on( 'change', '#listing_source', self.switchListingSources );

			self.applyCustomOptions();

			if ( '#add_new' === window.location.hash ) {
				self.openPopup();
			}

		},

		applyCustomOptions: function() {
			
			var $popup = $( '.jet-listings-popup' );

			if ( window.JetListingsSettings.exclude ) {
				for ( var i = 0; i < window.JetListingsSettings.exclude.length; i++ ) {
					$popup.find( '*[name="' + window.JetListingsSettings.exclude[ i ] + '"]' ).closest( '.jet-listings-popup__form-row' ).hide();
				}
			}

			if ( window.JetListingsSettings.button && window.JetListingsSettings.button.css_class ) {
				$popup.find( '#templates_type_submit' ).addClass( window.JetListingsSettings.button.css_class );
			}

		},

		ajaxSubmit: function( event ) {
			
			event.preventDefault();

			var self = JetListings;

			let formEl = document.getElementById( 'templates_type_form' );
			let formData = new FormData( formEl );

			const values = {};

			for( var data of formData.entries() ) {
				values[ data[0] ] = data[1];
			}

			values['_is_ajax_form'] = true;

			$.ajax( {
				url: formEl.action,
				type: 'POST',
				dataType: 'json',
				data: values,
			} ).done( function( response ) {

				if ( response.success && self.editorControl ) {
					
					let options = self.editorControl.model.get( 'options' );
					let listingID = response.data.id;
					
					options[ listingID ] = response.data.title;
					self.editorControl.model.set( 'options', options );
					self.editorControl.setValue( listingID );
					self.editorControl.render();
					self.closePopup();

					let previewWindow = window.elementor.$preview[0].contentWindow;
										
					previewWindow.elementorCommon.api.internal( 'panel/state-loading' );
					previewWindow.elementorCommon.api.run( 'editor/documents/switch', {
						id: listingID
					} ).then( function() {
						return previewWindow.elementorCommon.api.internal( 'panel/state-ready' );
					} );

				}
				

			} );

		},

		switchListingSources: function( event ) {

			var $this = $( this );
			JetListings.switchFieldsVisibility( $this );

		},

		switchFieldsVisibility: function( $source ) {
			
			let val  = $source.find( 'option:selected' ).val();
			let $row = $source.closest( '.jet-listings-popup__form-row' );

			$row.siblings( '.jet-template-listing' ).removeClass( 'jet-template-act' );
			$row.siblings( '.jet-template-' + val ).addClass( 'jet-template-act' );
		},

		saveListingSettings: function() {

			let $this    = $( this );
			let formEl   = $this.closest( 'form' )[0];
			let formData = new FormData( formEl );

			const values = {};

			for( var data of formData.entries() ) {
				values[ data[0] ] = data[1];
			}

			values._listing_id  = $this.data( 'listing-id' );
			values._open_editor = $this.hasClass( 'open-editor' );
			values.action       = 'jet_engine_save_listing_settings';
			values._nonce       = window.JetListingsSettings._nonce;

			$this.attr( 'disabled', 'disabled' );
			$this.siblings().attr( 'disabled', 'disabled' );

			$.ajax( {
				url: ajaxurl,
				type: 'POST',
				dataType: 'json',
				data: values
			} ).done( function( response ) {

				if ( response.success && response.data.redirect ) {
					window.location = response.data.redirect;
				} else {
					window.location.reload();
				}

			} ).fail( function() {
				$this.attr( 'disabled', false );
				$this.siblings().attr( 'disabled', false );
			} );

		},

		loadEditPopup: function( event ) {

			if ( JetListings.editButton ) {
				JetListings.editButton.removeClass( 'jet-engine-listing-edit-settings--is-loading' );
			}

			if ( JetListings.editXHR ) {
				JetListings.editXHR.abort();
			}

			JetListings.editButton = $( this );

			JetListings.editButton.addClass( 'jet-engine-listing-edit-settings--is-loading' );

			JetListings.editXHR = $.ajax( {
				url: ajaxurl,
				type: 'POST',
				dataType: 'json',
				data: {
					action: 'jet_engine_get_edit_listing_popup',
					listing_id: JetListings.editButton.data( 'listing-id' ),
					_nonce: window.JetListingsSettings._nonce,
				}
			} ).done( function( response ) {

				if ( response.success ) {
					let $popup = $( response.data );
					$popup.addClass( 'jet-listings-popup-active' );
					JetListings.switchFieldsVisibility( $popup.find( '#listing_source' ) );
					$( 'body' ).append( $popup );
				}

				JetListings.editButton.removeClass( 'jet-engine-listing-edit-settings--is-loading' );
				JetListings.editXHR = null;
				JetListings.editButton = null;

			} );

		},

		openPopup: function( event ) {

			if ( event ) {
				event.preventDefault();
			}

			$( '.jet-listings-popup.jet-listings-popup--new' ).addClass( 'jet-listings-popup-active' );

		},

		closePopup: function() {

			let $this = $( this );
			let $popup = $this.closest( '.jet-listings-popup' )

			if ( $popup.hasClass( 'jet-listings-popup--new' ) ) {
				$popup.removeClass( 'jet-listings-popup-active' );
				window.history.pushState( "", document.title, window.location.pathname + window.location.search );
			} else {
				$popup.remove();
			}
			
		}

	};

	JetListings.init();

	window.JetListings = JetListings;

})( jQuery );
