
/**
 * Created by Nitin on 02/07/2015.
 */
$(document).ready(function(){
     //mouse enter grab varibles and add html and overlay class. fde in the title and description
$("ul#gallery li").on("mouseenter",function(){
    var imageName;
    var title=$(this).children().data("title");
    var desc=$(this).children().data("desc");
    var imageId=$(this).children().data("id");
    console.log(imageId);
    if(imageId==1){
        imageName=$("#gallery img").attr("src");
        console.log(imageName);
    }
    else{
        var src=$("#gallery img").attr("src");
        console.log("src"+src);
        imageName=src.replace("image/CMKariappa.jpg","image/RajuKariappa.jpg");
        console.log("imageName "+imageName);
    }
    if(title == null){
        title="";
    }
    if(desc== null){
        desc="";
    }
    $(this).append("<div class='overlay'></div>");
    var overlay=$(this).children(".overlay");

    overlay.html("<h3>"+title+"</h3><p><img class='overlayImage' src="+imageName+"></p><p class='overlayDesc'>"+desc+"</p>");
    overlay.fadeIn(800);
    $(".gridLeft").css("opacity",".2");
});

$("ul#gallery li").on("mouseleave",function() {
    $(this).append("<div class='overlay'></div>");
    var overlay=$(this).children(".overlay");
    overlay.fadeOut(500);
    $(".gridLeft").css("opacity","1");
});
})