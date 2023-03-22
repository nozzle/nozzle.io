/** Social Icons */
window.addEventListener('DOMContentLoaded', (event) => {
    let socIcons = document.querySelectorAll('.tpgb-social-icons');
    if(socIcons){
        socIcons.forEach((si)=>{
            let iconTt = si.querySelectorAll('.social-icon-tooltip');
            iconTt.forEach((itt)=>{
                let id = itt.getAttribute('id')
                    settings = itt.getAttribute('data-tooltip-opt');
                settings = JSON.parse(settings);
                if(settings && settings.content != ''){
                    tippy( '#'+id , {
                        allowHTML : true,
                        content: settings.content,
                        trigger : settings.trigger,
                        maxWidth : settings.MaxWidth,
                        appendTo: document.querySelector('#'+id),
                    });
                }
            });
        });
    }
});