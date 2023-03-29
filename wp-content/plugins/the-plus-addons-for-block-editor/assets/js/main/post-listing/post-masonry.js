/*post Masonry*/( function( $ ) {
	"use strict";
	if( $('.tpgb-isotope').length > 0 ){
		var b = window.theplus || {};
		b.window = $(window),
		b.document = $(document),
		b.windowHeight = b.window.height(),
		b.windowWidth = b.window.width();	
		b.tpgb_isotope_Posts = function() {
			var c = function(c) {
				var rtlVal = true;
				if(document.dir== 'rtl'){
					rtlVal = false;
				}
				$('.tpgb-isotope').each(function() {
					
					var e, c = $(this), d = c.data("layout"),f = {
						itemSelector: ".grid-item",
						resizable: !0,
						sortBy: "original-order",
						originLeft : rtlVal
					};
					var uid=c.data("id");
					var inner_c=$('.tpgb-block-'+uid).find(".post-loop-inner");
					e = "masonry" === d  ? "masonry" : "fitRows",
					f.layoutMode = e,
					function() {
						//b.initMetroIsotope(),
						inner_c.isotope(f)
					}();
				});
			};
			
			if($('.tpgb-isotope .tpgb-filter-data').length>0){
				$('.tpgb-isotope .tpgb-filter-data').each(function() {
					//List Isotope Filter Item					
					$(this).find(".tpgb-category-list").on('click',function(event) {
						event.preventDefault();
						var p_list = $(this).closest(".tpgb-isotope"),
							uid = p_list.data("id");

						var d = $(this).attr("data-filter");
								$(this).parent().parent().find(".active").removeClass("active"),
								$(this).addClass("active"),
								$('#'+uid).find(".post-loop-inner").isotope({
									filter: d
								}),
								$("body").trigger("isotope-sorted");
					});
				});
			}

			b.window.on("load resize", function() {
				c('.tpgb-isotope')
			}),
			window.addEventListener('DOMContentLoaded', (event) => {
				c('.tpgb-isotope')
			})
			$(document).ready(function() {
				c('.tpgb-isotope')
			}),
			$("body").on("post-load resort-isotope", function() {
				setTimeout(function() {
					c('.tpgb-isotope')
				}, 800)
			}),
			$("body").on("tabs-reinited", function() {
				setTimeout(function() {
					c('.tpgb-isotope')
				}, 800)
			});
			
		},
		b.init = function() {
			b.tpgb_isotope_Posts();
		},
		b.init();
	}
})(jQuery);