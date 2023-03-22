( function( $ ) {
	"use strict";
	var postImage = $(".tpgb-post-image.post-img-bg");
	$.fn.tpOuterHTML = function() {
	  return $('<div />').append(this.eq(0).clone()).html();
	};
	if(postImage.length > 0){
		postImage.each(function(){
			var $this = $(this),
				setting = $this.data('setting');
			if( setting.imgType == 'background' && setting.imgLocation == 'section' ){
				$this.closest('.tpgb-section').prepend($this.tpOuterHTML());
				$this.remove();
			}else if( setting.imgType == 'background' && setting.imgLocation == 'column' ){
				$this.closest('.tpgb-column').prepend($this.tpOuterHTML());
				$this.remove();
			}
		});
	}
     //Fancy Box 
     let tpImg = document.querySelectorAll('.tpgb-post-image.tpgb-fancy-add');
		if(tpImg.length > 0) {
            tpImg.forEach(function(obj){
                var wrap = obj,
                 BoxID = wrap.dataset.id, 
                 Setting = JSON.parse(wrap.dataset.fancyOption);
				$('[data-fancybox="postImg-'+BoxID+'"]').fancybox({
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
})(jQuery);