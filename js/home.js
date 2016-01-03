/**
 * Created by Nitin on 13/05/2015.
 */
$(document).ready(function(){
    var speed=500;
    var autoSwitch=true;
    var auto_switch_speed=5000;
    var hover_pause=1;
    //take the first slide.
    $(".slide").first().addClass("active");
    //Hide rest of the slide.
    $(".slide").hide();
    //show slide who got active class.
    $(".active").show();
    //click on next button
    $("#next").click(function(){
        //call next function
        nextSlide();

    })
    //click on previous button
    $("#prev").click(function(){
        prevSlide();
    })
    //rotate slider with regular interval
    if(autoSwitch==true){
        var timer= setInterval(nextSlide,auto_switch_speed);
    }
    //next  function.
    function nextSlide(){
        //remove active class from first slide and add old active class
        $(".active").removeClass("active").addClass("oldActive");
        //check weather slide is last, if yes then go on first slide and add active class else go on next one add active class.
        if($(".oldActive").is(":last-child")){
            $(".slide").first().addClass("active");

        }else{
            $(".oldActive").next().addClass("active");

        }
        //remove old active class so that it will check next time in if loop
        $(".oldActive").removeClass("oldActive");
        //fadeout  slide and fade in active slide.
        $(".slide").fadeOut(speed);
        $(".active").fadeIn(speed);



    }

    function prevSlide(){
        //remove active class and add old active class.
        $(".active").removeClass("active").addClass("oldActive");
        //check weather current slide is first one if yes then go on last slide add active class. else go on previous slide and add active class.
        if($(".oldActive").is(":first-child")){
            $(".slide").last().addClass("active");
        }else{
            $(".oldActive").prev().addClass("active");
        }
        //remove old active class.so it will refer in if loop.
        $(".oldActive").removeClass("oldActive");
        //fade out current slide and fade in slide with active class.
        $(".slide").fadeOut(speed);
        $(".active").fadeIn(speed);
    }


//    if(hover_pause == 1){
//        //when hovered over the list
//        $('.slide').hover(function(){
//            //stop the interval
//            clearInterval(auto_switch_speed);
//        },function() {
//            //and when mouseout start it again
//            timer= setInterval(nextSlide,auto_switch_speed);
//
//        });
//
//    }

    $(".slicknav_nav").on("mouseenter",function(){

        $(this).append("<div class='overlayMenu'></div>");
        var overlay=$(this).children(".overlayMenu");

        overlay.fadeIn(800);
        $(".container").css("opacity",".2");
    });

    $(".slicknav_nav").on("mouseleave",function() {
        $(this).append("<div class='overlayMenu'></div>");
        var overlay=$(this).children(".overlayMenu");
        overlay.fadeOut(500);
        $(".container").css("opacity","1");
    });

})