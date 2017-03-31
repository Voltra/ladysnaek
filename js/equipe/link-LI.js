$(document).ready(LIclickify);

function LIclickify(){
    var $LI = $("#sidemenu > #nav > li");
    $LI.each(makeLIclickable);
    disable_link();
}