let options = {
  chartHeight: 0,
  chartWidth: 0
};

export function sizeOptions(data) {
  const maxWidth = 600; // Maximum width for the chart
  const minBarWidth = 50; // Minimum width of each bar

  const barWidth = Math.floor(maxWidth / data.length); // Calculate the bar width based on available space

  if (barWidth < minBarWidth) {
    barWidth = minBarWidth; // Set a minimum width for the bars
  }

  const width = barWidth * data.length; // Calculate the total width based on the bar width and number of data points
  const largestValue = Math.max(...data);

  options.chartWidth = width;
  options.chartHeight = 500; // Set the chart height to a fixed value of 500px

  return options;
}
