var sidemenu_slide_duration = 500;/*in ms*/
/*
*Dynamic: 500
*Slow paced: 800
*Heart disease: 1200
*saaanic: 50
*I'm fast af boi: 200
*correct pace : 350
*/




//you're reading this comment ? Do you even javascript bruh ?
$(document).ready(function(){
    $("#sm-button").click(sidemenu_button_click);
});




/**function that animates a slide of the #page div
*@auto-param $(this) being the current item aka the activation button
*@calc-param prop("clicked") being the clicked status
*@calc-g-output slide
*@intel further comments are for the sake of noobs only, pros already know dat shit boi
*/
function sidemenu_button_click(){
//    var slide_width = (window.innerWidth < 768)?"40vw":"20vw";
    var slide_width = (window.innerWidth < 768)?"40vw":"20vw";
    slide_width = (window.innerWidth < window.innerHeight)?"40vw" : "20vw";
    
    if(window.innerWidth < window.innerHeight){
        $("#sidemenu a").addClass("a-hw");
    }else{
        $("#sidemenu a").removeClass("a-hw");
    }
    
    
    //if it was not defined, initiallize to false
    if($(this).prop("clicked") === undefined){
        $(this).prop("clicked", false);
    }
    
    
    //if false (not clicked / clicked 2n times) then slide to the right
    if($(this).prop("clicked") === false){
        if($("#sm-button").hasClass("deanimate")){
            $("#sm-button").removeClass("deanimate").addClass("animate");
        }else{
            $("#sm-button").addClass("animate");
        }
        
        $("#page").animate({
            left: slide_width /*pour responsive sans faire de conditionnel*/
        },{
            duration: sidemenu_slide_duration,
            queue: false,
            easing: "swing" //even though swing is default setting, redefining easing to swing makes sure you have a smooth swing
        });
    }
    
    
    
    
    //if true (clicked / clicked 2n+1 times) then slide to the left
    if($(this).prop("clicked") === true){
        $("#sm-button").removeClass("animate").addClass("deanimate");
        
        $("#page").animate({
            left:"0"
        },{
            duration: sidemenu_slide_duration,
            queue: false,
            easing: "swing"//even though swing is default setting, redefining easing to swing makes sure you have a smooth swing
        });
    }
    
    
    //each time you call this function the clicked status must change, therefore :
    var bool = $(this).prop("clicked"); //store current value (either true or false) in a variable
    $(this).prop("clicked", !bool); //invert the value
}
