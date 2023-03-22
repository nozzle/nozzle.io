/* Heading Title Split Start */
let hTitleSp = document.querySelectorAll('.tpgb-heading-title');
if(hTitleSp){
    hTitleSp.forEach( el => {
        if(el.classList.contains('heading-style-9')){
            let subStyle = el.querySelector('.sub-style'),
                animsplitType = subStyle.getAttribute("data-animsplit-type"),
            spiltAttr = subStyle.getAttribute('data-aniattrht');
            spiltAttr = JSON.parse(spiltAttr);

            var animation = Power4.easeOut;

            if(spiltAttr && spiltAttr.effect && spiltAttr.effect!= 'default'){                        
                animation = spiltAttr.effect;
            }

            subStyle = jQuery(subStyle);

            subStyle.waypoint(function() {
                let mySplitText = new SplitText(subStyle, { type: animsplitType });
                let splitTextTimeline = new TimelineLite();        
                
                TweenLite.set(subStyle, { perspective: 4000 });

                /*word start*/
                if(subStyle.hasClass('tpgb-split-words')){
                    let words = jQuery(mySplitText.words);
                    words.each((index, elementotsword) => {
                        splitTextTimeline.from(jQuery(elementotsword), spiltAttr['speed'], {
                            opacity: spiltAttr['opacity'],
                            x: spiltAttr['x'],
                            y: spiltAttr['y'],
                            scaleX: spiltAttr['scaleX'],
                            scaleY: spiltAttr['scaleY'],
                            scaleZ: spiltAttr['scaleZ'],
                            rotationX: spiltAttr['rotationX'],
                            rotationY: spiltAttr['rotationY'],
                            rotationZ: spiltAttr['rotationZ'],
                            autoAlpha: 0,
                            ease: animation
                        }, index * spiltAttr['delay']);
                    });
                }
                /*word end*/

                /*char start*/
                if(subStyle.hasClass('tpgb-split-chars')){
                    splitTextTimeline.staggerFrom(mySplitText.chars, spiltAttr['speed'], {
                        opacity: spiltAttr['opacity'],
                        x: spiltAttr['x'],
                        y: spiltAttr['y'],
                        scaleX: spiltAttr['scaleX'],
                        scaleY: spiltAttr['scaleY'],
                        scaleZ: spiltAttr['scaleZ'],
                        rotationX: spiltAttr['rotationX'],
                        rotationY: spiltAttr['rotationY'],
                        rotationZ: spiltAttr['rotationZ'],
                        autoAlpha: 0,                          
                        ease: animation
                    }, spiltAttr['delay']);
                }                
                /*char start*/

                /*line start*/
                if(subStyle.hasClass('tpgb-split-lines')){
                    TweenMax.staggerFrom(mySplitText.lines, spiltAttr['speed'], {  
                        opacity: spiltAttr['opacity'],                          
                        x: spiltAttr['x'],
                        y: spiltAttr['y'],
                        scaleX: spiltAttr['scaleX'],
                        scaleY: spiltAttr['scaleY'],
                        scaleZ: spiltAttr['scaleZ'],
                        rotationX: spiltAttr['rotationX'],
                        rotationY: spiltAttr['rotationY'],
                        rotationZ: spiltAttr['rotationZ'],
                        autoAlpha: 0,                       
                        ease: animation
                    }, spiltAttr['delay']);
                }
                /*line end*/
                setTimeout(function() { 
                    jQuery(subStyle.find('div')).each(function () {                           
                        if(animsplitType && animsplitType === 'chars' ){                                
                            if (isEmptyCheck(jQuery(this))) {
                                jQuery(this).addClass('tpgb-spl-space');
                            }
                        }
                    });

                    jQuery(subStyle.find(' div > div')).each(function () {
                        if(animsplitType && animsplitType === 'lines,chars' ){                               
                            if (isEmptyCheck(jQuery(this))) {
                                jQuery(this).addClass('tpgb-spl-space');
                            }
                        }
                    });

                    function isEmptyCheck( ell ){
                        return !jQuery.trim(ell.html())
                    }

                }, 50);
                
            }, { offset: '90%' } );

        }
    });
}

/* Heading Title Split End */