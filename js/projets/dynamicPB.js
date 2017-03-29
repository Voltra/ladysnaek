var $progress_bars, $progress_bars_text
var interval, firstAJAXinterval;
var dPB = false;
$(document).ready(dynamicPB);


function dynamicPB(){
    if(updated_pb === undefined || !dPB){
        interval = setInterval(dynamicPB, 100);
        dPB=true;
    }else{
        clearInterval(interval);//clear the wait for updateTags to be done
        firstAJAXinterval = setInterval(firstRefresh, 800);//used to fix broken first JSON call
        
        
//        $a.each(addModal);
        
        
        interval = setInterval(refreshPBfromJSON, 60000);//refresh progress bar values
        refreshPBfromJSON();
        
        
        $progress_bars = $proj.children("div.ui-progressbar");
        $progress_bars_text = $progress_bars.children("div.ui-progress-txt");
        
        $progress_bars_text.each(individualPBtext);
        
        //event listeners
            //responsive
        $(window).on('resize', function(){
            $progress_bars_text.each(individualPBtext);
        });
            //optimisation pour mobiles
        $(window).on('orientationchange', function(){
            $progress_bars_text.each(individualPBtext);
        });
        //DO IT : update à partir de json + ajax reload DONE
        //DO IT : sous-tâches w/ JSON et DOM-M dynamique
        
        $.fancybox.defaults.speed = 750;
        $("[data-fancybox]").fancybox();
        
        
    }
}


function individualPBtext(index, elem){
    var $this = $(this);
    var $parent = $this.parent("div")
    var amount = $parent.progressbar("value");
    $this.text(""+amount+"%");
    
    centerPBtext($this, $parent);
}


function centerPBtext(text_div, pb_div){
    var oh = pb_div.innerHeight();
    var ow = pb_div.innerWidth();
    
    text_div.css("fontSize",""+(oh * 3 / 4)+"px");//taille du texte de façon dynamique
    
    var ih = text_div.innerHeight();
    var iw = text_div.innerWidth();
    
    
    var nh = (oh - ih) / 2;
    var nw = (ow - iw) / 2;
    
    text_div.css("top",nh);
    text_div.css("left",nw);
    text_div.css("bottom","auto");
    text_div.css("right","auto");
}