import { inputBoxCount } from "../src/input-box-handler.js";
import { collectData, collectName } from "../src/collectors.js";
import { inputBoxMaker } from "../src/input-box-handler.js";

$(document).ready(function () {

  // what happens when you click the generate bar chart button
  $("#generate-button").click(function (event) {
    event.preventDefault();

    var data = collectData();
    var dataNames = collectName();

    $("#output-div").html(`<p>${data}</p>`);
    $("#output-div").append(`<p>${dataNames}</p>`);
    $("#output-div").append(`<p>${inputBoxCount}</p>`);
  });


  // this function executes when the "Add More Data" button gets pressed, it calls another function that creates an input box
  $("#new-input-box-button").click(function (event) {
    event.preventDefault();

    inputBoxMaker();
  });


});




