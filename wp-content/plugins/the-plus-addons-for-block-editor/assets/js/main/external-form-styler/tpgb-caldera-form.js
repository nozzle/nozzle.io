(function($) {
	"use strict";
		$('.tpgb-external-form-styler .tpgb-caldera-form').each(function(){
			(0 < $(".caldera-grid .checkbox label").length || 0 < $(".caldera-grid .radio label").length) &&
			$(".caldera-grid .checkbox label, .caldera-grid .radio label").each(function () {
				var b = $(this),
					c = $(this).find('input[type="checkbox"]').attr("id"),
					d = $(this).find('input[type="radio"]').attr("id");
					c != null && $(this).append('<span class="caldera_checkbox_label" for="' + c + '"><i class="fa fa-check" aria-hidden="true"></i></span>'), d != null && $(this).append('<span class="caldera_radio_label" for="' + d + '"><i class="fa fa-check" aria-hidden="true"></i></span>');
			});
		});
})(jQuery);