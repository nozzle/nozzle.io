(function( $ ) {

	'use strict';

	var JetSearchEditor = {

		init: function() {

			var QueryControlItemView = elementor.modules.controls.Select2.extend({

				hasTitles: false,

				getSelect2DefaultOptions: function getSelect2DefaultOptions() {
					var self = this;

					return jQuery.extend( elementor.modules.controls.Select2.prototype.getSelect2DefaultOptions.apply( this, arguments ), {
						ajax: {
							url: ajaxurl,
							cache: true,
							dataType: 'json',
							data: function( params ) {
								return {
									q:          params.term,
									action:     self.model.get( 'action' ),
									query_type: self.model.get( 'query_type' ),
									post_type:  self.elementSettingsModel.attributes['search_source']
								};
							},
							processResults: function( response ) {
								return {
									results: response.data.results
								};
							}
						},
						minimumInputLength: 1
					});
				},

				getOptionsTitles: function getOptionsTitles() {
					var self  = this,
						query_ids = this.getControlValue();

					if ( !query_ids ) {
						return;
					}

					if ( !_.isArray( query_ids ) ) {
						query_ids = [query_ids];
					}

					if ( ! query_ids[0] ) {
						return;
					}

					jQuery.ajax( {
						url: ajaxurl,
						dataType: 'json',
						data: {
							action:     self.model.get( 'action' ),
							query_type: self.model.get( 'query_type' ),
							ids:  query_ids
						},
						beforeSend: function() {
							self.ui.select.prop( 'disabled', true );
						},
						success: function( response ) {
							self.hasTitles = true;

							self.model.set( 'options', self.prepareOptions( response.data.results ) );
							self.render();
						}
					} );
				},

				prepareOptions: function prepareOptions( options ) {
					var result = {};

					jQuery.each( options, function( index, item ) {
						result[ item.id ] = item.text;
					} );

					return result;
				},

				onReady: function onReady() {

					this.ui.select.select2( this.getSelect2Options() );

					if ( !this.hasTitles ) {
						this.getOptionsTitles();
					}
				}
			});

			elementor.addControlView( 'jet-search-query', QueryControlItemView );
		}

	};

	$( window ).on( 'elementor:init', JetSearchEditor.init );

}( jQuery ));
