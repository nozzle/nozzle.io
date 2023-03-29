let testiDiv = document.querySelectorAll('.tpgb-testimonials');

if(testiDiv){
    testiDiv.forEach((el)=>{

        let isoDiv = el.querySelector('.post-loop-inner')
        if( el.classList.contains('tpgb-isotope') || el.classList.contains('tpgb-carousel') ){
            let readBtn = el.querySelectorAll('.testi-readbtn')

            readBtn.forEach((readbtn)=>{
                readbtn.addEventListener( 'click' , function(btn){
                    let current = btn.currentTarget,
                    moretxt = current.previousSibling,
                    buttonText = JSON.parse(current.dataset.readdata);
                    
                    if(moretxt.style.display != "none") {
                        moretxt.style.display = "none";
                        current.innerHTML = buttonText.readMore
                    }else {
                        moretxt.style.display = "inline";
                        current.innerHTML = buttonText.readLess
                    }

                    if(el.classList.contains('tpgb-isotope')){
                        jQuery(isoDiv).isotope({
                            itemSelector: ".grid-item",
                            resizable: !0,
                            sortBy: "original-order"
                        });
                    }
                       
                })
            })
        }
    })
}