let dataSets = [];
let numberOfInputBoxes = 3;

$(document).ready(function() {
  $("#generate-button").click(function() {
    const dataSet1 = $("#data-set-1").val();
    const dataSet2 = $("#data-set-2").val();
    const dataSet3 = $("#data-set-3").val();
    dataSets.push(dataSet1);
    dataSets.push(dataSet2);
    dataSets.push(dataSet3);
    alert(dataSets);
  });




});
