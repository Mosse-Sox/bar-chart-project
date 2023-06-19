import { inputBoxCount, inputBoxRemover } from "../src/input-box-handler.js";
import { collectAxisLabels, collectData, collectName } from "../src/collectors.js";
import { inputBoxMaker } from "../src/input-box-handler.js";

$(document).ready(function () {

  // what happens when you click the generate bar chart button
  $("#generate-button").click(function (event) {
    event.preventDefault();

    var data = collectData();
    var dataNames = collectName();
    var axisNames = collectAxisLabels();

    $("#output-div").html(`<p>${data}</p>`);
    $("#output-div").append(`<p>${dataNames}</p>`);
    $("#output-div").append(`<p>${axisNames}</p>`);
  })


  // this function executes when the "Add More Data" button gets pressed, it calls another function that creates an input box
  $("#new-input-box-button").click(function (event) {
    event.preventDefault();
    inputBoxMaker();
  })

  // this function removes a dataset and data name/label row if there are more then one
  $("#remove-button").click(function (event) {
    event.preventDefault();
    inputBoxRemover();
  })
})




