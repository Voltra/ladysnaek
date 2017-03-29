var $proj, $a;
var updated_pb;

var PBfade_duration = 300;
$(document).ready(updateTags);



function updateTags(){
    console.clear();
    $proj = $("#projets").children("li");
    $proj.each(appendProgressBar);
    
    $a = $proj.children("a");
    $a.each(addModal);
    
    
    progressBars();
    updated_pb = true;
    progressbars.fadeIn(PBfade_duration);
}

function appendProgressBar(index, elem){
    var $this = $(this);
    var appendString = "";
    
    appendString += '<div class="ui-progressbar">';
    appendString +=   '<div class="ui-progress-txt"></div>';
    appendString +=   '<div class="ui-progressbar-value"></div>';
    appendString += '</div>';
    
    $this.append(appendString);
}

/*
<div class="ui-progressbar">
    <div class="ui-progress-txt"></div>
    <div class="ui-progressbar-value"></div>
</div>
*/








function addModal(index, elem){
    var $this = $(this);
    var $img = $this.children("img");
    var url = "html/"+$img.attr("id")+".html";
    $this.attr("href", "javascript:;");
    $this.attr("data-src", url);
    $this.addClass("VNmodal");
    $this.attr("data-fancybox", "projet");
}