let secStretch = document.querySelectorAll('.tpgb-section-stretch-row');
if(secStretch){
    tpgb_rowStretch1()
    window.addEventListener('resize', function(event) {
        tpgb_rowStretch1()
    }, true);

    function tpgb_rowStretch1(){
        secStretch.forEach((sec)=>{
            let window_width = document.body.clientWidth,
                sec_width = sec.getBoundingClientRect().width;

            if(window_width !== sec_width){
                if(document.body.classList.contains('rtl')){
                    sec.style.right = 0;
                    var offset_left = 0 - sec.offsetLeft;
                    sec.style.right = offset_left;
                    sec.style.width = window_width;
                }else{
                    sec.style.left = 0;
                    var offset_left = 0 - sec.offsetLeft;
                    sec.style.left = offset_left;
                    sec.style.width = window_width+"px";
                }
            }else{
                if(document.body.classList.contains('rtl')){
                    sec.style.right = '';
                    sec.style.width = '';
                }else{
                    sec.style.left = '';
                    sec.style.width = '';
                }
            }
        });
    }
}
