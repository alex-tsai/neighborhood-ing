var images = ["url('beeler_1.jpg')", "url('beeler_2.jpg')", "url('beeler_3.jpg')", "url('beeler_4.jpg')"];
var counter = 0;


$(document).ready(function(){
   $("body").css("background-image", images[counter])
   $(".left").click(function(){
   		if(counter > 0) {
   			counter--;
   			$("body").css("background-image", images[counter]);
   		}
   		else{

   		}
   		if(counter == 0){
   			$(".text").css("display", "block")
   		}

    });
   $(".right").click(function(){
   		if(counter < 3) {
   			counter++;
   			$("body").css("background-image", images[counter])
   			$(".text").css("display", "none");
   		}
   		else{
   			window.location.href = "../murray/murray.html";
   		}
   		if(counter == 0){
   			$(".text").css("display", "block")
   		}

    });


});