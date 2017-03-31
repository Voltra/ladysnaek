var $As;
$(document).ready(updateTags);

function updateTags(){
   $As  = $(".membre > a");
    
    $As.each(DoTagUpdate);
    
    modFancyBoxDefaults();
    
//    $(".membre").fancybox({
//        image: {
//            protect:true
//        }
//    });
}


function DoTagUpdate(index, elem){
    var $a = $(this);
    var url = getUrlForA($a);
    
    $a.attr("data-fancybox","team");
    $a.attr("href","javascript:;");
    $a.attr("data-src",url);
}



function getUrlForA($jq){
    var ret = $jq.parent().attr("id");
    
    ret = ret.replace("M","");
    ret += ".html";
    ret = "/html/team/" + ret;
    
    return ret;
}




function modFancyBoxDefaults(){
    $.fancybox.defaults.speed = 350;
    //more if you wanna
}