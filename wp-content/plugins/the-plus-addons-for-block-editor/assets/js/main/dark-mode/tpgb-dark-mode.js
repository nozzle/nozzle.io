(function() {
    "use strict";
//document.addEventListener("DOMContentLoaded", function() {
	document.querySelectorAll('.tpgb-dark-mode').forEach(function(el){
		if(el.classList.contains('dark-pos-fixed')){
			document.body.insertAdjacentHTML('afterbegin', el.outerHTML);
		}
	})
	var dm = document.querySelectorAll('.tpgb-dark-mode');
	dm.forEach(function(el){
		if((el.dataset.saveCookies && window.localStorage.getItem('tpgb_darkmode') === 'true') || (window.localStorage.getItem('tpgb_darkmode') === null && el.dataset.matchOs && window.matchMedia('(prefers-color-scheme: dark)').matches)){
			el.classList.add("darkmode-activated");
			document.body.classList.add("tpgb-dark-active");
		}
		var toggle = el.getElementsByClassName("tpgb-darkmode-toggle");
		toggle[0].addEventListener("click", function() {
			dMToggleClass(el)
		});
	});
	
	function dMToggleClass(el){
		var body = document.body;
		if(el.classList.contains("darkmode-activated")){
			el.classList.remove("darkmode-activated");	
		}else{
			el.classList.add("darkmode-activated");
		}
		if(body.classList.contains("tpgb-dark-active")){
			body.classList.remove("tpgb-dark-active");
			if(el.dataset.saveCookies){
				window.localStorage.setItem('tpgb_darkmode', false);
			}
		}else{
			body.classList.add("tpgb-dark-active");
			if(el.dataset.saveCookies){
				window.localStorage.setItem('tpgb_darkmode', true);
			}
		}
	}
})();