var scrollbar_settings = {
    
    preservenativescrolling: false,
    enablemousewheel: true,
    horizrailenabled: false,
    bouncescroll: true,
    cursorborderradius:"8vmin",
    cursorcolor: "#e9ebee",
    cursorwidth: "1.8vmin",
    cursorborder:"0px solid transparent",
    cursoropacitymin:0.35,
    cursoropacitymax: 0.69,
    railoffset:{left:-2}
    
};

$(document).ready(function(){
    $("#taches").niceScroll(scrollbar_settings);
});