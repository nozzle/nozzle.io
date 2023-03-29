/*contact form 7*/ 
(function($) {
	"use strict";
		$('.tpgb-external-form-styler .tpgb-contact-form-7').each(function(){
			
			var radio_checkbox='tpgb-cf7-checkbox';
			var i=0;
			if(!$(this).hasClass("tp-form-loaded")){
				
				$(".wpcf7-form-control.wpcf7-radio .wpcf7-list-item",this).each(function(){
					var text_val=$(this).find('.wpcf7-list-item-label').text();
					$(this).find('.wpcf7-list-item-label').remove();
					var label_Tags=$('input[type="radio"]',this);
					if ( label_Tags.parent().is( 'label' )) {
						label_Tags.unwrap();
					}
					var radio_name=$(this).find('input[type="radio"]').attr('name');
					$(this).append('<label class="input__radio_btn" for="'+radio_name+i+'">'+text_val+'<div class="toggle-button__icon"><span class="tpgb-radiocf7-icon"><i class="fa fa-check" aria-hidden="true"></i></span></div></label>');
					$(this).find('input[type="radio"]').attr('id',radio_name+i);
					
					$(this).find('input[type="radio"]').addClass("input-radio-check");
					$(this).parents(".wpcf7-form-control-wrap").addClass(radio_checkbox);
					i++;
				});
				var i=0;
				$(".wpcf7-form-control.wpcf7-checkbox .wpcf7-list-item",this).each(function(){
					var text_val=$(this).find('.wpcf7-list-item-label').text();
					$(this).find('.wpcf7-list-item-label').remove();
					var label_Tags=$('input[type="checkbox"]',this);
					if ( label_Tags.parent().is( 'label' )) {
						label_Tags.unwrap();
					}
					$(this).append('<label class="input__checkbox_btn" for="'+radio_checkbox+i+'">'+text_val+'<div class="toggle-button__icon"><span class="tpgb-checkcf7-icon"><i class="fa fa-check" aria-hidden="true"></i></span></div></label>');
					$(this).find('input[type="checkbox"]').attr('id',radio_checkbox+i);
					
					$(this).find('input[type="checkbox"]').addClass("input-checkbox-check");
					$(this).parents(".wpcf7-form-control-wrap").addClass(radio_checkbox);
					i++;
				});

				$(".wpcf7-form-control.wpcf7-acceptance .wpcf7-list-item",this).each(function(){
					var text_val=$(this).find('.wpcf7-list-item-label').text();
					$(this).find('.wpcf7-list-item-label').remove();
					var label_Tags=$('input[type="checkbox"]',this);
					if ( label_Tags.parent().is( 'label' )) {
						label_Tags.unwrap();
					}
					$(this).append('<label class="input__checkbox_btn" for="'+radio_checkbox+i+'"><div class="toggle-button__icon"><span class="tpgb-checkcf7-icon"><i class="fa fa-check" aria-hidden="true"></i></span></div>'+text_val+'</label>');
					$(this).find('input[type="checkbox"]').attr('id',radio_checkbox+i);
					
					$(this).find('input[type="checkbox"]').addClass("input-checkbox-check");
					$(this).parents(".wpcf7-form-control-wrap").addClass(radio_checkbox);
					i++;
				});

				$(".wpcf7-form-control-wrap input[type='file']",this).each(function(){
					var file_name=$(this).attr('name');
					$(this).attr('id',file_name+i);
					$(this).attr('data-multiple-caption',"{count} files selected");
					$(this).parents(".wpcf7-form-control-wrap").append('<label class="input__file_btn" for="'+file_name+i+'"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17"><path d="M10 0l-5.2 4.9h3.3v5.1h3.8v-5.1h3.3l-5.2-4.9zm9.3 11.5l-3.2-2.1h-2l3.4 2.6h-3.5c-.1 0-.2.1-.2.1l-.8 2.3h-6l-.8-2.2c-.1-.1-.1-.2-.2-.2h-3.6l3.4-2.6h-2l-3.2 2.1c-.4.3-.7 1-.6 1.5l.6 3.1c.1.5.7.9 1.2.9h16.3c.6 0 1.1-.4 1.3-.9l.6-3.1c.1-.5-.2-1.2-.7-1.5z"></path></svg><span>Choose a file…</span></label>');
					$(this).parents(".wpcf7-form-control-wrap").addClass("cf7-style-file");
					i++;
				});
					$(this).addClass("tp-form-loaded");
			}
		});
})(jQuery);