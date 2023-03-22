(function($) {
	"use strict";
	var doc = document;
	const elements = doc.querySelectorAll('.tpgb-code-highlighter');

	elements.forEach( el => {
		var data = JSON.parse(el.getAttribute('data-code-atr'));
		if(data.copyicon!='' || data.copiedicon!=''){
			setTimeout(function(){
				var copyhtml = '', copiedhtml = '';
				if(data.copyicon!=''){
					copyhtml = '<span class="code-copy-icon"><i class="'+data.copyicon+'"></i></span>';
				}
				if(data.copiedicon!=''){
					copiedhtml = '<span class="code-copied-icon"><i class="'+data.copiedicon+'"></i></span>';
				}
				el.querySelector('.copy-to-clipboard-button').innerHTML = '<span>'+data.copytext+'</span>'+copyhtml;
				el.querySelector('.copy-to-clipboard-button').addEventListener('click', () => {
					 el.querySelector('.copy-to-clipboard-button').innerHTML = '<span>'+data.copiedText+'</span>'+copiedhtml;
					 
					 setTimeout(function(){ 
						el.querySelector('.copy-to-clipboard-button').innerHTML = '<span>'+data.copytext+'</span>'+copyhtml;
					}, 1500);
				}); 
			} ,50);
		}
		if(data.downloadicon!=''){	
			setTimeout(function(){
				el.querySelector('.toolbar-item a').innerHTML = data.downloadtext+'<span class="code-download-icon"><i class="'+data.downloadicon+'"></i></span>';
			} ,50);
		}
		
	});
})(jQuery);