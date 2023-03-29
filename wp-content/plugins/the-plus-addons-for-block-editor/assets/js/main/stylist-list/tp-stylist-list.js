let sList = document.querySelectorAll('.tpgb-stylist-list');
if(sList){
    sList.forEach((sl)=>{
        let ul_listing = sl.querySelectorAll(".tpgb-icon-list-item");
        /** Hover Inverse */
        let hoverInverse = sl.classList.contains('hover-inverse-effect');
        if(hoverInverse){
            let mainItems = sl.querySelector('.tpgb-icon-list-items');
            ul_listing.forEach((ulist)=>{
                ulist.addEventListener('mouseenter', ()=>{
                    mainItems.classList.add('on-hover');
                });

                ulist.addEventListener('mouseleave', ()=>{
                    mainItems.classList.remove('on-hover');
                });

            });
        }
    });
}