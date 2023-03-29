(function ($) {
	"use strict";
	document.addEventListener('DOMContentLoaded', function () {
		var tpgb_adminBar = {
			init : function () {
				this.createMenu(TpgbAdminbar)
				var tpgbEdit_admin = jQuery('#wp-admin-bar-tpgb_edit_template');
				
				tpgbEdit_admin.addClass('menupop');
				tpgbEdit_admin.on( "mouseenter", function() {
					jQuery(this).addClass('hover');
				})
				.on( "mouseleave", function() {
					jQuery(this).removeClass('hover');
				});
			},
			createMenu : function(admnBar){
				var nexterList = '',
					otherList = '';
				if(admnBar!=''){
					var data = admnBar.tpgb_edit_template
					if(data){
						$.each(data, function(i, item) {
							var type = (data[i].post_type=='nxt_builder') ? data[i].nexter_type : data[i].post_type_name;
							if(data[i].post_type=='nxt_builder'){
								nexterList += '<li id="wp-admin-bar-'+data[i].id+'" class="tpgb-admin-submenu tpgb-admin-'+data[i].id+'">';
									nexterList += '<a class="ab-item tpgb-admin-sub-item" href="'+data[i].edit_url+'" >';
									nexterList += '<span class="tpgb-admin-item-title">'+data[i].title+'</span><span class="tpgb-admin-item-type">'+type+'</span>';
								nexterList += '</a>';
								nexterList += '</li>';
							}else{
								otherList += '<li id="wp-admin-bar-'+data[i].id+'" class="tpgb-admin-submenu tpgb-admin-'+data[i].id+'">';
									otherList += '<a class="ab-item tpgb-admin-sub-item" href="'+data[i].edit_url+'" >';
									otherList += '<span class="tpgb-admin-item-title">'+data[i].title+'</span><span class="tpgb-admin-item-type">'+type+'</span>';
								otherList += '</a>';
								otherList += '</li>';
							}
						});
					}
				}
				var nxtList = '',
					loopList = '';
				if(otherList){
					loopList = '<ul id="wp-admin-bar-tpgb_edit_template" class="ab-submenu">'+otherList+'</ul>';
				}
				if(nexterList){
					nxtList = '<ul id="wp-admin-bar-tpgb_edit_template" class="ab-submenu tpgb-edit-nexter">'+nexterList+'</ul>';
				}
				if(nexterList || otherList){
					var itemList = '<div class="ab-sub-wrapper">'+loopList+nxtList+'</div>';
					jQuery('.tpgb_edit_template').append(itemList);
				}else{
					jQuery('#wp-admin-bar-tpgb_edit_template').hide();
				}
			},
		}
		tpgb_adminBar.init();
	});
})(window.jQuery);
