function loadJSONfile(url, obj){
    var request = new XMLHttpRequest();
    var response = {};
    
    request.open('GET', url);
    request.responseType = 'json';
    request.send();
    
    request.onload = function(){
        var str = request.response;
        response = JSON.parse(str);
        obj = Object.assign({}, response);
    }
    
}