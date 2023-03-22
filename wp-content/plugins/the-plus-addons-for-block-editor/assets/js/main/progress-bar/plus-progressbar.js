( function( $ ) {
	"use strict";
	$(document).ready(function(){
		var progressbar = $('.tpgb-progress-bar');
		if( progressbar.length > 0 ){
			progressbar.each(function(){
				var b=$(this);
				if(!b.hasClass('tpgb-piechart')){
					var e= $(this).find(".progress-bar-skill-bar-filled"),
						width = e.data("width");
						
					b.waypoint(function(direction) {
						if (direction === 'down') {
							if(!b.hasClass("done-progress")){
								e.css("width", width);
								if(b.find(".progress-bar-media.large")){
									b.find(".progress-bar-media.large").css("width", width);
									
								}
								b.addClass("done-progress");
							}
						}
					}, { offset: '90%' });
				}
			});
		}
	});
})(jQuery);