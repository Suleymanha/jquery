
$(document).ready(function() {
    $( ".button1" ).click(function() {
        
        $(".content1").slideToggle();
        $(".content2").hide();
        $(".content3").hide();
        $(".arrow1").toggleClass("active");
        // $(".arrow2").toggleClass("active");
        // $(".arrow3").toggleClass("deactive");


        // $("p").css({"color":"#8855e0", "background-color":"white"})

   
    });
});

$(document).ready(function() {
    $( ".button2" ).click(function() {
        $(".content2").slideToggle();
        $(".content1").hide();
        $(".content3").hide();
        $(".arrow2").toggleClass("active");
       
        



        


        
        

   
    });
});
$(document).ready(function() {
    $( ".button3" ).click(function() {
        $(".content3").slideToggle();
        $(".content1").hide();
        $(".content2").hide();
        $(".arrow3").toggleClass("active");
       
   
    });
});
