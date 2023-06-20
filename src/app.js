import { inputBoxCount, inputBoxRemover } from "../src/input-box-handler.js";
import { collectAxisLabels, collectData, collectName } from "../src/collectors.js";
import { inputBoxMaker } from "../src/input-box-handler.js";
import { drawBarChart } from "../src/barchart.js";
import { sizeOptions } from "../src/customize.js";

$(document).ready(function () {

  // what happens when you click the generate bar chart button
  $("#generate-button").click(function (event) {
    event.preventDefault();

    const data = collectData();
    const dataNames = collectName();
    const axisNames = collectAxisLabels();
    const options = sizeOptions(data);
    /*
    $("#output-div").html(`<p>${data}</p>`);
    $("#output-div").append(`<p>${dataNames}</p>`);
    $("#output-div").append(`<p>${axisNames}</p>`);
    */
    drawBarChart(data, options, ".output-div");
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




