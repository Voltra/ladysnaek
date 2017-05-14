var scrollbar_settings = {
    
    preservenativescrolling: false,
    enablemousewheel: true,
    horizrailenabled: false,
    bouncescroll: true,
    cursorborderradius:"8vmin",
    cursorcolor: "#3c3f41",
    cursorwidth: "2.2vmin",
    cursorborder:"0px solid transparent",
    cursoropacitymin:0.35,
    cursoropacitymax: 0.69,
    railoffset:{left:-2}
    
};

$(document).ready(function(){
    $("#page_content").niceScroll(scrollbar_settings);
});