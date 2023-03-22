window.addEventListener('DOMContentLoaded', (event) => {
  let allAccordion = document.querySelectorAll('.tpgb-accor-wrap');
  if(allAccordion){
        allAccordion.forEach((el)=>{
          let accType = el.getAttribute('data-type'),
              accrodionList = el.querySelectorAll('.tpgb-accor-item');

          accrodionList.forEach((al)=>{
              let acBtn = al.querySelector('.tpgb-accordion-header');

              if(accType == 'accordion'){
                if(/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream){
                  acBtn.addEventListener('touchstart', (btn)=>{
                      var currBtn = btn.currentTarget;
                      toggleFun(currBtn, accrodionList);
                      changeEventAccordion(currBtn)
                  })
                }else{
                    acBtn.addEventListener('click', (btn)=>{
                            var currBtn = btn.currentTarget;
                            toggleFun(currBtn, accrodionList);
                            changeEventAccordion(currBtn)
                        })
                    }
                  }
              });
          })

      function toggleFun(currBtn, accrodionList){
          let content = currBtn.nextSibling;
          if(currBtn.classList.contains('active')){
              currBtn.classList.remove('active');
              content.classList.remove('active');
              slideUpP(content, 500);
          }else{
            accrodionList.forEach((ell) => {
              let actCon = ell.querySelector('.tpgb-accordion-header');

              if(actCon.classList.contains('active')){
                actCon.classList.remove('active');
                actCon.nextSibling.classList.remove('active');
                slideUpP(actCon.nextSibling, 500);
              }
            })
            currBtn.classList.add('active');
            content.classList.add('active');
            slideDownP(content, 500);
          }
      }

      var hash = window.location.hash;
      window.addEventListener("DOMContentLoaded", () =>{
        if(hash!='' && hash!=undefined){
          let getHash = document.querySelector(hash);

          if(!getHash.classList.contains('active') && getHash){
            var hashOffset = getHash.getBoundingClientRect();
            window.scrollTo({top : hashOffset.top, behavior : "smooth"});

            let mainAc = getHash.closest('.tpgb-accor-wrap'),
                acList = mainAc.querySelectorAll('.tpgb-accor-item');
            toggleFun(getHash, acList);
          }
          
        }
      })
  }
});
function changeEventAccordion(el){
  var isotope_class = " .tpgb-isotope .post-loop-inner";
  if(el && el.nextSibling.querySelector(isotope_class)){
    setTimeout(function(){
      jQuery(el.nextSibling.querySelector(isotope_class)).isotope('layout');
    }, 50);
  }
}