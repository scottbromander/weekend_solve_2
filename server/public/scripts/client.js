(function CALCULATOR () {
  const NUM_BUTTONS = 9;
  const ZERO_BUTTON = true;

  $(document).ready(function(){
    init();
  });

  function init(){
    appendButtons();
    enable(true);
  }

  function enable(value){
    if(value){
      $("#numButtons").on("click", ".num-button", numClick);
    } else {
      $("#numButtons").off("click", ".num-button", numClick);
    }
  }

  function numClick(){
    console.log($(this).data("numvalue"));
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
})();
