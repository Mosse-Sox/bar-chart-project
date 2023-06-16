import { inputBoxCount } from "../src/input-box-maker.js";

$(document).ready(function () {
  $("#generate-button").click(function (event) {
    event.preventDefault();

    console.log("Button Clicked!");
    console.log("inputBoxCount:", inputBoxCount);
    var dataSets = [];
    $('#input-boxes input.data-set').each(function () {
      var dataSet = $(this).val();
      dataSets.push(dataSet);
    });

    var output = dataSets.join(", ");
    $("#output-div").html(`<p>${output}</p>`);
  });
});






