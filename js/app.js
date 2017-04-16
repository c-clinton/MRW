$(document).foundation();


(function(){
	"use strict";

var images = 0;
carousel();
console.log("hey");

function carousel() {

    var slide = document.querySelectorAll(".imgSlider");
    for (var i = 0; i < slide.length; i++){
       slide[i].style.display = "none";
       }
   images ++;

    if (images > slide.length) {images = 1;}
	{
   slide[images-1].style.display = "block";
    setTimeout(carousel, 2000); // Change image every 2 seconds
	}
}

}());
