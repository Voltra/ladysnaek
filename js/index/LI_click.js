$(document).ready(
    function(){
        var $LI = $("#links").children("ul").children("li");
        $LI.each(makeLIclickable);
        var $LI_2 = $("#social_medias").children("ul").children("li");
        $LI_2.each(makeLIclickable);
    }
);