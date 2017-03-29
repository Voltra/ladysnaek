$(document).ready(updateTags);
//Calls ↓


function updateTags(){
    var $LIs = $("#gallerie").children("li");
    
    $LIs.each(doTagUpdate);
    
    setupModal();
}
//Calls ↓


function doTagUpdate(index, elem){
    //caching results for performance optimization
    var $a = $(this).children("a").eq(0);
    var $img = $a.children("img").eq(0);
    var $path = $img.attr("src");

    //get filename from img
    var filename = getFileName($path);

    //set attributes and properties
    $a.attr("href", $path);
//    $a.attr("data-fancybox", filename);
    $a.attr("data-fancybox","gallery");
    $a.addClass("VNgallerie");
//    $a.attr("rel","gallery");
//    $a.attr("data-type","images");
}
//Calls ↓


function getFileName(path){
    var beg = 0;
    var end = 0;
    //beg and end exist for understanding purposes only
    
    var Fname = "";
    
    //get filename with extension
    for(var i = path.length ; i >= 0 ; i-=1){
        if(path.charAt(i) === '/'){
            beg=i+1;
            
            Fname = path.substring(beg);
            break;
        }
    }
    
    //remove extension
    for(var i = Fname.length ; i >= 0 ; i-=1){
        if(Fname.charAt(i) === '.'){
            end=i;
            
            Fname = Fname.substring(0, end);
        }
    }
    
    return Fname;
}







function setupModal(){
    $.fancybox.defaults.speed = sidemenu_slide_duration * 0.6;
    
    $(".VNgallerie").fancybox(
        {
            'image': {
                protect:true
            },
            'type': 'image',
            'helpers': {
                'title': null
            }
        }
    );
}