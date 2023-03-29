/** Message Box */
window.addEventListener('DOMContentLoaded', (event) => {
    let messAll = document.querySelectorAll('.tpgb-messagebox');
    messAll.forEach((ms)=>{
        let disBtn = ms.querySelector('.msg-dismiss-content');
        if(disBtn){
            disBtn.addEventListener('click', ()=>{
                slideUpP(ms, 500)
            })
        }
    });
});