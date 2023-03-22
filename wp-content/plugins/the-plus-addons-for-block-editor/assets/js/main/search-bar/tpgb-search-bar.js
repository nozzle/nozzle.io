(function($) {
    "use strict";

    $('.tpgb-search-bar').each( function() {
        var main = $(this),
            fieldId = main.data('id'),
            form = main.find('.tpgb-search-form'),
            ajaxsearch = main.data("ajax_search"),
			acfData = main.data("acfdata"),
            Generic = main.data("genericfilter"),
            resultsinnerList = main.find('.tpgb-search-list-inner'),
            searchBtn = main.find('.tpgb-search-btn'),
            searcharea = main.find('.tpgb-search-area'),
            resultList = '.tpgb-search-slider tpgb-row',
            searchheader = main.find('.tpgb-search-header'),
			Rsetting = (main[0].dataset) ? JSON.parse(main[0].dataset.resultSetting) : [],
            pagesetting = (main[0].dataset) ? JSON.parse(main[0].dataset.paginationData) : [],
            Defsetting = (main[0].dataset) ? JSON.parse(main[0].dataset.defaultData) : [];
			
			resultsinnerList.css( 'transform', 'translateX(0)' );
			
		let OverlayBg = main[0].querySelectorAll('.tpgb-rental-overlay');
            if( OverlayBg.length > 0 ){
                tp_overlay_body(main);
            }
			
			let GetDropDown = main[0].querySelectorAll('.tpgb-sbar-dropdown');
            if(GetDropDown.length > 0){
                $('.tpgb-sbar-dropdown',$(this)).on('click',function () {
                    $(this).attr('tabindex', 1).focus();
                    $(this).toggleClass('active');
                    $(this).find('.tpgb-sbar-dropdown-menu').slideToggle(300);
                });
                $('.tpgb-sbar-dropdown',$(this)).focusout(function () {
                    $(this).removeClass('active');
                    $(this).find('.tpgb-sbar-dropdown-menu').slideUp(300);
                });
                $('.tpgb-sbar-dropdown .tpgb-sbar-dropdown-menu .tpgb-searchbar-li',$(this)).on('click',function () {
                    $(this).parents('.tpgb-sbar-dropdown').find('span.search-selected-text').text($(this).text());
                    $(this).parents('.tpgb-sbar-dropdown').find('input').attr('value', $(this).attr('id')).change();
                });
            }
			
			if(ajaxsearch.ajax == 'yes'){
            var $NavigationOn = (pagesetting.PNavigation) ? pagesetting.PNavigation : 0,
                $PostPer = (ajaxsearch && ajaxsearch.post_page) ? ajaxsearch.post_page : 3,
				SpecialCTP = (Defsetting && Defsetting.SpecialCTP) ? Defsetting.SpecialCTP : 0,
                $Searhlimit = (ajaxsearch && ajaxsearch.ajaxsearchCharLimit) ? ajaxsearch.ajaxsearchCharLimit : 0;

            var timeoutID = null;
            $(main[0]).on("change keyup", function(e){
                let EvnetType = e.type,
                    serText = $("input[name=s]", $(this)).val(),
                    post = $("input[name=post_type]", $(this)).val(),
                    tax = $("input[name=taxonomy]", $(this)).val(),
                    cat = $("input[name=cat]", $(this)).val();

                if( (EvnetType == 'keyup' && serText.length >= $Searhlimit) 
                    || (EvnetType == 'change'
                        && (post && SpecialCTP == 0) || ((post && serText.length >= $Searhlimit) || (post=='' && serText.length >= $Searhlimit)) 
                        || (cat && SpecialCTP == 0) || (cat && serText.length >= $Searhlimit) || (cat=='' && serText.length >= $Searhlimit)) ){

                    main[0].querySelector('.tpgb-close-btn').style.cssText = "display:none";
                    main[0].querySelector('.tpgb-ajx-loading').style.cssText = "display:flex";

                    clearTimeout(timeoutID);
                    timeoutID = setTimeout(tpgb_block_searchbar.bind(undefined, e.target.value), 400);
                }else{                   
                    let closeBtn = main[0].querySelectorAll('.tpgb-close-btn');                    
                }
            });

            function tpgb_block_searchbar(search) {
                let serText = $("input[name=s]",main).val(),
                    tax = $("input[name=taxonomy]",main).val(),
                    post = $("input[name=post_type]",main).val();
                    resultsinnerList.html('');
                    searchheader.find('.tpgb-search-pagina',main).html('');
                let AjaxData = {
                        action : 'tpgb_search',
                        searchData : $('.tpgb-search-form',main).serialize(),
                        text : serText,
                        postper : ajaxsearch.post_page,
                        GFilter : Generic,
                        ACFilter : acfData,
                        ResultData : pagesetting,
                        DefaultData : Defsetting,
                        nonce : ajaxsearch.nonce,
                    };

                $.ajax({
                    url: tpgb_load.ajaxUrl,
                    method: 'post',
                    async: true,
                    data: AjaxData,  
                    beforeSend: function() {
						if(pagesetting.Pagestyle == "pagination"){
							main[0].querySelector('.tpgb-search-list-inner').style.cssText = "transform: translateX(0px)";
						}
                    },
                    success: function(response) {
                        let ErrorHtml = main[0].querySelectorAll('.tpgb-search-error'),
                            Headerclass = main[0].querySelector('.tpgb-search-header');

                        if(response.data.error && ErrorHtml.length > 0){
                            ErrorHtml[0].style.cssText = "display:block";
                            ErrorHtml[0].innerHTML = response.data.message;
                            Headerclass.style.cssText = "display:none";
                            searcharea.slideDown(100);
                            return;
                        }else{
                            ErrorHtml[0].style.cssText = "display:none";
                            Headerclass.style.cssText = "display:flex";
                            ErrorHtml[0].innerHTML = '';
                        }

                        //var responseData = response.data;
						var responseData = (response.data) ? response.data : '';
                        if (responseData && responseData.post_count !== 0) {
                            let posts = responseData.posts,
                                post = null,
                                outputHtml ='',
                                listHtml = '<div class="' + resultList.replace('.','') + '">%s</div>',
                                listItemHtml ='';
                                searcharea.slideDown(100);
                        
                                for (post in posts) {
                                    listItemHtml += getSearchhtml(posts[post]);

                                    if((parseInt(post) + 1) % responseData.limit_query == 0 || parseInt(post) === posts.length - 1) {
                                        outputHtml += listHtml.replace('%s', listItemHtml);
                                        listItemHtml = '';
                                    }
                                }
                                
                                resultsinnerList.html(outputHtml);

                                if(Rsetting.TotalResult){
                                    let ResultTxt = Rsetting.TotalResultTxt ? Rsetting.TotalResultTxt : '';
                                        searchheader.find('.tpgb-search-resultcount').html(responseData.post_count +' '+ResultTxt)
                                }
								
                                if(responseData.pagination) {
                                    main[0].querySelector('.tpgb-search-pagina').innerHTML = responseData.pagination;
                                    tp_pagination_ajax(resultList, resultsinnerList, responseData, AjaxData)
                                }else if(responseData.loadmore) {
									if( responseData.total_count > responseData.limit_query ){
                                        main[0].querySelector('.tpgb-load-more').innerHTML = responseData.loadmore;
                                        tp_loadmore_ajax(resultList, resultsinnerList, responseData, AjaxData)
                                    }else{
                                        let Paginaclass = main[0].querySelectorAll('.tpgb-search-pagina');
                                        if(Paginaclass.length > 0){
                                            Paginaclass[0].innerHTML = responseData.loadmore_page;
                                        }
                                    }
                                }else if(responseData.lazymore) {
									if( responseData.total_count > responseData.limit_query ){
										main[0].querySelector('.tpgb-lazy-load').innerHTML = responseData.lazymore;
										tp_lazymore_ajax(resultList, resultsinnerList, responseData, AjaxData)
									}
                                }
                        }else{
                            ErrorHtml[0].style.cssText = "display:block";
                            ErrorHtml[0].innerHTML = Rsetting.errormsg;
                            Headerclass.style.cssText = "display:none";
                            searcharea.slideDown(400);
                            return;
                        }
                    },
                    complete: function() {
						let getinput = document.querySelectorAll('.tpgb-search-input');
						if( getinput.length > 0 ){
							getinput.forEach( el => {
								setTimeout(function() {
									el.blur();
								}, 500);
								
							});
						}
                    },
                }).then(function(e) {
                    setTimeout(function(){ 
                        main[0].querySelector('.tpgb-ajx-loading').style.cssText = "display:none";
                        main[0].querySelector('.tpgb-close-btn').style.cssText = "display:flex";
                    }, 500);                        
                    tp_Close_result()
                });
            }

        }
		
		var getSearchhtml = function(data) {
            let output = '',
                Title = (data.title) ? data.title : '',
                Content = (data.content) ? data.content : '',
                LinkEnale = (Rsetting && Rsetting.ResultlinkOn) ? Rsetting.ResultlinkOn : '',
                Resultlinktarget = (LinkEnale && Rsetting && Rsetting.Resultlinktarget) ? 'target="'+Rsetting.Resultlinktarget+'"' : '',
                Resultlink = (LinkEnale && data && data.link) ? 'href="'+data.link+'"' : '';
                
                if(Rsetting.textlimit){
                    if(Rsetting.TxtTitle){
                        let txtCount = (Rsetting.textcount) ? Rsetting.textcount : 100,
                            txtdot = (Rsetting.textdots) ? Rsetting.textdots : '';
                        if(Rsetting.texttype == "char"){
                            Title = Title.substring(0, txtCount) + txtdot; 
                        }else if(Rsetting.texttype == "word"){
                            Title = Title.split(" ", txtCount).toString().replace(/,/g, " ") + txtdot;
                        }
                    }

                    if(Rsetting.Txtcont){
                        let contcount = (Rsetting.ContCount) ? Rsetting.ContCount : 100,
                            txtdotc = (Rsetting.ContDots) ? Rsetting.ContDots : '';
                        if(Rsetting.ContType == "char"){
                            Content = Content.substring(0, contcount) + txtdotc;
                        }else if(Rsetting.ContType == "word"){
                            Content = Content.split(" ", contcount).toString().replace(/,/g, " ") + txtdotc;
                        }
                    }
                }
                
            output += '<div class="tpgb-ser-item tpgb-trans-linear '+ajaxsearch.styleColumn+'">';
                output += '<a class="tpgb-serpost-link tpgb-trans-easeinout" '+Resultlink+' '+Resultlinktarget+' >';
    
                    if(Rsetting.ONThumb && data.thumb){
                        output += '<div class="tpgb-serpost-thumb">';
							output += '<img class="tpgb-item-image" src=' + data.thumb + '>';
                        output += '</div>';
                    }
        
                    output += '<div class="tpgb-serpost-wrap">';
                        if( (Rsetting.ONTitle && Title) || (Rsetting.ONPrice && data.Wo_Price) ){
                            output += '<div class="tpgb-serpost-inner-wrap">';
                                if(Rsetting.ONTitle && Title){
                                    output += '<div class="tpgb-serpost-title">'+Title+'</div>';
                                }
                                if(Rsetting.ONPrice && data.Wo_Price){
                                    output += '<div class="tpgb-serpost-price">'+data.Wo_Price+'</div>';
                                }
                            output += '</div>';
                        }
                        if(Rsetting.ONContent && Content){
                            output += '<div class="tpgb-serpost-excerpt">'+Content+'</div>';
                        }
                        if(Rsetting.ONShortDesc && data.Wo_shortDesc){
                            output += '<div class="tpgb-serpost-shortDesc">'+ data.Wo_shortDesc +'</div>';
                        }
                    output += '</div>';
                output += '</a>';
            output += '</div>';
        return output;
        };
		
		var tp_loadmore_ajax = function(listHtml, innerlist, responseData, ajaxData) {
            let loadclass = main[0].querySelectorAll('.post-load-more'),
                Postclass = main[0].querySelector('.tpgb-search-slider'),
                Paginaclass = main[0].querySelectorAll('.tpgb-search-pagina');
                
                if(Paginaclass.length > 0){
                    Paginaclass[0].innerHTML = responseData.loadmore_page;
                }

                if(loadclass.length > 0){
                    loadclass[0].addEventListener("click", function(e){
                        let PageNum = Number(this.dataset.page),
                            NewNum = Number(PageNum + 1),
                            PostCount = main[0].querySelectorAll('.tpgb-ser-item');
                            ajaxData.offset = PostCount.length;
                            ajaxData.loadNumpost = pagesetting.loadnumber;

                            jQuery.ajax({
                                url: tpgb_load.ajaxUrl,
                                method: 'post',
                                async: true,
                                data: ajaxData,
                                beforeSend: function() {
                                    loadclass[0].textContent = pagesetting.loadingtxt;
                                },
                                success: function (loadRes) {
                                    loadclass[0].textContent = pagesetting.loadbtntxt;
                                    let posts = loadRes.data.posts,
                                        totalcount = loadRes.data.total_count,                                
                                        post = null,
                                        listItemHtml ='';

                                        for(post in posts){
                                            listItemHtml += getSearchhtml(posts[post]);
                                        }
                                       
                                        $(Postclass).append(listItemHtml);
                                        loadclass[0].setAttribute("data-page", NewNum);

                                        if(Paginaclass.length > 0){
                                            let PageCount = Paginaclass[0].querySelectorAll('.tpgb-load-number')
                                                PageCount[0].textContent = NewNum;
                                        }

                                        let postscount = main[0].querySelectorAll('.tpgb-ser-item');
                                        if(postscount.length == totalcount){
                                            loadclass[0].classList.add('tp-hide');
                                            $(loadclass[0].parentNode).append('<div class="tpgb-post-loaded">'+pagesetting.loadedtxt+'</div>')
                                        }
                                },
                                complete: function() {
                                },
                            });
                    });
                }
        }

        var tp_lazymore_ajax = function(listHtml, innerlist, responseData, ajaxData) {
            let loadclass = main[0].querySelectorAll('.post-lazy-load'),
                Postclass = main[0].querySelector('.tpgb-search-slider'),
                Paginaclass = main[0].querySelectorAll('.tpgb-search-pagina');

            var windowWidth, windowHeight, documentHeight, scrollTop, containerHeight, containerOffset, $window = $(window);
            var recalcValues = function() {
                windowWidth = $window.width();
                windowHeight = $window.height();
                documentHeight = $('body').height();
                containerHeight = $(".tpgb-search-area").height();
                containerOffset = $(".tpgb-search-area").offset().top + 50;
                setTimeout(function() {
                    containerHeight = $(".tpgb-search-area").height();
                    containerOffset = $(".tpgb-search-area").offset().top + 50;
                }, 50);
            };
                recalcValues();
                $window.resize(recalcValues);

            $window.bind('scroll', function(e) {
                e.preventDefault();
                    recalcValues();
                    scrollTop = $window.scrollTop();
                    containerHeight = $(".tpgb-search-area").height();
                    containerOffset = $(".tpgb-search-area").offset().top + 50;

                    var lazyFeed_click = $(".tpgb-search-area").find(".post-lazy-load"),
                        PostCount = main[0].querySelectorAll('.tpgb-ser-item');
                        ajaxData.offset = PostCount.length;
                        ajaxData.loadNumpost = pagesetting.loadnumber;

                        if ($(".tpgb-search-area").find(".post-lazy-load").length && scrollTop < documentHeight && (scrollTop + 60 > (containerHeight + containerOffset - windowHeight))) {
                                if (lazyFeed_click.data('requestRunning')) {
                                    return;
                                }
                                    lazyFeed_click.data('requestRunning', true);

                                jQuery.ajax({
                                    url: tpgb_load.ajaxUrl,
                                    method: 'post',
                                    async: true,
                                    data: ajaxData,
                                    beforeSend: function() {
                                    },
                                    success: function (loadRes) {
                                        let posts = loadRes.data.posts, 
                                            totalcount = loadRes.data.total_count,
                                            post = null,
                                            listItemHtml ='';

                                            for(post in posts){
                                                listItemHtml += getSearchhtml(posts[post]);
                                            }
                                            
                                            $(Postclass).append(listItemHtml);

                                            let postscount = main[0].querySelectorAll('.tpgb-ser-item');
                                            if(postscount.length == totalcount){
                                                loadclass[0].classList.add('tp-hide');
                                                $(loadclass[0].parentNode).append('<div class="tpgb-post-loaded">'+pagesetting.loadedtxt+'</div>')
                                            }
                                    },
                                    complete: function() {
                                        lazyFeed_click.data('requestRunning', false);
                                    },
                                });
                        }
            });

        }

        var tp_pagination_ajax = function(listHtml, innerlist, responseData, ajaxData) {
			
            let Innerclass = main[0].querySelector('.tpgb-search-list-inner'),
                Buttonajax = main[0].querySelectorAll('.tpgb-pagelink.tpgb-ajax-page'),
                NextBtn = main[0].querySelectorAll('.tpgb-pagelink.next'),
                PrevBtn = main[0].querySelectorAll('.tpgb-pagelink.prev'),
                $counterOn = (pagesetting.Pcounter) ? pagesetting.Pcounter : 0,
                $Countlimit = (pagesetting.PClimit) ? pagesetting.PClimit : 3;
                if(Buttonajax.length > 0){
                    Buttonajax.forEach(function(self,idx) {
                        if(Number(self.dataset.page) == Number(1)){
                            let Findhtml = main[0].querySelectorAll('.tpgb-search-slider');
                                if(Findhtml.length > 0){
                                    Findhtml[0].classList.add( 'ajax-'+Number(1) );
                                }
                        }else{
                            $(Innerclass).append('<div class="tpgb-search-slider tpgb-row ajax-'+ Number(idx+1) +'"></div>');
                        }

                        self.addEventListener("click", function(e){
                            let PageNumber = this.dataset.page,
                                Offset = (PageNumber * $PostPer) - ($PostPer),
                                Position = idx*100;
                                ajaxData.offset = Offset;

                                tp_pagination_active(Buttonajax,PageNumber)

                                if($NavigationOn){
                                    PrevBtn[0].setAttribute("data-prev", PageNumber);
                                    NextBtn[0].setAttribute("data-next", PageNumber);
                                }

                                let ajaxclass = Innerclass.querySelectorAll('.tpgb-search-slider.ajax-'+PageNumber);
                                    if(ajaxclass.length > 0){
                                        if(ajaxclass[0].querySelector('.tpgb-ser-item')){
                                            Innerclass.style.cssText = "transform: translateX("+ -(Position) +"%)";
                                            tp_pagination_hidden(responseData);
                                            return;
                                        }
                                    }

                                jQuery.ajax({
                                    url: tpgb_load.ajaxUrl,
                                    method: 'post',
                                    async: true,
                                    data: ajaxData,
                                    beforeSend: function() {
                                    },
                                    success: function (res2) {
                                        let posts = res2.data.posts,
                                            post = null,
                                            listItemHtml ='';

                                            for(post in posts){
                                                listItemHtml += getSearchhtml(posts[post]);
                                            }

                                            $(ajaxclass[0]).append(listItemHtml);
                                            Innerclass.style.cssText = "transform: translateX("+ -(Position) +"%)";
                                            tp_pagination_hidden(responseData);
                                    },
                                    complete: function() {
                                    },
                                });
                        });
                    });
                }

                if(NextBtn.length > 0){
                    NextBtn[0].addEventListener("click", function(e){
                        let PageNumber = Number(this.dataset.next),
                            NewNumber = PageNumber + Number(1),
                            Position = -(PageNumber * Number(100)),
                            Offset = (NewNumber * $PostPer) - ($PostPer);
                            ajaxData.offset = Offset;

                            if($counterOn){
                                Buttonajax.forEach(function(self,idxi) {
                                    if(NewNumber == Number(self.dataset.page)){   
                                        if(self.classList.contains('tp-hide')){
                                            let one = Number(idxi+1 - $Countlimit);
                                                self.classList.remove('tp-hide');
                                                Buttonajax.forEach(function(self,idxii) {
                                                    if(one == idxii+1){
                                                        self.classList.add('tp-hide');
                                                    }
                                                });
                                        }
                                    }
                                });
                            }

                            tp_pagination_active(Buttonajax,NewNumber)

                            if($NavigationOn){
                                PrevBtn[0].setAttribute("data-prev", NewNumber);
                                NextBtn[0].setAttribute("data-next", NewNumber);
                            }

                            let ajaxclass = Innerclass.querySelectorAll('.tpgb-search-slider.ajax-'+NewNumber);
                                if(ajaxclass.length > 0){
                                    if(ajaxclass[0].querySelector('.tpgb-ser-item')){
                                        Innerclass.style.cssText = "transform: translateX("+ Position +"%)";
                                        tp_pagination_hidden(responseData);
                                        return;
                                    }
                                }

                                jQuery.ajax({
                                    url: tpgb_load.ajaxUrl,
                                    method: 'post',
                                    async: true,
                                    data: ajaxData,
                                    beforeSend: function() {
                                    },
                                    success: function (nextres) {
                                        let posts = nextres.data.posts,
                                            post = null,
                                            listItemHtml ='';

                                            for(post in posts){
                                                listItemHtml += getSearchhtml(posts[post]);
                                            }

                                            $(ajaxclass[0]).append(listItemHtml);
                                            Innerclass.style.cssText = "transform: translateX("+ Position +"%)";
                                            tp_pagination_hidden(responseData);
                                    },
                                    complete: function() {
                                    },
                                });
                    });
                }
                
                if(PrevBtn.length > 0){
                    PrevBtn[0].addEventListener("click", function(e){
                        let PageNumber = Number(this.dataset.prev),
                            OldNumber = PageNumber - Number(1),
                            Position = -(OldNumber * 100) + 100,
                            Offset = (OldNumber * $PostPer) - ($PostPer);
                            ajaxData.offset = Offset;

                            if($counterOn){
                                Buttonajax.forEach(function(self,idxi) {
                                    if(OldNumber == Number(self.dataset.page)){ 
                                        if(self.classList.contains('tp-hide')){
                                            let one = Number( idxi+1) + Number( ($Countlimit) );	
                                                self.classList.remove('tp-hide');
                                                Buttonajax.forEach(function(self,idxii) {
                                                    if(one == idxii+1){
                                                        self.classList.add('tp-hide');
                                                    }
                                                });
                                        }
                                    }
                                });
                            }

                            tp_pagination_active(Buttonajax,OldNumber)

                            if($NavigationOn){
                                PrevBtn[0].setAttribute("data-prev", OldNumber);
                                NextBtn[0].setAttribute("data-next", OldNumber);
                            }

                            let ajaxclass = Innerclass.querySelectorAll('.tpgb-search-slider.ajax-'+OldNumber);
                                if(ajaxclass.length > 0){
                                    if(ajaxclass[0].querySelector('.tpgb-ser-item')){
                                        Innerclass.style.cssText = "transform: translateX("+ Position +"%)";
                                        tp_pagination_hidden(responseData);
                                        return;
                                    }
                                }

                                jQuery.ajax({
                                    url: tpgb_load.ajaxUrl,
                                    method: 'post',
                                    async: true,
                                    data: ajaxData,
                                    beforeSend: function() {
                                    },
                                    success: function (Prevres) {
                                        let posts = Prevres.data.posts,
                                            post = null,
                                            listItemHtml ='';

                                            for(post in posts){
                                                listItemHtml += getSearchhtml(posts[post]);
                                            }

                                            $(ajaxclass[0]).append(listItemHtml);
                                            Innerclass.style.cssText = "transform: translateX("+ Position +"%)";

                                            tp_pagination_hidden(responseData);
                                    },
                                    complete: function() {
                                    },
                                });


                    });
                }
        }
		var tp_pagination_hidden = function(responseData){
            if(responseData.columns){
                let PagelinkNext = main[0].querySelectorAll('.tpgb-pagelink.next'),
                    PagelinkPrev = main[0].querySelectorAll('.tpgb-pagelink.prev');
                
                if(PagelinkNext.length > 0){
                    let Next = (PagelinkNext[0].dataset && PagelinkNext[0].dataset.next) ? PagelinkNext[0].dataset.next : '';
                    if(parseInt(Next) == responseData.columns){
                       $('.tpgb-pagelink.next').hide();
                    }else{
                       $('.tpgb-pagelink.next').show();
                    }
                }
                
                if(PagelinkPrev.length > 0){
                    let Prev = (PagelinkPrev[0].dataset && PagelinkPrev[0].dataset.prev) ? PagelinkPrev[0].dataset.prev : '';
                    if(parseInt(Prev) == 1){
                        $('.tpgb-pagelink.prev').hide();
                    }else{
                        $('.tpgb-pagelink.prev').show();
                    }
                }
            }
        }
		
		
        var tp_pagination_active = function($class, $val){
            if($class.length > 0){
                $class.forEach(function(item) {
                    if($val == Number(item.dataset.page)){
                        item.classList.add('active');
                    }else if(item.classList.contains('active')){
                        item.classList.remove('active');
                    }
                });
            }
        }
        
        var tp_Close_result = function() {
            let Area = main[0].querySelector('.tpgb-search-area'),
                input= main[0].querySelector('input[name=s]'),
                overlay = main[0].querySelectorAll('.tpgb-rental-overlay'),
                closebtn = main[0].querySelector('.tpgb-close-btn');
                $(closebtn).on('click', function() {
                    input.value='';
                    $(this).hide();
                    $(Area).slideUp();

                    if(overlay.length > 0){
                        overlay[0].style.cssText = "visibility:hidden;opacity:0;";
                    }
                })

                main.keyup(function(e) {
                    if (e.key === "Escape") {
                        input.value='';
                        $(Area).slideUp();
                        closebtn.style.cssText = "display:none";
                    }
                })

        }
		
		function tp_overlay_body(main){
			let overlay = main[0].querySelector('.tpgb-rental-overlay'),
				textbox = main[0].querySelector('.tpgb-input-field');

			// Input    
			$(".tpgb-search-input", main).on({
				focus: function () {
					overlay.style.cssText = "visibility:visible;opacity:1;";
					textbox.style.cssText = "z-index:1000;";
				},
				focusout: function () {
					overlay.style.cssText = "visibility:hidden;opacity:0;";
					textbox.style.cssText = "";
				}
			});

			// select 
			$(".tpgb-select", main).on('click', function(e){
				overlay.style.cssText = "visibility:visible;opacity:1;";
			})
			$(".tpgb-rental-overlay", main).on('click', function(e){
				overlay.style.cssText = "visibility:hidden;opacity:0;";
			});

			// Esc ket to close
			main.keyup(function(e) {
				if (e.key === "Escape") {
					overlay.style.cssText = "visibility:hidden;opacity:0;";
				}
			})
		}
		
    });
})(jQuery);