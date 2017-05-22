$(document).ready(clickThoseLI);

function clickThoseLI(){
    var LI = $("#sidemenu").children("#nav").children("li");
    
    LI.each(makeLIclickable);
    disable_link();
}