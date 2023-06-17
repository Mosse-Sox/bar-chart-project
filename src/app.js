// import { inputBoxCount } from "../src/input-box-maker.js";
import { collectData, collectName } from "../src/collectors.js";

$(document).ready(function () {
  $("#generate-button").click(function (event) {
    event.preventDefault();

    var data = collectData();
    var dataNames = collectName();

    $("#output-div").html(`<p>${data}</p>`);
    $("#output-div").append(`<p>${dataNames}</p>`);
  });
});




