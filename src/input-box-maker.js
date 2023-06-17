export var inputBoxCount = 3;

$(document).ready(function() {


  function generateDataID(inputBoxCount) {
    return "data-set-" + inputBoxCount;
  }

  function generateLabelID(inputBoxCount) {
    return "data-set-" + inputBoxCount + "-label";
  }

  $("#new-input-box-button").click(function(event) {
    event.preventDefault();

    inputBoxCount++;
    $("#input-boxes").append(`<li>
    <input type="text" class="data-set" id="${generateDataID(inputBoxCount)}" placeholder="Dataset ${inputBoxCount}"></input>
    <input type="text" class="data-label" id="${generateLabelID(inputBoxCount)}" placeholder="Name of Data"></input>
    </li>`);

  });
});

