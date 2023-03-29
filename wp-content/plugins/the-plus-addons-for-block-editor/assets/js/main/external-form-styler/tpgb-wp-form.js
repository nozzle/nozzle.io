/*Everest Form*/ 
(function($) {
	"use strict";
	var doc = document;
	const elements = doc.querySelectorAll('.tpgb-wp-form');

	elements.forEach( el => {
	   var innerCheck = el.querySelectorAll('.wpforms-field.wpforms-field-checkbox .wpforms-field-label-inline');
	   innerCheck.forEach(innerC => {
			const e = doc.createElement('span');
			e.className = 'tpgb-wp-check';
			e.innerHTML ="<i class='fa fa-check'></i>";
			innerC.insertBefore(e, innerC.childNodes[0]);
	   });
	   
	   var innerRadio = el.querySelectorAll('.wpforms-field.wpforms-field-radio .wpforms-field-label-inline');
	   innerRadio.forEach(innerR => {
			const e = doc.createElement('span');
			e.className = 'tpgb-wp-radio';
			e.innerHTML ="<i class='fa fa-check'></i>";
			innerR.insertBefore(e, innerR.childNodes[0]);
	   });
	});
})(jQuery);