var maindiv = document.querySelectorAll('.tpgb-smooth-scroll');

if(maindiv.length){
    maindiv.forEach(function(item){
        var data = JSON.parse(item.getAttribute('data-scrollAttr'));
        if(!jQuery('body').hasClass("tpgb-smooth-scroll-tras")){
            jQuery('body').addClass("tpgb-smooth-scroll-tras");
            jQuery('head').append('<style>.tpgb-smooth-scroll-tras .magic-scroll .parallax-scroll,.tpgb-smooth-scroll-tras .magic-scroll .scale-scroll,.tpgb-smooth-scroll-tras .magic-scroll .both-scroll{-webkit-transition: -webkit-transform 0s ease .0s;-ms-transition: -ms-transform 0s ease .0s;-moz-transition: -moz-transform 0s ease .0s;-o-transition: -o-transform 0s ease .0s;transition: transform 0s ease .0s;will-change: transform;}</style>');
        }
        if(data.responsive=='yes'){				    
                var width=window.innerWidth;
                if(width>800){
                    if(!jQuery('body').hasClass("tpgb-smooth-scroll-tras")){
                        jQuery('body').addClass("tpgb-smooth-scroll-tras");
                    }
                    
                    SmoothScroll({frameRate:data.frameRate,animationTime:data.animationTime,stepSize:data.stepSize,pulseAlgorithm:data.pulseAlgorithm,pulseScale:data.pulseScale,pulseNormalize:data.pulseNormalize,accelerationDelta:data.accelerationDelta,accelerationMax:data.accelerationMax,keyboardSupport:data.keyboardSupport,arrowScroll:data.arrowScroll,fixedBackground:data.fixedBackground,touchpadSupport:data.touchpadSupport})
                }else{
                    if(jQuery('body').hasClass("tpgb-smooth-scroll-tras")){
                        jQuery('body').removeClass("tpgb-smooth-scroll-tras");
                    }
                }
        }else{
            SmoothScroll({frameRate:data.frameRate,animationTime:data.animationTime,stepSize:data.stepSize,pulseAlgorithm:data.pulseAlgorithm,pulseScale:data.pulseScale,pulseNormalize:data.pulseNormalize,accelerationDelta:data.accelerationDelta,accelerationMax:data.accelerationMax,keyboardSupport:data.keyboardSupport,arrowScroll:data.arrowScroll,fixedBackground:data.fixedBackground,touchpadSupport:data.touchpadSupport})
        }
    
    })
}