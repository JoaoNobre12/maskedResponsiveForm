/**
 * Created by joaonobre on 24/01/16.
 */
//carrousel
$(document).ready(function() {

    $("#owl-demo").owlCarousel({

        navigation : false, // Show next and prev buttons
        pagination: false,
        slideSpeed : 300,
        paginationSpeed : 800,
        //singleItem:true,
        autoPlay:true,

        // "singleItem:true" is a shortcut for:
        items : 1,
        itemsDesktop : true,
        itemsDesktopSmall : true,
        itemsTablet: true,
        itemsMobile : true

    });

});

//size
var initSize = function(){
    for(var x = 0; x<arguments.length; x++){
        for(var i = 0; i<document.getElementsByTagName(arguments[x]).length; i++){
            document.getElementsByTagName(arguments[x])[i].style.height = window.innerHeight + "px";
        }
    }
};

//colocarplace holder
window.onload = function(evt){
    var form = document.getElementById("form");


    if(window.innerWidth > 800){
        initSize('header','section');

        for(var x = 0; x<form.length; x++){

            switch (x){
                case 0: form[x].setAttribute('placeholder','What message do you want to show?'); break;
                case 1: form[x].setAttribute('placeholder',"We'll never show it without your permission."); break;
                case 2: form[x].setAttribute('placeholder','When do you want to show the message?'); break;
                case 3: form[x].setAttribute('placeholder',"What's your name?"); break;
                case 4: form[x].setAttribute('placeholder',"This is just for we contact you"); break;
                case 5: form[x].setAttribute('placeholder','Your e-mail?'); break;
                case 6: break;
                default: alert("fatal error, contact admin"); break;
            }
        }
    }

    else{
        showMenu();
        for(var x = 0; x<form.length; x++){

            switch (x){
                case 0: form[x].setAttribute('placeholder','Enter the Banner message'); break;
                case 1: form[x].setAttribute('placeholder','Enter the ZIP code'); break;
                case 2: form[x].setAttribute('placeholder','Enter the date for the message:'); break;
                case 3: form[x].setAttribute('placeholder','Enter your name:'); break;
                case 4: form[x].setAttribute('placeholder','Enter your phone number:'); break;
                case 5: form[x].setAttribute('placeholder','Enter your e-mail:'); break;
                case 6: break;
                default: alert("fatal error, contact admin"); break;
            }
        }

        window.onorientationchange = function() {
            window.location.reload();
        };

    }
};

function canIresizeIt(){
    if(window.innerWidth > 800)
    initSize('header','section');
}

window.onclick = function(){

};

/*menu mobile*/
function showMenu(){
    var imgclick = document.getElementById('menu-ico');
    var menu = document.getElementById('main-menu');
    var shown = false;

    var hideMenu  = function(){
        if(shown == false){
            menu.style.display = "block";
            shown = true;
        }
        else{
            menu.style.display = "none";
            shown = false;
        }
    };

    imgclick.onclick = hideMenu;
    menu.onclick = hideMenu;
}
