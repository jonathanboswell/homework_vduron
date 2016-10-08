//Implement the red light using jQuery. Don't forget to add the script tags.
/*
  Play with:
  .click
  .slideToggle() 
  .hide()
  .show()
  .slideUp()
  .slideDown()
  .children()
  .attr()

  For Example:
*/
  
  $(function(){
    $("#answer1").hide();
    $("#read-more-button").click(function(){
        console.log('read more button');
        $("#answer1").slideToggle();
    });

    $("#answer2").hide();
    $("#learn-more-button").click(function(){
        console.log("learn more button");
        $("#answer2").slideToggle();
    });

    $("#answer3").hide();
    $("button").click(function(){
        $("#answer3").slideToggle();
    });
  });