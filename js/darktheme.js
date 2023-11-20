console.log("Hello we start dark theme");
$(document).ready(function(){
  var toggle = false;
  $('.toggle-button').click(function(){
    console.log('here');
    toggle = !toggle;
  })
})