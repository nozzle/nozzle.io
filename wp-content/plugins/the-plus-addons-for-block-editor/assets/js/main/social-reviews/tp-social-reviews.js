(function($) {
    "use strict";
    $('.tpgb-social-reviews').each( function() {
        var e = $(this);
        var i = 0,
		BoxID = e.data("id"),
		scroll_nrml = e.data("scroll-normal"),
		Get_TL = e.data("textlimit");
		
		if(scroll_nrml.ScrollOn == true && scroll_nrml.TextLimit == false){
			let SF_Text = e.find('.showtext');
			SF_Text.each( function() {
				if($(this)[0].clientHeight >= scroll_nrml.Height){
					$(this).addClass(scroll_nrml.className);
					$(this).css('height', scroll_nrml.Height);
				}
			});
		}
		
		$(document).on( 'click', ".tpgb-block-"+BoxID+".tpgb-social-reviews .readbtn", function() {
			var div = $(this).closest('.tpgb-message'),
				container = div.closest('.tpgb-isotope .post-loop-inner'),
				Scroll = div.closest('.tpgb-social-reviews').data("scroll-normal"),
				S = div.find('.showtext');   

				if(div.hasClass('show-text')){
					div.removeClass('show-text show-less');
					$(this).html(Get_TL.showmoretxt)
					div.find('.sf-dots').css('display','inline');

					if(Scroll.ScrollOn == true && Scroll.TextLimit == true){
						S.removeClass(Scroll.className);
						S.removeAttr('style');
					}
				}else{
					div.addClass('show-text show-less');
					$(this).html(Get_TL.showlesstxt)
					div.find('.sf-dots').css('display','none');

					let SF_Text = $('.tpgb-social-reviews').find(S);
					if(Scroll.ScrollOn == true && Scroll.TextLimit == true){
						SF_Text.each( function() {
							if($(this)[0].clientHeight >= Scroll.Height){
								S.addClass(Scroll.className);
								S.css('height', Scroll.Height);
							}
						});
					}
				}
				container.isotope({
					itemSelector: ".grid-item",
					resizable: !0,
					sortBy: "original-order"
				});
		});
    });

})(jQuery);