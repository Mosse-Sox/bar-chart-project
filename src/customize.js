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


  options.chartWidth = width;
  options.chartHeight = 500; // Set the chart height to a fixed value of 500px

  return options;
}

/* in developement --- currently not working
export function valueLabelAlignmentOption(alignment) {
  const selectedOption = alignment;

  $(".bar-label").each(function () {
    const $bar = $(this).closest(".bar");
    const barHeight = $bar.height();

    switch (selectedOption) {
      case "top":
        $(this).css("top", `${barHeight + $(this).outerHeight() }px`);
        break;
      case "bottom":
        $(this).css("top", `${barHeight - $(this).outerHeight()}px`);
        break;
      case "center":
        $(this).css({
          "display": "flex",
          "align-items": "center",
          "justify-content": "center"
        })
        break;
    }
  })
}*/

