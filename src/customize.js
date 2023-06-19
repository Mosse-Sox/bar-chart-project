var options = {
  chartHeight: 0,
  chartWidth: 0
};

export function sizeOptions (data) {
  var height = data.length;
  var largestValue = 0;

  for(let element of data) {
    if (element > largestValue) {
      largestValue = element;
    }
  }


  for(let value of data) {
    if (largestValue < 100) {
      value += 100;
    }
  }



  options.chartWidth = largestValue + 50;
  options.chartHeight = height + 50;

  return options;
}
