var sub_header, sub_footer;
var createSubProj, doHeader, doFooter, addLItoSP, AJAXcreateFile;



createSubProj = createSubProj || function(proj){
    sub_header = doHeader();
    sub_footer = doFooter();
    
    var Pid = proj.id;
    var filename = "html/"+Pid+".html";
    var file_content = "";

    file_content += sub_header;
    for(var t in proj.tasks){
        file_content += addLItoSP(t.name, t.progress, t.image);
    }
    file_content += sub_footer;

    var file_text = [];
    file_text.push(file_content);

    
//    var blob = new Blob(file_text, {type: "text/html;charset=utf-8"});
//    saveAs(blob, filename);
    
//    AJAXcreateFile(filename, file_content);
}




//create the top of the pages
doHeader = doHeader || function(){
    var s = "";
    
    
    
    s+='<!DOCTYPE html>';
    s+='<html lang="fr-FR">';
    s+='<head>';
    s+='<!--Page Info-->';
    s+='<title>&nbsp;</title>';
    s+='<link rel="icon" href="/src/img/png/logo.png" type="image/png"/>';
    s+='<meta charset="utf-8" whatIdo="adapter le jeu de caractères au maximum"/>';
    s+='<meta lang="fr"/>';
    s+='<meta name="author" content="Voltra - Ludwig GUERIN"/>';
    s+='<meta name="keywords" content="ladysnake, projet, taches"/>';

    s+='<!--important META-->';
    s+='<meta name="viewport" content="width=device-width, height=device-height, user-scalable=no, shrink-to-fit=no, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0" whatIdo="adaptation au support"/>';

    s+='<!--stylesheets-->';
    s+='<link rel="stylesheet" href="/css/reset.css" whatIdo="réinitialiser les styles par défaut du navigateur"/>';
    s+='<link rel="stylesheet" href="/css/clear_float.css" whatIdo="réinitiliser le flux(float) de la page"/>';

    s+='<link rel="stylesheet" href="/css/font-load.css" whatIdo="charger les polices de caractères"/>';

    s+='<link rel="stylesheet" href="/jQueryUI/jquery-ui.css" whatIdo="styles pour les éléments de jqUI"/>';
    s+='<link rel="stylesheet" href="/jQueryUI/jquery-ui.structure.css" whatIdo="styles de structure de jqUI"/>';
    s+='<link rel="stylesheet" href="/jQueryUI/jquery-ui.theme.css" whatIdo="thème pour les éléments de jqUI"/>';

    s+='<link rel="stylesheet" href="/css/projets/taches/commun.css" whatIdo="styles communs à tous les supports"/>';
    s+='<link rel="stylesheet" href="/css/projets/taches/main.css" whatIdo="styles principaux"  media="screen and (min-width:768px)"/>';
    s+='<link rel="stylesheet" href="/css/projets/taches/mobile.css" whatIdo="styles pour petites résolutions" media="screen and (max-width:768px)"/>';
    s+='<link rel="stylesheet" href="/css/projets/taches/mobile.css" whatIdo="adapter le style pour l\'orientation portrait" media="screen and (orientation:portrait)"/>';

    s+='<link rel="stylesheet" href="/css/projets/taches/definitive_colors.css" whatIdo="couleurs définitives"/>';

    s+='<!--Regular Scripts-->';
    s+='<script src="/js/jquery.js" type="text/javascript" whatIdo="simplifier le JS"></script>';
    s+='<script src="/jQueryUI/jquery-ui.js" type="text/javascript" whatIdo="éléments d\'IU"></script>';

    s+='<!--Custom Made Scripts-->';
    s+='<script src="/js/autoTitle.js" type="text/javascript" whatIdo="renomme la page en fonction du nom du fichier"></script>';
    s+='<script>$(document).ready(function(){$(".ui-progressbar").progressbar({value:0});});</script>';
    s+='<script src="/js/projets/taches/centerText.js" type="text/javascript" whatIdo="centre les textes de barres de progression"></script>';
    s+='<script src="/js/projets/taches/whoAmI.js" type="text/javascript" whatIdo="détermine quel projet est la page en AJAX"></script>';
    s+='</head>';
    s+='<body>';
    s+='<ul id="taches">';
    
    
    return s;
}

//create the bottom of the page
doFooter = doFooter || function(){
    var s = "";
    
    
    s+='</ul>';
    s+='</body>';
    s+='</html>';
    
    
    return s;
}




//create an LI according the template and values passed
addLItoSP = addLItoSP || function(text, progress, img_link){
    var s = "";
    
    
    s+='<li>';
    s+='<img src="'+'&nbsp;'+'" alt="'+'&nbsp;'+'"/>';
//    s+='<img src="'+img_link+'" alt="'+text+'"/>';
    s+='<p>'+'&nbsp;'+'</p>';
//    s+='<p>'+text+'</p>';
    s+='<div class="ui-progressbar">';
    s+='<div class="ui-progress-txt">&nbsp;</div>';
    s+='</div>';
    s+='</li>';
    
    
    return s;
}





AJAXcreateFile = AJAXcreateFile || function(url, content){
    var data = {
        filepath: ""+url,
        filecontent: ""+content
    };
    
    
    jQuery.ajax({
        url:"php/dynamic.php",
        data: data,
        cache: false,
        async: true,
        type:'post',
        timeout:3000
    });
}