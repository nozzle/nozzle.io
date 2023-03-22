(function() {
	'use strict';

	window.JetEngineTools = {
		maybeCyrToLatin: function( str ) {
			var checkCyrRegex = /[а-яёїєґі]/i,
				cyrRegex      = /[а-яёїєґі]/gi,
				charsMap      = {
					'а': 'a', 'б': 'b', 'в': 'v', 'г': 'g', 'д': 'd',
					'е': 'e', 'ё': 'io', 'ж': 'zh', 'з': 'z', 'и': 'i',
					'й': 'i', 'к': 'k', 'л': 'l', 'м': 'm', 'н': 'n',
					'о': 'o', 'п': 'p', 'р': 'r', 'с': 's', 'т': 't',
					'у': 'u', 'ф': 'f', 'х': 'kh', 'ц': 'ts', 'ч': 'ch',
					'ш': 'sh', 'щ': 'shch', 'ы': 'y', 'э': 'e', 'ю': 'iu',
					'я': 'ia', 'ї': 'i', 'є': 'ie', 'ґ': 'g', 'і': 'i'
				};

			if ( checkCyrRegex.test( str ) ) {
				str = str.replace( cyrRegex, function( match ) {

					if ( undefined === charsMap[match] ) {
						return '';
					}

					return charsMap[match];
				} );
			}

			return str;
		},
		buildQuery: function( params ) {
			return Object.keys( params ).map(function( key ) {
				return key + '=' + params[ key ];
			}).join( '&' );
		},
	};

})();
