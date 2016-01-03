/**
 * Created by Nitin on 24/07/2015.
 */
$(document).ready(function(){
    $(".ulHeader li").on("click",function() {
        var dataId = $(this).data("id");
        console.log(dataId);
        doOverlayOpen(dataId);
        return false;
    });




    var isOpen = false;
//function to display the box
    function showOverlayBox(id) {
        console.log("show box");
        //if box is not set to open then don't do anything
        if( isOpen == false ) return;
        // set the properties of the overlay box, the left and top positions
        $('#'+id).css({
            'display':'block',
            'left':'12%',
            'top':'30%',
            position:'absolute'

        });

        // set the window background for the overlay. i.e the body becomes darker
        $('.bgCover').css({
            display:'block',
            width: $(window).width(),
            height:$(window).height()
        });
    }
    function doOverlayOpen(id) {
        console.log(" open");
        //set status to open
        isOpen = true;
        showOverlayBox(id);
        $('.bgCover').css({opacity:0}).animate( {opacity:0.5, backgroundColor:'#000'} );
        // dont follow the link : so return false.
        return false;
    }
    function doOverlayClose() {
        //set status to closed
        isOpen = false;
        $('.overlayBox').css( 'display', 'none' );
        // now animate the background to fade out to opacity 0
        // and then hide it after the animation is complete.
        $('.bgCover').animate( {opacity:0}, null, null, function() { $(this).hide(); } );
    }
// if window is resized then reposition the overlay box
    $(window).bind('resize',showOverlayBox);
// activate when the link with class launchLink is clicked
//    $('a.launchLink').click( doOverlayOpen );
//close it when closeLink is clicked
    $('a.closeLink').click( doOverlayClose );


});