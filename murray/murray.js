var images = ["url('murray_1.jpg')", "url('murray_2.jpg')", "url('murray_3.jpg')", "url('murray_4.jpg')", "url('murray_5.jpg')", "url('murray_6.jpg')", "url('murray_7.jpg')", "url('murray_8.jpg')", "url('murray_9.jpg')"];
var counter = 0;


$(document).ready(function(){
   $("body").css("background-image", images[counter])
   $(".left").click(function(){
   		if(counter > 0) {
   			counter--;
   			$("body").css("background-image", images[counter]);
   		}
   		else{
   			window.location.href = "../beeler/beeler.html";
   		}
   		if(counter == 0){
   			$(".text").css("display", "block")
   		}
         if(counter == 7) {
            $("#inter").css("display", "hidden");
         }

    });
   $(".right").click(function(){
   		if(counter < 8) {
   			counter++;
   			$("body").css("background-image", images[counter])
   			$(".text").css("display", "none");
   		}
   		else{
   			window.location.href = "../east-liberty/east-liberty.html";
   		}
   		if(counter == 0){
   			$(".text").css("display", "block")
   		}
         if(counter == 8) {
            $("#inter").css("display", "block");
         }

    });


});