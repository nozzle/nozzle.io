( function ( $ ) {
	'use strict';
		var Animations = function() {
			$('.tpgb-view-animation').each(function() {
				var $this = $(this), settings = $this.data('animationsetting');
				var innWidth = window.innerWidth;
				var AnimWidth = 0,AnimTWidth = 0;
				if((settings.anime && settings.anime.sm!=undefined && settings.anime.sm!='') || (settings.anime && settings.anime.xs!=undefined && settings.anime.xs!='') || (settings.animeOut && settings.animeOut.sm!=undefined && settings.animeOut.sm!='') || (settings.animeOut && settings.animeOut.xs!=undefined && settings.animeOut.xs!='')){
					AnimWidth = 1024
				}
				if((settings.anime && settings.anime.xs!=undefined && settings.anime.xs!='') || (settings.animeOut && settings.animeOut.xs!=undefined && settings.animeOut.xs!='')){
					AnimTWidth = 768
				}
				if(((settings.anime!=undefined && settings.anime.md!=undefined && settings.anime.md!='none') || (settings.animeOut!=undefined && settings.animeOut.md!=undefined && settings.animeOut.md!='none')) && innWidth>AnimWidth ){
					var mdAnim = (settings.anime!=undefined && settings.anime.md!=undefined && settings.anime.md!='none') ? settings.anime.md : ''
					var mdAnimOut = (settings.animeOut!=undefined && settings.animeOut.md!=undefined && settings.animeOut.md!='none') ? settings.animeOut.md : ''
					AnimDeviceWayPoint($this, mdAnim, mdAnimOut )
				}
				if(((settings.anime!=undefined && settings.anime.sm!=undefined && settings.anime.sm!='none') || (settings.animeOut!=undefined && settings.animeOut.sm!=undefined && settings.animeOut.sm!='none')) && innWidth<1025 && innWidth>=AnimTWidth ){
					var smAnim = (settings.anime!=undefined && settings.anime.sm!=undefined && settings.anime.sm!='none') ? settings.anime.sm : ''
					var smAnimOut = (settings.animeOut!=undefined && settings.animeOut.sm!=undefined && settings.animeOut.sm!='none') ? settings.animeOut.sm : ''
					AnimDeviceWayPoint($this, smAnim, smAnimOut )
				}
				if(((settings.anime!=undefined && settings.anime.xs!=undefined && settings.anime.xs!='none') || (settings.animeOut!=undefined && settings.animeOut.xs!=undefined && settings.animeOut.xs!='none')) && innWidth<768 ){
					var xsAnim = (settings.anime!=undefined && settings.anime.xs!=undefined && settings.anime.xs!='none') ? settings.anime.xs : ''
					var xsAnimOut = (settings.animeOut!=undefined && settings.animeOut.xs!=undefined && settings.animeOut.xs!='none') ? settings.animeOut.xs : ''
					AnimDeviceWayPoint($this, xsAnim, xsAnimOut )
				}
			});
		}
		
		var AnimDeviceWayPoint = function (ele,anim,animeOut){
			ele.waypoint(function(direction) {
				if( direction === 'down' && anim && !ele.hasClass("tpgb_animated")){
					ele.removeClass("tpgb-view-animation-out tpgb_animated_out tpgb_"+animeOut).addClass("tpgb_animated").addClass('tpgb_'+anim)
				}else if(direction === 'up' && animeOut && !ele.hasClass("tpgb_animated_out")){
					ele.removeClass('tpgb_animated tpgb_'+anim).addClass("tpgb-view-animation-out tpgb_animated_out").addClass('tpgb_'+animeOut)
				}else if(direction === 'down' && anim=='' && !ele.hasClass("tpgb_animated")){
					ele.removeClass("tpgb-view-animation-out tpgb_animated_out tpgb_"+animeOut).addClass("tpgb_animated")
				}
			}, { offset: '80%' } );
		}
		
		if($('.tpgb-view-animation').length){
			$(window).on("load", Animations);
			$(document.body).on('post-load', function() {
				Animations()
			});
		}
} ( jQuery ) );