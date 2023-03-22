(function ($) {
	"use strict";
	// Clear purge cache files styles and scripts
		var performace_cont = $('#cmb2-metabox-tpgb_performance');
		if(performace_cont.length > 0){
			var ids="tpgb-remove-smart-cache";
			var ids_dynamic="tpgb-remove-dynamic-style";
			var smart_action = '';
			var dynamic_action ='';
			
			if(performace_cont.length > 0){
				var selected = 'combine';
				if($("body").hasClass("perf-separate")){
					selected = 'separate';
				}

				var ondelayVal = false;
				if($("body").hasClass("perf-delay-true")){
					ondelayVal = true;
				}
				var delay_js = '<div class="cmb-th tpgb-smart-loader-delay tpgb-remove-dynamic-style"><label>Delay Extra JS <span class="tpgb-tooltip-dynamic">!</span></label><div class="block-check-wrap"><input type="checkbox" class="block-list-checkbox" name="tpgb-smart-loader" id="tp-delay-js-opt" value="'+ondelayVal+'" '+(ondelayVal == true ? 'checked="checked"' : '')+' /><label for="tp-delay-js-opt"></label></div></div>';

				var onDeferVal = false;
				if($("body").hasClass("perf-defer-true")){
					onDeferVal = true;
				}
				var defer_js = '<div class="cmb-th tpgb-smart-loader-delay tpgb-remove-dynamic-style tpgb-load-defer"><label>Defer CSS & JS <span class="tpgb-tooltip-dynamic">!</span></label><div class="block-check-wrap"><input type="checkbox" class="block-list-checkbox" name="tpgb-smart-loader" id="tp-defer-js-opt" value="'+onDeferVal+'" '+(onDeferVal == true ? 'checked="checked"' : '')+' /><label for="tp-defer-js-opt"></label></div></div>';

				performace_cont.append('<div class="cmb-row tpgb-remove-plus-cache"><div class="cmb-th"><label for="plus_smart_performance">CSS & JS Delivery System</label></div><div class="tpgb-select-caching-type"><select id="tpgb-cache-opt-performance"><option value="combine" '+(selected=='combine' ? 'selected="selected"' : '')+'>Smart Optimized Mode</option><option value="separate" '+(selected=='separate' ? 'selected="selected"' : '')+'>On Demand Assets</option></select><div class="tpgb-perf-save-msg"></div></div><div class="cmb-td performance-combine"><p class="cmb2-metabox-description">On First Load, CSS delivery start from header in minified-combined format and One combined-minified JS in the footer. On Second load, All CSS will be combined-minified in just one single CSS file and loaded on header and JS will be delivered from footer same as First load. The optimized asset is stored at "/wp-content/uploads/theplus_gutenberg"</p><a href="#" id="'+ids+'" class="tpgb-purge-cache-btn">Purge All Assets</a><div class="smart-performace-desc-btn">*Above button will remove all Combined-minified files from "/wp-content/uploads/theplus_gutenberg" and It will regenerate on your page visit.</div></div><div class="cmb-td performance-separate"><p class="cmb2-metabox-description">Based on blocks used on web page, Individual CSS for each block will be loaded from header. All JS will be loaded in footer individually based on blocks used on that page.</p></div>'+delay_js+defer_js+'</div>');

				performace_cont.append('<div class="cmb-row tpgb-default-block-page"><div class="cmb-th"><label>Gutenberg Default Blocks Manager</label></div><div class="cmb-td"><p class="cmb2-metabox-description">You can enable/disable Blocks of Default Gutenberg aka Block Editor. It also having scan feature to auto find used blocks on website and disable rest blocks.</p><a href="'+window.location.pathname+'?page=tpgb_default_load_blocks" class="tpgb-block-manager-btn">Visit Block Manager</a><div class="smart-performace-desc-btn">Note : This is a beta feature. You may enable/disable any blocks as well as scan blocks to auto disable all at once. But, Make sure to have complete backup of site before using this.</div></div></div>');

				smart_action = "tpgb_all_perf_clear_cache";
				
				performace_cont.append('<div class="cmb-row tpgb-remove-dynamic-style"><div class="cmb-th"><label for="plus_smart_performance">Regenerate Assets <span class="tpgb-tooltip-dynamic">!</span></label><p class="cmb2-metabox-description">Note : If you find any discrepancy in frontend and backend design, then we would suggest you to click on above button to regenerate the assets dynamically again based on design changes.</p></div><div class="cmb-td"><a href="#" id="'+ids_dynamic+'" class="tpgb-smart-cache-btn">REGENERATE ALL ASSETS</a></div></div>');
				
				dynamic_action = "tpgb_all_dynamic_clear_style";
				var delayJs = document.getElementById('tp-delay-js-opt');
				var deferJs = document.getElementById('tp-defer-js-opt');
				var delayJsVal = false;
				if(delayJs.checked){
					delayJsVal = true;
				}
				var deferJsVal = false;
				if(deferJs.checked){
					deferJsVal = true;
				}
				tpgb_perf_opt_change(false, $('#tpgb-cache-opt-performance').val(), delayJsVal, deferJsVal);
				function tpgb_perf_opt_change(onajax=false, cacheVal, delayJsVal, deferJsVal){
					if(cacheVal=='combine'){
						$('.cmb-td.performance-combine').show(100);
						$('.cmb-td.performance-separate').hide(100);
					}else if(cacheVal=='separate'){
						$('.cmb-td.performance-combine').hide(100);
						$('.cmb-td.performance-separate').show(100);
					}
					var $this = $(".tpgb-perf-save-msg");
					if(onajax && cacheVal){
						$this.show(50);
						$.ajax({
							url: tpgb_admin.ajax_url,
							type: "post",
							data: {
								action: 'tpgb_performance_opt_cache',
								security: tpgb_admin.tpgb_nonce,
								perf_caching: cacheVal,
								delay_js: delayJsVal,
								defer_js: deferJsVal,
							},
							beforeSend: function() {
								 $this.html(
									'<svg id="plus-spinner" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48"><circle cx="24" cy="4" r="4" fill="#fff"/><circle cx="12.19" cy="7.86" r="3.7" fill="#fffbf2"/><circle cx="5.02" cy="17.68" r="3.4" fill="#fef7e4"/><circle cx="5.02" cy="30.32" r="3.1" fill="#fef3d7"/><circle cx="12.19" cy="40.14" r="2.8" fill="#feefc9"/><circle cx="24" cy="44" r="2.5" fill="#feebbc"/><circle cx="35.81" cy="40.14" r="2.2" fill="#fde7af"/><circle cx="42.98" cy="30.32" r="1.9" fill="#fde3a1"/><circle cx="42.98" cy="17.68" r="1.6" fill="#fddf94"/><circle cx="35.81" cy="7.86" r="1.3" fill="#fcdb86"/></svg>'
								);
							},
							success: function(response) {
								if(response && response.success){
									$this.addClass('success')
									$this.html("Saved..");
									setTimeout(function() {
										$this.hide(100);
										$this.removeClass('success')
									}, 2000);
								}else{
									$this.addClass('error')
									$this.html("Server Error..");
									setTimeout(function() {
										$this.hide(100);
										$this.removeClass('error')
									}, 2000);
								}
							},
							error: function() {
							}
						});
					}
				}
    			$("#tpgb-cache-opt-performance").on('change',function(){
					var delayJs = document.getElementById('tp-delay-js-opt');
					var delayVal = false;
					if(delayJs.checked){
						delayVal = true;
					}
					var deferJs = document.getElementById('tp-defer-js-opt');
					var deferVal = false;
					if(deferJs.checked){
						deferVal = true;
					}
					tpgb_perf_opt_change( true, $(this).val(), delayVal, deferVal );
				})
				
				if(delayJs){
					delayJs.addEventListener('change', (event) => {
						var chkValue = false;
						if (event.currentTarget.checked) {
							chkValue = true;
						}
						var deferJs = document.getElementById('tp-defer-js-opt');
						var deferVal = false;
						if(deferJs.checked){
							deferVal = true;
						}
						tpgb_perf_opt_change(true,$('#tpgb-cache-opt-performance').val(), chkValue, deferVal);
					})
				}
				if(deferJs){
					deferJs.addEventListener('change', (event) => {
						var chkValue = false;
						if (event.currentTarget.checked) {
							chkValue = true;
						}
						var delayJs = document.getElementById('tp-delay-js-opt');
						var delayVal = false;
						if(delayJs.checked){
							delayVal = true;
						}
						tpgb_perf_opt_change(true,$('#tpgb-cache-opt-performance').val(), delayVal, chkValue);
					})
				}
			}
			
			$(".tpgb-purge-cache-btn").on("click", function(e) {
				e.preventDefault();
				if(performace_cont.length > 0){
					var confirmation = confirm("Are you sure want to remove all cache files? It will remove all cached JS and CSS files from your server. It will generate automatically on your next visit of page.?");
				}
				if (confirmation) {
					var $this = $(this);
					$.ajax({
						url: tpgb_admin.ajax_url,
						type: "post",
						data: {
							action: smart_action,
							security: tpgb_admin.tpgb_nonce
						},
						beforeSend: function() {
							$this.html(
								'<svg id="plus-spinner" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48"><circle cx="24" cy="4" r="4" fill="#fff"/><circle cx="12.19" cy="7.86" r="3.7" fill="#fffbf2"/><circle cx="5.02" cy="17.68" r="3.4" fill="#fef7e4"/><circle cx="5.02" cy="30.32" r="3.1" fill="#fef3d7"/><circle cx="12.19" cy="40.14" r="2.8" fill="#feefc9"/><circle cx="24" cy="44" r="2.5" fill="#feebbc"/><circle cx="35.81" cy="40.14" r="2.2" fill="#fde7af"/><circle cx="42.98" cy="30.32" r="1.9" fill="#fde3a1"/><circle cx="42.98" cy="17.68" r="1.6" fill="#fddf94"/><circle cx="35.81" cy="7.86" r="1.3" fill="#fcdb86"/></svg><span style="margin-left: 5px;">Removing Purge...</span>'
							);
						},
						success: function(response) {
							if(performace_cont.length > 0){
								setTimeout(function() {
									$this.html("Purge All Cache");
								}, 100);
							}
						},
						error: function() {
						}
					});
				}
			});
			
			$("#"+ids_dynamic).on("click", function(e) {
				e.preventDefault();
				if(performace_cont.length > 0){
					var confirmation = confirm("Are you sure want to remove all cache files? It will remove all cached JS and CSS files from your server. It will generate automatically on your next visit of page.?");
				}
				if (confirmation) {
					var $this = $(this);
					$.ajax({
						url: tpgb_admin.ajax_url,
						type: "post",
						data: {
							action: dynamic_action,
							security: tpgb_admin.tpgb_nonce
						},
						beforeSend: function() {
							$this.html(
								'<svg id="plus-spinner" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48"><circle cx="24" cy="4" r="4" fill="#fff"/><circle cx="12.19" cy="7.86" r="3.7" fill="#fffbf2"/><circle cx="5.02" cy="17.68" r="3.4" fill="#fef7e4"/><circle cx="5.02" cy="30.32" r="3.1" fill="#fef3d7"/><circle cx="12.19" cy="40.14" r="2.8" fill="#feefc9"/><circle cx="24" cy="44" r="2.5" fill="#feebbc"/><circle cx="35.81" cy="40.14" r="2.2" fill="#fde7af"/><circle cx="42.98" cy="30.32" r="1.9" fill="#fde3a1"/><circle cx="42.98" cy="17.68" r="1.6" fill="#fddf94"/><circle cx="35.81" cy="7.86" r="1.3" fill="#fcdb86"/></svg><span style="margin-left: 5px;">Removing Assets...</span>'
							);
						},
						success: function(response) {
							if(performace_cont.length > 0){
								setTimeout(function() {
									$this.html("REGENERATE ALL ASSETS");
								}, 100);
							}
						},
						error: function() {
						}
					});
				}
			});
		}
		
		/*Welcome page FAQ*/
		$('.tpgb-welcome-faq .tpgb-faq-section .faq-title').on('click',function() {
			var $parent = $(this).closest('.tpgb-faq-section');
			var $btn = $parent.find('.faq-icon-toggle')
			$parent.find('.faq-content').slideToggle();
			$parent.toggleClass('faq-active');
		});
		/*Welcome page FAQ*/
		/*Plus block Listing*/
		$('#block_check_all').on('click', function() {
				$('.plus-block-list input:checkbox:enabled').prop('checked', $(this).prop('checked'));
			if(this.checked){
				$(this).closest(".panel-block-check-all").addClass("active-all");
			}else{
				$(this).closest(".panel-block-check-all").removeClass("active-all");
			}
		});
		$( ".panel-block-filters .blocks-filter" ).on('change',function () {
			var selected = $( this ).val();
			var block_filter = $(".plus-block-list .tpgb-panel-col");
			if(selected!='all'){
				block_filter.removeClass('is-animated')
					.fadeOut(5).promise().done(function() {
					  block_filter.filter(".block-"+selected)
						.addClass('is-animated').fadeIn();
					});
			}else if(selected=='all'){
				block_filter.removeClass('is-animated')
					.fadeOut(5).promise().done(function() {
						block_filter.addClass('is-animated').fadeIn();
					});
			}
		});
		
		var timeoutID = null;
		
		function tpgb_block_filter(search) {
			$.ajax({
				url: tpgb_admin.ajax_url,
				type: "post",
				data: {
					action: 'tpgb_block_search',
					filter: search,
					security: tpgb_admin.tpgb_nonce
				},
				beforeSend: function() {
					
				},
				success: function(response) {
					if(response!=''){
						$(".plus-block-list").empty();
						$(".plus-block-list").append(response);
					}
					$( ".panel-block-filters .blocks-filter" ).change();
				}
			});
		}
		$( ".tpgb-block-filters-search .block-search" ).on('keyup',function( e ) {
			clearTimeout(timeoutID);
			timeoutID = setTimeout(tpgb_block_filter.bind(undefined, e.target.value), 350);
			//var search = $(this).val();
		});
		/*Plus block Listing*/
		/* Rollback */
		if($('.tpgb-rollback-inner').length){
			$('.tpgb-rollback-inner').each(function(){
				var $this = $(this),
				rb_btn = $this.find('.tpgb-rollback-button'),
				data_btn_text = rb_btn.data('rv-text'),
				data_btn_url = rb_btn.data('rv-url'),
				rb_select = $this.find('.tpgb-rollback-list').val();
				if(rb_select){
					rb_btn.html(data_btn_text.replace('{TPGB_VERSION}', rb_select));
					rb_btn.attr('href', data_btn_url.replace('TPGB_VERSION', rb_select));
				}
				$this.find('.tpgb-rollback-list').on("change",function(){
					rb_btn.html(data_btn_text.replace('{TPGB_VERSION}', $(this).val()));
					rb_btn.attr('href', data_btn_url.replace('TPGB_VERSION', $(this).val()));
				});
				rb_btn.on('click', function (e) {
					e.preventDefault();
					var $btn_this = $(this);
					if(confirm("Are you sure you want to reinstall previous version?")){
						location.href = $btn_this.attr('href');
					}
				});
			});
		}
		/* Rollback */
})(window.jQuery);