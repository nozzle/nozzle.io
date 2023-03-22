( function( $ ) {
	"use strict";
		$('.tpgb-tabs-wrapper').each(function(){
			var $currentTab = $(this),
			$TabHover = $currentTab.data('tab-hover'),
			$tabheader = $currentTab.find('.tpgb-tab-header');

			if('no' == $TabHover){
				if(/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream){
					$tabheader.on('touchstart',function(){
						var currentTabIndex = $(this).data("tab");
						var tabsContainer = $(this).closest('.tpgb-tabs-wrapper');
						var tabsNav = $(tabsContainer).children('.tpgb-tabs-nav').children('.tpgb-tab-li').children('.tpgb-tab-header');
						var tabsContent = $(tabsContainer).children('.tpgb-tabs-content-wrapper').children('.tpgb-tab-content');
					
						$(tabsContainer).find(">.tpgb-tabs-nav-wrapper .tpgb-tab-header").removeClass('active default-active').addClass('inactive');
						$(this).addClass('active').removeClass('inactive');
						
						$(tabsContainer).find(">.tpgb-tabs-content-wrapper>.tpgb-tab-content").removeClass('active').addClass('inactive');
						$(">.tpgb-tabs-content-wrapper>.tpgb-tab-content[data-tab='"+currentTabIndex+"']",tabsContainer).addClass('active').removeClass('inactive');
						
						//Init Splide Slider
						if($(".tpgb-tab-content[data-tab='"+currentTabIndex+"']").find(".tpgb-carousel").length){
							var scope = document.querySelectorAll(".tpgb-tab-content[data-tab='"+currentTabIndex+"'] .tpgb-carousel");
							scope.forEach(function(obj){
								var splideInit = slideStore.get(obj);
								splideInit.refresh();
							});
						}
	
						if($(" .tpgb-tab-content[data-tab='"+currentTabIndex+"'] .tpgb-isotope .post-loop-inner", $currentTab).length){
							setTimeout(function(){				
								$(" .tpgb-tab-content[data-tab='"+currentTabIndex+"'] .tpgb-isotope .post-loop-inner", $currentTab).isotope('layout');
							}, 30);
						}
						
						$(tabsContent).each( function(index) {
							$(this).removeClass('default-active');
						});
						if($(">.tpgb-tabs-content-wrapper>.tpgb-tab-content[data-tab='"+currentTabIndex+"'] .pt_tpgb_before_after",tabsContainer).length){
							size_Elements()
						}
					});
				}else{
					$tabheader.on('click',function(){
						var currentTabIndex = $(this).data("tab");
						var tabsContainer = $(this).closest('.tpgb-tabs-wrapper');
						var tabsNav = $(tabsContainer).children('.tpgb-tabs-nav').children('.tpgb-tab-li').children('.tpgb-tab-header');
						var tabsContent = $(tabsContainer).children('.tpgb-tabs-content-wrapper').children('.tpgb-tab-content');
					
						$(tabsContainer).find(">.tpgb-tabs-nav-wrapper .tpgb-tab-header").removeClass('active default-active').addClass('inactive');
						$(this).addClass('active').removeClass('inactive');
						
						$(tabsContainer).find(">.tpgb-tabs-content-wrapper>.tpgb-tab-content").removeClass('active').addClass('inactive');
						$(">.tpgb-tabs-content-wrapper>.tpgb-tab-content[data-tab='"+currentTabIndex+"']",tabsContainer).addClass('active').removeClass('inactive');
						
						//Init Splide Slider
						if($(".tpgb-tab-content[data-tab='"+currentTabIndex+"']").find(".tpgb-carousel").length){
							var scope = document.querySelectorAll(".tpgb-tab-content[data-tab='"+currentTabIndex+"'] .tpgb-carousel");
							scope.forEach(function(obj){
								var splideInit = slideStore.get(obj);
								splideInit.refresh();
							});
						}
	
						if($(" .tpgb-tab-content[data-tab='"+currentTabIndex+"'] .tpgb-isotope .post-loop-inner", $currentTab).length){
							setTimeout(function(){				
								$(" .tpgb-tab-content[data-tab='"+currentTabIndex+"'] .tpgb-isotope .post-loop-inner", $currentTab).isotope('layout');
							}, 30);
						}
						
						$(tabsContent).each( function(index) {
							$(this).removeClass('default-active');
						});
						if($(">.tpgb-tabs-content-wrapper>.tpgb-tab-content[data-tab='"+currentTabIndex+"'] .pt_tpgb_before_after",tabsContainer).length){
							size_Elements()
						}
					});
				}
				
			}
			
		});
		
})(jQuery);