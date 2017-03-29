var gallerie = new Gallery($("#gallerie").children("li").children("img"));
/*gallerie.initGallerie($("#gallerie").children("li").children("img"));*/




$(document).ready(setButtons);

function setButtons(){
    $("#prev-btn").on("click", prevImg);
    $("#next-btn").on("click", nextImg);
}



function prevImg(){
    gallerie.changeImage('<');
}

function nextImg(){
    gallerie.changeImage('>');
}



function Gallery(JQobj){
    this.images = [];
    
    this.JQarray = JQobj;
    
    this.current = 0;
    
    this.changeImage = function(char){
        switch(char){
            case '>':
                this.current += 1;
                this.current %= this.images.length;
                setModalSrc( this.images[this.current].attr("src") );
                break;
            case '<':
                this.current -= 1;
                this.current %= this.images.length;
                setModalSrc( this.images[this.current].attr("src") );
                break;
            default:
                break;
        }
    }
    
    this.initGallerie = function(){
        for(var i = 0 ; i < this.JQarray.length ; i++){
            this.images.push(this.JQarray[i]);
        }
    }
}