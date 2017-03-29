var modal_duration = 500;/*in ms*/
var modal_initial_index = 2000;

var modal_arr = [];



$(document).ready(voltra_modal);



function voltra_modal(){
    var $img = $("#gallerie").children("li").children("img");//grab all images from the list
    
    $img.each(bindModal);
}



/*bind modal to click event*/
function bindModal(index, elem){
    $(this).on("click",IMGmodalify);
    $("#hold-meh-boi").on("click",modalify);
    
    /*update to use gallerie easily*/
    gallerie.images.push($(this));
    $(this).prop("arr_index", index);
}



/*Handle click on minimized img*/
function IMGmodalify(){
    var $prop = $(this).prop("show_modal");
    var $src = $(this).prop("src");
    var $Mprop = $("#hold-meh-boi").prop("show_modal");
    
    
    if($prop === undefined){
        setModalAttr($(this), false);
        setModalAttr($("#hold-meh-boi"), false);
        $prop = $(this).prop("#hold-meh-boi");
        $Mprop = $("#hold-meh-boi").prop("show_modal");
        /*if this property doesn't exist/ is undefined, initilize it to false*/
    }
    
    if($prop === false){
        gallerie.current = $(this).prop("arr_index");
        setModalSrc($src);/*set source before showing or it'd be nonsense*/
        modalAnim('+');/*show modal*/
        
        if(modal_arr.length == 0){
            modal_arr.push($(this));
        }
    }
    
    if($prop === true){
        modalAnim('-');/*hide modal*/
        resetModalSrc();/*reset source after hiding or it'd be nonsense*/
        console.log("IMGmodalify: $prop was true");
        
        /**
        *this one is pretty much useless but it allows to cover
        *all cases so I implement it anyway
        */
    }
    
    
    setModalAttr($(this), !$prop);
    setModalAttr($("#hold-meh-boi"), !$Mprop);
}



/*handles click for the modal container*/
function modalify(){
    var $img = modal_arr[0];/*modal_arr should not be empty right now, beg for it*/
    var $prop = $img.prop("show_modal");
    var $src = $img.prop("src");
    var $Mprop = $(this).prop("show_modal");
    
    
    
    if($Mprop === undefined){
        setModalAttr($(this), false);
        setModalAttr($img, false);
        $Mprop = $(this).prop("show_modal");
        $prop = $img.prop("show_modal");
        console.log("modalify: Mprop was undefined");
    }/*should NEVER happen but I do it anyway*/
    
    
    if($Mprop === false){
        setModalSrc($src);
        modalAnim('+');
        console.log("modalify: $Mprop was false");
    }/*should NEVER happen but I do it anyway*/
    
    if($Mprop === true){
        modalAnim('-');
        resetModalSrc();
        
        modal_arr.splice(0, 1);//remove 1 item from 0th item (included)
    }
    
    setModalAttr($(this), $Mprop);
    setModalAttr($img, $prop);
}






function setModalSrc(url){
    $("#modal-receptacle").attr("src",url);
}

function resetModalSrc(){
    setModalSrc("");
}

function setModalAttr(obj ,boolean_value){
    obj.prop("show_modal", boolean_value);
}




function modalAnim(sign){
    var ind = 0;
    var opa = -4;
    var order = undefined;
    
    
    /*détermine l'animation à effectuer*/
    switch(sign){
        case '+'://quand on veut afficher le modal
            ind = modal_initial_index;
            order = true;
            break;
        case '-'://quand on veut ne pas afficher le modal
            ind = -1 * modal_initial_index;
            order = false;
            break;
        default:
            console.log("<!>  something went wrong animating modal</!>  ");
            break;
    }
    
    
    
    //détermine l'opacité finale de l'animation
    //note: oui on peut les regrouper, mais c'est plus clair comme ça (et plus modulaire)
    switch(ind){
        case modal_initial_index:
            opa=1;
            break;
        case -1 * modal_initial_index:
            opa=0;
            break;
        default:
            console.log("<!>  something went wrong during calculation of opacity for modal  </!>");
            break;
    }
    
    
    
    /*toute l'animation*/
    var arr = [];
    arr.push($("#modal"), $("#hold-meh-boi"), $("#sub-modal"), $("#modal-receptacle"), $("#prev-btn"), $("#next-btn"));
    
    
    if(order){
        changeZindex(arr, ind);
        animPieces(arr, opa);
    }else{
        animPieces(arr, opa);
        changeZindex(arr, ind);
    }

}

function animPieces(arr, opa){
    for(var i = 0 ; i < arr.length ; i++){
        arr[i].animate({
            opacity: opa
        },{
            duration: modal_duration,
            queue: false
        });
    }
}

function changeZindex(arr, base_index){
    var i = 0;
    
    for(i=0 ; i<arr.length-1 ; i++){
        arr[i].css("z-index", base_index+i);
    }
    
    arr[i].css("z-index", base_index+i);
}