// function to collect data --- returns an array
export function collectData() {
  var dataSets = [];


  $('#input-boxes input.data-set').each(function () {
    if ($(this).val() !== "") {
      var dataSet = $(this).val();
      dataSets.push(dataSet);
    } else {
      alert("Missing data");
    }
  })



  return dataSets;
}

// function to collect the names of the data sets --- returns an array
export function collectName() {
  var dataNames = [];

  $('#input-boxes input.data-label').each(function () {
    if ($(this).val() !== "") {
      var dataName = $(this).val();
      dataNames.push(dataName);
    } else {
      alert("Missing data");
    }
  })

  return dataNames;
}


// a function to collect the axis names --- returns an array
export function collectAxisLabels() {
  var xAxis = $(".x-label").val();
  var yAxis = $(".y-label").val();

  if (xAxis !== "" && yAxis !== "") {
    var axisLabels = [ xAxis, yAxis ];
  } else {
    alert("Missing label");
  }

  return axisLabels;
}
