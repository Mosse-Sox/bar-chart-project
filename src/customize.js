var options = {
  chartHeight: 0,
  chartWidth: 0
};

export function sizeOptions(data) {
  var maxWidth = 600; // Maximum width for the chart
  var minBarWidth = 50; // Minimum width of each bar

  var barWidth = Math.floor(maxWidth / data.length); // Calculate the bar width based on available space

  if (barWidth < minBarWidth) {
    barWidth = minBarWidth; // Set a minimum width for the bars
  }

  var width = barWidth * data.length; // Calculate the total width based on the bar width and number of data points
  var largestValue = Math.max(...data);

  options.chartWidth = width;
  options.chartHeight = 500; // Set the chart height to a fixed value of 500px

  return options;
}
