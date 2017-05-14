var scrollbar_settings = {
    
    preservenativescrolling: false,
    enablemousewheel: true,
    horizrailenabled: false,
    bouncescroll: true,
    cursorborderradius:"8vmin",
    cursorcolor: "#3c3f41",
    cursorwidth: "1.8vmin",
    cursorborder:"0px solid transparent",
    cursoropacitymin:0.10,
    cursoropacitymax: 0.35,
    railoffset:{left:-2}
    
};

$(document).ready(function(){
    $("#description").niceScroll(scrollbar_settings);
});