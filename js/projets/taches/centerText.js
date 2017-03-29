function ABScenterVH($this, $container, index){
    var oh = $container.innerHeight();
    var ow = $container.innerWidth();
    
    $this.css("fontSize",""+(oh * 3 / 4)+"px");
    
    var ih = $this.innerHeight();
    var iw = $this.innerWidth();
    
    var nh = ((oh - ih) / 2);
    var nw = ((ow - iw) / 2);
    
    ABSsetVH(nh, nw, $this); 
}




function ABSsetVH(nh, nw, $this){
    $this.css("top", ""+nh+"px");
    $this.css("left", ""+nw+"px");
    $this.css("bottom", "auto");
    $this.css("right", "auto");
}






var $pb_txt_iframe;

$(document).ready(function(){
    $pb_txt_iframe = $(".ui-progress-txt");
    $pb_txt_iframe.each(function(index, elem){
       ABScenterVH($(this), $(this).parent(), index); 
    });
    
    $(window).on('resize', function(){
       $pb_txt_iframe.each(function(index, elem){
           ABScenterVH($(this), $(this).parent(), index); 
        });
    });
});