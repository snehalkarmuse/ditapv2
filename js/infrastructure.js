/**
 * Created by Nitin on 20/07/2015.
 */
$(document).ready(function() {
    if ($(window).width() < 768) {

        var autoSwitch = true;
        var autoSwitchSpeed=5000;

        $(".slide").first().addClass("active");
        $(".slide").hide();
        $(".slide").first().show();

        if (autoSwitch == true) {
            var timer = setInterval(nextSlide, autoSwitchSpeed);
        }
       function nextSlide() {
            //remove active class from first slide and add old active class
            $(".active").removeClass("active").addClass("oldActive");
            //check weather slide is last, if yes then go on first slide and add active class else go on next one add active class.
            if ($(".oldActive").is(":last-child")) {
                $(".slide").first().addClass("active");

            } else {
                $(".oldActive").next().addClass("active");

            }
            //remove old active class so that it will check next time in if loop
            $(".oldActive").removeClass("oldActive");
            //fadeout  slide and fade in active slide.
            $(".slide").fadeOut(autoSwitchSpeed);
            $(".active").fadeIn(autoSwitchSpeed);

        }

    }

});


