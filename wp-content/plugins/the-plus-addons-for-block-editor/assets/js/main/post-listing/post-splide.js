// Js For Splide Slider
let slideStore = new Map();

var scope = document.querySelectorAll('.tpgb-carousel');
scope.forEach(function(obj){
    splide_init(obj)
});

function splide_init(ele){
    var slide = new Splide( ele ).mount();
	slideStore.set( ele, slide);
}