(function($) {
	'use strict';
		let tpImg = document.querySelectorAll('.tpgb-animate-image.tpgb-fancy-add');
		if(tpImg.length > 0) {
                tpImg.forEach(function(obj){
                var wrap = obj,
                 BoxID = wrap.dataset.id,
                 Setting = JSON.parse(wrap.dataset.fancyOption);
				$('[data-fancybox="fancyImg-'+BoxID+'"]').fancybox({
					buttons : Setting && Setting.button ?  Setting.button : '',
					image: {
						preload: true
					},
					loop: true,
					animationEffect:  (Setting.animationEffect=='none' ? false : Setting.animationEffect),
					animationDuration: Setting.animationDuration,

					clickContent:'next',
					clickSlide:'close',
					dblclickContent: false,
					dblclickSlide: false,

				});
			});
		}
} ( jQuery ) );