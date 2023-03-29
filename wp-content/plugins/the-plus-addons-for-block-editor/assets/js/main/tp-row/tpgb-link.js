var rowDiv = document.querySelectorAll('.tpgb-section , .tpgb-container-row');
if(rowDiv){
    rowDiv.forEach(function(obj){
        if(obj.classList.contains('tpgb-row-link')){
            var url = obj.getAttribute('data-tpgb-row-link'),
                target = obj.getAttribute('data-target');

            obj.addEventListener('click', function() {
                if(url){
                    window.open( url , target );
                }
            })
        }
    })
}
// Add Link to column
var colDiv = document.querySelectorAll('.tpgb-column,.tpgb-container-col');

if(colDiv){
    colDiv.forEach(function(col){
        if(col.classList.contains('tpgb-col-link')){
            var colurl = col.getAttribute('data-tpgb-col-link'),
                coTarget = col.getAttribute('data-target');
                
                col.addEventListener('click', function() {
                if(colurl){
                    window.open( colurl , coTarget );
                }
            })
        }
    })
}


