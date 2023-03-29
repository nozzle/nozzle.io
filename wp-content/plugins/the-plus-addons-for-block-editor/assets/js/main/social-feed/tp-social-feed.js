
(function($) {
    "use strict";    
        $('.tpgb-social-feed').each( function() {
            let e = $(this),
                BoxID = e.data("id"),
                Setting = e.data("fancy-option"),
                Get_SN = e.data("scroll-normal");

            $('[data-fancybox="'+BoxID+'"]', this).fancybox({
                buttons : Setting.button,
                image: { 
					preload: 0 
				},
                loop: Setting.loop,
				infobar: Setting.infobar,
				animationEffect: Setting.animationEffect,
				animationDuration: Setting.animationDuration,
				transitionEffect: Setting.transitionEffect,
				transitionDuration: Setting.transitionDuration,
				arrows: Setting.arrows,
				clickContent: Setting.clickContent,
				clickSlide: Setting.slideclick,
				dblclickContent: false,
				dblclickSlide: false,
				smallBtn: false,
				iframe : {
					preload : 0
				},
				youtube : {
					autoplay : 0
				},
				vimeo : {
					autoplay : 0
				},
				mp4 : {
					autoplay : 0
				},                    
				video: {
					autoStart: 0
				},
            });

            $('.grid-item.feed-Facebook', this).each( function() {
                var itemindex = $(this).data("index");

                $('[data-fancybox="album-'+itemindex+'-'+BoxID+'"]',this).fancybox({
                    buttons : Setting.button,
                    image: { preload: true },
                    loop: Setting.loop,
                    infobar: Setting.infobar,
                    animationEffect:  Setting.animationEffect,
                    animationDuration: Setting.animationDuration,
                    transitionEffect: Setting.transitionEffect,
                    transitionDuration: Setting.transitionDuration,
                    arrows: Setting.arrows,
                    clickContent: Setting.clickContent,
                    clickSlide: Setting.slideclick,
                    dblclickContent: false,
                    dblclickSlide: false,
                });
            });

            if(Get_SN.ScrollOn == true && Get_SN.TextLimit == false){
                let SF_Text = e.find('.tpgb-sf-Description .tpgb-message');
                    SF_Text.each( function() {
                        if($(this)[0].clientHeight >= Get_SN.Height){
                            $(this).addClass(Get_SN.className);
                            $(this).css('height', Get_SN.Height);
                        }
                    });
            }

            if(Get_SN.FancyScroll == true && Get_SN.TextLimit == false){
                let SF_FyText = e.find('.fancybox-si .tpgb-message');
                    $(SF_FyText).addClass(Get_SN.Fancyclass);
                    $(SF_FyText).css('height', Get_SN.FancyHeight);
            }

        });        

        $(document).on( 'click' , ".tpgb-social-feed .readbtn", function() {
            let div = $(this).closest('.tpgb-message'),
                container = div.closest('.tpgb-isotope .post-loop-inner'),
                Scroll = div.closest('.tpgb-social-feed').data("scroll-normal"),
                S = div.find('.showtext');

            if(div.hasClass('show-text')){
                div.removeClass('show-text show-less');
                    $(this).html('Show More');
                div.find('.sf-dots').css('display' , 'inline');

                if(Scroll.ScrollOn == true && Scroll.TextLimit == true){
                    S.removeClass(Scroll.className);
                    S.removeAttr('style');
                }
            }else{
                div.addClass('show-text show-less');
                    $(this).html('Show Less');
                div.find('.sf-dots').css('display' , 'none');

                let SF_Text = $('.tpgb-social-feed').find(S);
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

        $(document).on( 'click' , ".fancybox-si .readbtn", function() {
            let div = $(this).closest('.fancybox-si .tpgb-message'),
                Scroll = $('.tpgb-social-feed').data("scroll-normal"),
                FcyMsg = $(this).closest('.fancybox-si .tpgb-message');

            if(div.hasClass('show-text')){
                div.removeClass('show-text show-less');
                $(this).html('Show More')
                div.find('.sf-dots').css('display' , 'inline');

                if(Scroll.FancyScroll == true && Scroll.TextLimit == true){
                    FcyMsg.removeClass(Scroll.Fancyclass);
                    FcyMsg.removeAttr('style');
                }
            }else{
                div.addClass('show-text show-less');
                $(this).html('Show Less')
                div.find('.sf-dots').css('display' , 'none');

                if(Scroll.FancyScroll == true && Scroll.TextLimit == true){
                    FcyMsg.each( function() {
                        let $this = $(this);
                        if($this[0].clientHeight >= Scroll.FancyHeight){
                            $this.addClass(Scroll.Fancyclass);
                            $this.css('height', Scroll.FancyHeight);
                        }
                    });
                }
            }
        });

})(jQuery);