(function($) {
	"use strict";
	var doc = document;
	const elements = doc.querySelectorAll('.tpgb-gravity-form');

	elements.forEach( el => {
	   var innerCheck = el.querySelectorAll('.gform_wrapper .ginput_container_checkbox ul li label');
	   innerCheck.forEach(innerC => {
			const e = doc.createElement('span');
			e.className = 'tpgb-gravity-check';
			e.innerHTML ="<i class='fa fa-check'></i>";
			innerC.insertBefore(e, innerC.childNodes[0]);
	   });
	   var innerRadio = el.querySelectorAll('.gform_wrapper .ginput_container_radio ul li label');
	   innerRadio.forEach(innerR => {
			const e = doc.createElement('span');
			e.className = 'tpgb-gravity-radio';
			e.innerHTML ="<i class='fa fa-check'></i>";
			innerR.insertBefore(e, innerR.childNodes[0]);
	   });
	});
})(jQuery);