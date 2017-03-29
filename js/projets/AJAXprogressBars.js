//global variable that will hold the JSON data
var AJAXprojects = {};
var txtUpdate_fade_duration = PBfade_duration * 1.5;


//function called by setInterval to refresh data
function refreshPBfromJSON(){
//    console.clear();
//    while(AJAXprojects.projects === undefined){
    console.log("retrieving data from JSON file");
        AJAXprojects = readJSON();
//    }
//    console.log(AJAXprojects.projects);
    
    if( !(AJAXprojects.projects === undefined) ){
        for(var i = 0 ; i < AJAXprojects.projects.length ; i++){
            //stores the current project in a variable
            var currProj = AJAXprojects.projects[i];

            //calculates the project's progress status (0%-100%)
            var v_progress = 0;
            for(var j = 0 ; j < currProj.tasks.length ; j++){
                v_progress += currProj.tasks[j].progress;
            }
            v_progress /= currProj.tasks.length;
            var str_progress = ""+ v_progress;
            v_progress = parseInt(str_progress, 10);


            //updates the current project's PB
                //caching useful jQuery objects for performance optimization
            var $currLI = $("#"+currProj.id).parent().parent();
            var $currPB = $currLI.children("div").eq(0);
            var $currPBtxt = $currPB.children(".ui-progress-txt").eq(0);
            var $currPBval = $currPB.children(".ui-progressbar-value").eq(0);
                //fading out the text
            $currPBtxt.fadeOut(txtUpdate_fade_duration);
                //update the value
            $currPB.progressbar("option","value",v_progress);
            $currPBtxt.each(individualPBtext);//using each on a single result because the function needs an index and value due to previous use with each (with multiple result)
                //fading in the text
            $currPBtxt.fadeIn(txtUpdate_fade_duration);
            
            
            createSubProj(currProj);
        }
    }
}


/**@@@HELPER FUNCTIONS@@@**/
    //function to get the data from the json file
function readJSON(){
    jQuery.getJSON("/json/projets.json", function(data){
        /*AJAXprojects = {};*///re-initialize the data holder
        AJAXprojects = Object.assign({}, data);//assign data's KEY-VALUE pairs to the data holder
    })
    .done(function(){console.log("retrieved data from JSON file");})
    .fail(function(){console.log("fail to retreive data from JSON file");})
    .always(function(){console.log("\tcompleted attempt to retreive data from JSON file\nPS: do not worry about the XML warning below it is completely normal")});

    
    return AJAXprojects;
}









function firstRefresh(){
    clearInterval(firstAJAXinterval);
    refreshPBfromJSON();
    refreshPBfromJSON();
//    refreshPBfromJSON();
}