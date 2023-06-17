import { inputBoxCount } from "../src/input-box-maker.js";

$(document).ready(function () {
  $("#generate-button").click(function (event) {
    event.preventDefault();

    var data = collectData();
    var dataNames = collectName();

    $("#output-div").html(`<p>${data}</p>`);
    $("#output-div").append(`<p>${dataNames}</p>`);
  });
});

// function to collect data --- returns an array
function collectData() {
  var dataSets = [];

  $('#input-boxes input.data-set').each(function () {
    var dataSet = $(this).val();
    dataSets.push(dataSet);
  });



  return dataSets;
};

// function to collect the names of the data sets --- returns an array
function collectName() {
  var dataNames = [];

  $('#input-boxes input.data-label').each(function () {
    var dataName = $(this).val();
    dataNames.push(dataName);
  });

  return dataNames;
}



