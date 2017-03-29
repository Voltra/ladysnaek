function disable_link(){
    var $selection = $("#nav").children("li");
    $selection.each(nopify);
}

function nopify(index, elem){
    var $x = $(this).children("a");
    
    if($x.attr("nopified") != undefined){
        $x.prop("style","cursor: default");
        $(this).prop("style","cursor: default");
    }
}