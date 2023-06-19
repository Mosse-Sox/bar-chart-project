export function drawBarChart(data, options) {
  var chartHeight = options.chartHeight;
  var chartWidth = options.chartWidth;
  var minBarHeight = 50; // Minimum height in pixels

  var barWidth = Math.floor(chartWidth / data.length) + "px";
  var barHeight = chartHeight - minBarHeight; // Calculate the available height for the bars

  $(".output-div").html("");

  $.each(data, function (index, value) {

    // Calculate the bar height as a fraction of the maximum value
    var scaledHeight = (value / Math.max(...data)) * barHeight;

    var $bar = $("<div></div>");
    $bar.addClass("bar");
    $bar.css("height", scaledHeight + minBarHeight + "px"); // Set the bar height
    $bar.css("width", barWidth);

    var $label = $("<span></span>");
    $label.addClass("bar-label");
    $label.text(value);
    $bar.append($label);

    $(".output-div").append($bar);
  })
}








