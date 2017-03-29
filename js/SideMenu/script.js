$(document).ready(makeSideMenu);

function makeSideMenu(){
    $("button#sm-button").click(SideMenuButton);
    $("#title-wrap").click(SMOB_click);
    $("#title-wrap").css('cursor','pointer');
}

function SideMenuButton(){
    $(this).toggleClass("btn");
}

function SMOB_click(){
    var $url = $(this).children("#page-title").attr("href");
    document.location.href = $url;
}