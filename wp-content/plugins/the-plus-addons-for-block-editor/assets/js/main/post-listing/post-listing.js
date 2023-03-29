(function($) {
    "use strict";
		/*Dynamic Listing Block Js*/
        var dynamic_hover_content = $(".tpgb-post-listing.dynamic-style-1");
		
        if(dynamic_hover_content.length) {
			$(dynamic_hover_content).find(".dynamic-list-content").on("mouseenter", function() {
				$(this).find(".tpgb-post-hover-content").slideDown(300)
			}),
			$(dynamic_hover_content).find(".dynamic-list-content").on("mouseleave", function() {
				$(this).find(".tpgb-post-hover-content").slideUp(300)
			})
		}
})(jQuery);