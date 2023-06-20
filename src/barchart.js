// helper function to calculate bar dimensions based on the value of data
function calculateBarDimensions(value)  {
  const { chartHeight, chartWidth } = options;

  const maxDataValue = Math.max(...data);
  const scaledHeight = (value / maxDataValue) * (chartHeight - minBarHeight);
  const barHeight = scaledHeight + minBarHeight;
  const barWidth = `${Math.floor(chartWidth / data.length)}px`;

  return { barHeight, barWidth };
}


// this function takes in an array, an object containing options (chartHeight, chartWidth), and a DOM or jQuert object to append the barchart to
export function drawBarChart(data, options, element) {
  const minBarHeight = 50;

  $(element).empty(); // Clear the contents of .output-div

  for (let value of data) {
    const { barHeight, barWidth } = calculateBarDimensions(value, options);

    const $bar = $("<div></div>", { class: "bar" }).css({
      height: `${barHeight}px`,
      width: barWidth,
    })

    const $label = $("<span></span>", { class: "bar-label" }).text(value).css({
      "line-height": `${barHeight - minBarHeight}px`,
    })

    $bar.append($label);
    $(element).append($bar);
  }
}









