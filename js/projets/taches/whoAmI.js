var JSONfile, projet, interval, TTdone=false, dotdotdot="...", refreshInterval;
var DOCproj;
$(document).ready(function(){
    determ();
});



function grabData(){
    var path_to_file = "/json/projets.json";
//    loadJSONfile(path_to_file);
    jQuery.getJSON(path_to_file, function(data){
       JSONfile = data;//assign data's KEY-VALUE pairs to the data holder
    })
    .done(function(){console.log("retrieved data from JSON file");})
    .fail(function(){console.log("fail to retreive data from JSON file");})
    .always(function(){console.log("\tcompleted attempt to retreive data from JSON file\nPS: do not worry about the XML warning below it is completely normal")});
    
//    return JSONfile;
}



function determ(){
    /*JSONfile = */grabData();
    if(JSONfile === undefined || JSONfile === {}){
        console.log("loading file"+dotdotdot);
//        dotdotdot += ".";
        if(!TTdone){
            interval = setInterval(determ, 500);
            TTdone=true;
        }
    }else{
//        dotdotdot="...";
        clearInterval(interval);
        var doc_title = (location.pathname.substring(location.pathname.lastIndexOf("/") + 1)).replace('.html','');
        for(var i = 0 ; i < JSONfile.projects.length ; i++){//var p in JSONfile.projects
            var p = JSONfile.projects[i];
            if(p.id == doc_title){
                projet = p;
                DOCproj = p;
                break;
            }
        }
        if(projet === undefined){console.log("MEDIIIIIIIIIIIIIIIIIC !");}
        
//        $("#taches").attr("projet", projet);
//        doTheMagic($("#taches").prop("projet"));
        
        refreshInterval = setInterval(function(){
            firstIntervalYolo(DOCproj/*$("#taches").attr("projet")*/);
        }, 500);
    }
}

//effectue la MaJ
function doTheMagic(proj){
//    console.log("DOCproj: "+DOCproj+"\nproj: "+proj);
//    DOCproj = proj;
    var $LIs = $("#taches").children("li");
    var $PBs = $LIs.children(".ui-progressbar");
    
    if( !(proj === undefined) ){
        $PBs.each(function(index, elem){
//            console.log(index);
            var $curr = $PBs.eq(index);
            var $txt = $curr.children(".ui-progress-txt");
            var $desc = $curr.parent().children("p").eq(0);
            var $img = $desc.parent().children("img").eq(0);

            //fade out
            //{duration: 500, queue: false}
            $txt.fadeOut(500);
            $desc.fadeOut(500);
            $img.fadeOut(500);

            //update
//            $txt.innerHTML = "" + proj.tasks[index].progress + "%";
            $txt.text("" + proj.tasks[index].progress + "%");
            var prog = "" + proj.tasks[index].progress;
            var progress = parseInt(prog, 10);
            $curr.progressbar("option", "value", progress);
            ABScenterVH($txt, $curr);
//            $desc.innerHTML = proj.tasks[index].name;
            $desc.text(""+proj.tasks[index].name);
            $img.attr("src", proj.tasks[index].img);

            //fade in
            $txt.fadeIn(500);
            $desc.fadeIn(500);
            $img.fadeIn(500);
            
            
            console.log("updated");
        });
    }
    
}



function firstIntervalYolo(proj){
    clearInterval(refreshInterval);
    
//    $("#taches").attr("projet", proj);
    if( !(DOCproj === undefined || DOCproj === {}) ){
        refreshInterval = setInterval(function(){
            doTheMagic(DOCproj);
        }, 60000);
    }
    
    doTheMagic(proj);
}
//60000