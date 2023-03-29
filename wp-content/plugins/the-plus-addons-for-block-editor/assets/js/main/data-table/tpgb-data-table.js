(function($) {
    "use strict";
	$('.tpgb-table-wrapper').each(function(){
		var e = $(this);
		if (void 0 !== e) {
			var n = e.find('.tpgb-table').data("id")
				, l = e.find("#tpgb-table-id-"+n)
				, d = !1
				, r = !1
				, i = !1;
			
			if ( 0 != l.length) {    
				"yes" == l.data("searchable") && (d = !0),
				"yes" ==l.data("show-entry") && (r = !0),
				"yes" == l.data("sort-table") && (l.find("th").css({
					cursor: "pointer"
				}),i = !0);
				
				var o = l.data("searchable-label");
				if (d || r || i)
					l.DataTable({
						paging: false,
						searching: false,
						ordering: i,
						info: !1,
						"pagingType": "full_numbers",
						"lengthMenu": [[5, 10, 15, -1], [5, 10, 15, "All"]],
						oLanguage: {
							sSearch: o
						}
					}),
					e.find(".dataTables_length").addClass("tpgb-tbl-entry-wrapper tpgb-table-info"),
					e.find(".dataTables_filter").addClass("tpgb-tbl-search-wrapper tpgb-table-info"),
					e.find(".tpgb-table-info").wrapAll('<div class="tpgb-advance-heading"></div>');
				window.addEventListener("load", s),
				window.addEventListener("resize", s)
			}
		}
  
		function s() {
			$(window).width() > 767 ? ($(l).addClass("tpgb-column-rules"),
			$(l).removeClass("tpgb-no-column-rules")) : ($(l).removeClass("tpgb-column-rules"),
			$(l).addClass("tpgb-no-column-rules"))
		}
	});
})(jQuery);