$(document).ready(function() {
    $("#nav-toggle").click(function() {
        $(".nav").toggleClass("open-menu");
    });


$(".swipe-area").swipe({
    swipeStatus:function(event, phase, direction, distance, duration, fingers)
        {
            if (phase=="move" && direction =="right") {
                 $(".nav").addClass("open-menu");
                 return false;
            }
            if (phase=="move" && direction =="left") {
                 $(".nav").removeClass("open-menu");
                 return false;
            }
        }
});

}); 