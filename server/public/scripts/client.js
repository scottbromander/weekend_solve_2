const NUM_BUTTONS = 9;
const ZERO_BUTTON = true;

$(document).ready(function(){
  init();
});

function init(){
  appendButtons();
}

function enable(value){
  if(value){

  } else {

  }
}

function appendButtons(){
  if(ZERO_BUTTON){
    createNumButtons(0);
  }
  for(var i = 1; i <= NUM_BUTTONS; i++){
    createNumButtons(i);
  }
}

function createNumButtons(value){
  $("#numButtons").append("<button class='num-button'>" + value + "</button>");
  var $el = $("#numButtons").children().last();
  $el.data("numvalue", value);
}
