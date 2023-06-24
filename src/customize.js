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


export function valueLabelAlignmentOption(alignment) {
  const selectedOption = alignment;

  $(".bar-label").each(function () {
    const $bar = $(this).closest(".bar");
    const barWidth = $bar.width();
    const labelWidth = $(this).outerWidth();

    switch (selectedOption) {
      case "top":
        $(this).css({
          top: "0px",
          left: "50%",
          transform: `translateX(-50%)`
        });
        break;
      case "bottom":
        $(this).css({
          top: `${$bar.height() - $(this).outerHeight()}px`,
          left: "50%",
          transform: `translateX(-50%)`
        });
        break;
      case "center":
        $(this).css({
          top: `${($bar.height() - $(this).outerHeight()) / 2}px`,
          left: "50%",
          transform: `translateX(-50%)`
        });
        break;
    }
  })
}
