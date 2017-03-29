function makeLIclickable(index, elem){
    /**
    *Make LI clickable using their A first child
    *@use-condition use this with a JQuery EACH over a selection
    *@param index being the current index
    *@param elem being the current element's value
    */
    $(this).css("cursor","pointer");
    var url = $(this).children("a").eq(0).attr("href") || "";
    var opt = $(this).children("a").eq(0).attr("target") || "_self";
    
    
    while($(this).prop("url") === undefined){
        $(this).prop("url",url);
    }
    while($(this).prop("opt") === undefined){
        $(this).prop("opt",opt);
    }
    
    $(this).click(function(){
        switch($(this).prop("url")){
            case "":
                break;
            default:
                JSredir( $(this).prop("url"), $(this).prop("opt") );
                break;
        }
    });
      
}




function JSredir(url, opt){
    /**
    *Performs a redirection in javascript
    *@author Voltra
    *@param url being the url you want the user to be redirected to (if omitted it will redirect to the current url)
    *@param opt being the "target" (like a A html tag) of the redirection (if omitted, it redirects in the same window)
    */

    url = url || document.location.href;
    opt = opt || "_self";

    switch(opt){
        case "_self":
            document.location.href = url;
            break;
        default:
            window.open(url, opt);
            break;
    }
}