$(document).ready(function(){
   animateScroll();
});

function animateScroll()
    {
    $('#psdBar').animate({
    width: '100%'
}, {
    duration: 3000,
    easing: 'linear',
    complete:function(){ $(this).css("width","0%");
   }		
});
animateScroll();
}