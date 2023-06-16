export var inputBoxCount = 3;

$(document).ready(function() {


  function generateID(inputBoxCount) {
    return "data-set-" + inputBoxCount;
  }

  $("#new-input-box-button").click(function(event) {
    event.preventDefault();

    inputBoxCount++;
    $("#input-boxes").append(`<li><input type="text" class="data-set" id="${generateID(inputBoxCount)}" placeholder="Dataset ${inputBoxCount}"></input></li>`);

  });
});

