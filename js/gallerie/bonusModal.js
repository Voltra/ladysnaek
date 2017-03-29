var $fancybg = $("#VoltraFancyBox");

$(document).ready(FancyboxUpdate);

function FancyboxUpdate(){
    $fancybg.on('click',customFB);
}

function customFB(){
    console.log("customFB used");
    $(this).trigger('click.fb-close');
}