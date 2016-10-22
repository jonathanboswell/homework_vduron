function toggleAnswer1() {
  $('#link1').slideToggle();
}
function toggleAnswer2() {
  $('#link2').slideToggle();
}

$('#answer1').hide();
$('#answer2').hide();
$('#link1').click(toggleAnswer1);
$('#link2').click(toggleAnswer2);
