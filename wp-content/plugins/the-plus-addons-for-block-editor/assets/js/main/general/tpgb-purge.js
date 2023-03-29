(function ($) {
	"use strict";
	// Clear cache files
	$(document).ready(function(){
		
		if($("#wpadminbar .tpda-purge-clear").length > 0){
			var ids="tpda-purge-clear";
			var smart_action = "tpda_purge_current_clear";
			
			$('.'+ ids + ' .ab-submenu a').on("click", function(e) {
				e.preventDefault();				
					var $this = $(this);
					var href= $this.attr('href');
					href = href.replace('#tpda-clear-','');
					if(href=='gutenberg-all'){
						var confirmation = confirm("Are you sure want to remove all cache files?");
					}else{
						var confirmation = true;
					}
					if(href && confirmation){
						$.ajax({
							url: tpgb_config.ajax_url,
							type: "post",
							data: {
								action: smart_action,
								security: tpgb_config.tpgb_nonce,
								plus_name : href
							},
							success: function(response) {
								if(response){
									setTimeout(function() {
										location.reload(true);
									}, 50);
								}
							},
						});
					}
			});
		}
	});
	
})(window.jQuery);
