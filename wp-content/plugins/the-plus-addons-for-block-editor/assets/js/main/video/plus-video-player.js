!function(e,t){"function"==typeof define&&define.amd?define(t):"object"==typeof exports?module.exports=t:e.fluidvids=t()}(this,function(){"use strict";function e(e){return new RegExp("^(https?:)?//(?:"+d.players.join("|")+").*$","i").test(e)}function t(e,t){return parseInt(e,10)/parseInt(t,10)*100+"%"}function i(i){if((e(i.src)||e(i.data))&&!i.getAttribute("data-fluidvids")){var n=document.createElement("div");i.parentNode.insertBefore(n,i),i.className+=(i.className?" ":"")+"fluidvids-item",i.setAttribute("data-fluidvids","loaded"),n.className+="fluidvids",n.style.paddingTop=t(i.height,i.width),n.appendChild(i)}}function n(){var e=document.createElement("div");e.innerHTML="<p>x</p>"}var d={selector:["iframe","object"],players:["www.youtube.com","player.vimeo.com"]},r=document.head||document.getElementsByTagName("head")[0];return d.render=function(){for(var e=document.querySelectorAll(d.selector.join()),t=e.length;t--;)i(e[t])},d.init=function(e){for(var t in e)d[t]=e[t];d.render(),n()},d});

function initFluidVids(){
	"use strict";
	fluidvids.init({ selector: ['iframe:not(.pt-plus-bg-video):not(.tpgb-social-vimeo):not(.wp-block-embed-youtube iframe):not(.wp-block-embed-vimeo iframe)'],players: ['www.youtube.com', 'player.vimeo.com']});	
}
( function( $ ) {
	'use strict';
	if($('iframe').length){
		$(document).ready(function(){
			initFluidVids();
		});
		$('body').on('post-load', initFluidVids);
	}
})(jQuery);

! function($) {
    "use strict";
    function t(ele) {
        var a = ele.find("video"),
		n = ele.find(".ts-video-lazyload");
        if (ele.is("[data-grow]") && ele.css("max-width", "none"), ele.find(".tpgb-video-title, .tpgb-video-play-btn, .tpgb-video-thumb").addClass("ts-video-hidden"), n.length) {
            var i = n.data();
            $("<iframe></iframe>").attr(i).insertAfter(n)
		}
        a.length && a.get(0).play()
	}
	
    function a() {
        $(".ts-video-wrapper[data-inview-lazyload]").one("inview", function(a, n) {
            n && t($(this))
		})
	}
    $(document).on("click", '[data-mode="lazyload"] .tpgb-video-play-btn', function(a) {
		a.preventDefault(),
		t($(this).closest(".ts-video-wrapper"))
	}), a(), $(document).ajaxComplete(function() {
        a()
	})
}(jQuery);