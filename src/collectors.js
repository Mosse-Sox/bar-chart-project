// function to collect data --- returns an array
export function collectData() {
  var dataSets = [];

  $('#input-boxes input.data-set').each(function () {
    var dataSet = $(this).val();
    dataSets.push(dataSet);
  });



  return dataSets;
}

// function to collect the names of the data sets --- returns an array
export function collectName() {
  var dataNames = [];

  $('#input-boxes input.data-label').each(function () {
    var dataName = $(this).val();
    dataNames.push(dataName);
  });

  return dataNames;
}