import { sizeOptions } from "../src/customize.js";

export function drawBarChart(data) {

  var sizing = sizeOptions(data);

  $.each(data, function (index, value) {
    var barHeight = value + "px";

    var $bar = $("<div></div>");
    $bar.addClass("bar");
    $bar.css("height", barHeight);


    $(".output-div").append($bar);
  })

  console.log(sizing);
}
