$(document).ready(function() {
  var inputBoxCount = 3;

  function generateID(inputBoxCount) {
    return "data-set-" + inputBoxCount;
  }

  $("#new-input-box-button").click(function() {
    event.preventDefault();

    inputBoxCount++;
    $("#input-boxes").append(`<li><input type="text" class="data-set" id="${generateID(inputBoxCount)}" placeholder="Dataset ${inputBoxCount}"></input></li>`);

  });
});

