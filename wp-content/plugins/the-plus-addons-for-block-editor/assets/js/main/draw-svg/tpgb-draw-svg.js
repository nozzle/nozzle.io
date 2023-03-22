/*Draw Svg*/
window.addEventListener('DOMContentLoaded', (event) => {
    let drawSVG = document.querySelectorAll('.tpgb-draw-svg');
    if(drawSVG){
        drawSVG.forEach((ds)=>{
            let data_id = ds.getAttribute("data-id"),
                data_duration = ds.getAttribute("data-duration"),
                data_type = ds.getAttribute("data-type"),
                data_stroke = ds.getAttribute("data-stroke"),
                fillenable = ds.getAttribute("data-fillenable"),
                fillcolor = ds.getAttribute("data-fillcolor");

            var drawSvg = new Vivus(data_id, {type: data_type, duration: data_duration,forceRender:false,start: 'inViewport',onReady: function (myVivus) {
                var cAll=myVivus.el.childNodes;
                
                var show_id=document.getElementById(data_id);
                if(fillenable!='' && fillenable=='yes'){
                    myVivus.el.style.fillOpacity='0';
                    myVivus.el.style.transition='fill-opacity 0s';
                }
                show_id.style.opacity = "1";
                if(data_stroke!='' && cAll !=undefined){
                    for (var i = 0; i < cAll.length; i++) {
                        if(cAll[i].nodeName != '#text'){
                            cAll[i].setAttribute("fill", fillcolor);
                            cAll[i].setAttribute("stroke", data_stroke);
                            var pchildern = cAll[i].children;
                            if(pchildern != undefined){
                                for(var j=0; j < pchildern.length; j++){
                                    pchildern[j].setAttribute("fill", fillcolor);
                                    pchildern[j].setAttribute("stroke", data_stroke);
                                }
                            }
                        }
                    
                    }
                }
            }
            }, function (myVivus) {
                if(myVivus.getStatus() === 'end' && fillenable!='' && fillenable=='yes'){
                    myVivus.el.style.fillOpacity='1';
                    myVivus.el.style.transition='fill-opacity 1s';
                }
            } );

            if(ds.classList.contains('tpgb-hover-draw-svg')){
                let svgInner = ds.querySelector(".svg-inner-block");
                svgInner.addEventListener('mouseenter', ()=>{
                    new Vivus(data_id, {type: data_type, duration: data_duration,start: 'inViewport'}).reset().play();
                })
            }
        });
    }
});