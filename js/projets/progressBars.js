var progressbars;
//$(document).ready(progressBars);

function progressBars(){
    progressbars = $("#projets").children("li").children("div");
    
    progressbars.each(function(index, elem){
        $(this).progressbar({
            max: 100,
            value: 0
        });
    });
}