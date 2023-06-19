// function to collect data --- returns an array
export function collectData() {
  var dataSets = [];
  var missingData = false;

  $('#input-boxes input.data-set').each(function () {
    if ($(this).val() !== "") {
      var dataSet = $(this).val();
      dataSets.push(dataSet);
    } else {
      missingData = true;
    }
  })

  if (missingData) {
    alert("Missing Data -- Dataset value");
  }

  return dataSets;
}

// function to collect the names of the data sets --- returns an array
export function collectName() {
  var dataNames = [];
  var missingData = false;

  $('#input-boxes input.data-label').each(function () {
    if ($(this).val() !== "") {
      var dataName = $(this).val();
      dataNames.push(dataName);
    } else {
      missingData = true;
    }
  })

  if (missingData) {
    alert("Missing data -- Name of Data");
  }

  return dataNames;
}


// a function to collect the axis names --- returns an array
export function collectAxisLabels() {
  var xAxis = $(".x-label").val();
  var yAxis = $(".y-label").val();

  var missingData = false;

  if (xAxis !== "" && yAxis !== "") {
    var axisLabels = [ xAxis, yAxis ];
  } else {
    missingData = true;
  }

  if (missingData) {
    alert("Missing label -- Axis Label");
  }

  return axisLabels;
}
