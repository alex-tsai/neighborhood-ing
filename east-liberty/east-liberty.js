var images = ["url('east-liberty_1.jpg')", "url('east-liberty_2.jpg')", "url('east-liberty_3.jpg')", "url('east-liberty_4.jpg')", "url('east-liberty_5.jpg')", "url('east-liberty_6.jpg')"];
var counter = 0;


$(document).ready(function(){
   $("body").css("background-image", images[counter])
   $(".left").click(function(){
   		if(counter > 0) {
   			counter--;
   			$("body").css("background-image", images[counter]);
   			$(".right").css("display", "block");
   		}
   		else{
   			window.location.href = "../beeler/beeler.html";
   		}
   		if(counter == 0){
   			$(".text").css("display", "block")
   		}

    });
   $(".right").click(function(){
   		if(counter < 4) {
   			counter++;
   			$("body").css("background-image", images[counter])
   			$(".text").css("display", "none");
   		}
   		else if(counter < 5) {
   			counter++;
   			$("body").css("background-image", images[counter])
   			$(".right").css("display", "none");
   		}
   			
   		if(counter == 0){
   			$(".text").css("display", "block")
   		}

    });


});