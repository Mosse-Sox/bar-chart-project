export function drawBarChart(data) {

  $.each(data, function (index, value) {
    var barWidth = value + "px";

    var $bar = $("<div></div>");
    $bar.addClass("bar");
    $bar.css("width", barWidth);


    $("#output-div").append($bar);
  })

}
