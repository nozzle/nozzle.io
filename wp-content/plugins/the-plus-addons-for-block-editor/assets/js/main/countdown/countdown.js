( function( $ ) {
	"use strict";
    $('.tp-countdown').each(function() {
    
        var $this = $(this),
        style = $this.data('style'),
        blockId = $this.data("id");
        
        if(style && style == 'style-1') {
            WidgetCountDownHandler(blockId);
        }
	});
	
	/*Style 1*/
	function WidgetCountDownHandler(blockId) {
		var selector = $('.'+blockId+'.tp-countdown');
		if(selector.length > 0 ) {
			theplus_countdown();
			selector.change(function() {
				theplus_countdown();
			});
			
			function theplus_countdown() {
				selector.each(function () {
					var attrthis = $(this),
					timer1 = attrthis.find('.tpgb-countdown-counter').data("time"),
					offset_timer = attrthis.data("offset"),
					text_days = attrthis.data("day"),
					text_hours = attrthis.data("hour"),
					text_minutes = attrthis.data("min"),
					text_seconds = attrthis.data("sec");
					if(timer1 && timer1 != '') {
						attrthis.downCount({
							date: timer1,
							offset: offset_timer,
							text_day:text_days,
							text_hour:text_hours,
							text_minute:text_minutes,
							text_second:text_seconds,
						}, function () {
							countdownExpiry(blockId);
						});
					}
				});
			}
		}
	};
	/*Style 1*/
    
    /*counter Expired*/
	function countdownExpiry(blockId) {

		var blockData = $('.'+blockId),
		expiry = blockData.data('expiry');
		
		if(expiry && (expiry == 'showmsg')) {
			window.location.reload();
		}
		
		if(expiry && expiry == 'redirect') {
			var url = blockData.data('redirect');
			var decodedUrl = decodeURIComponent(url);
			window.location.href = decodedUrl;
		}

	}
	/*counter Expired*/
	
})(jQuery);