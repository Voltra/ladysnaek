$(document).ready(clickLI);

function clickLI(){
    var LI = $("#sidemenu").children("#nav").children("li");
    
    LI.each(makeLIclickable);
    disable_link();
}