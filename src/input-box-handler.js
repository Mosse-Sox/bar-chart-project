export var inputBoxCount = 3;

function generateDataID(inputBoxCount) {
  return "data-set-" + inputBoxCount;
}

function generateLabelID(inputBoxCount) {
  return "data-set-" + inputBoxCount + "-label";
}

export function inputBoxMaker() {
  if (inputBoxCount < 10) {
    inputBoxCount++;

    $("#input-boxes").append(`<li>
      <input type="text" class="data-set" id="${generateDataID(inputBoxCount)}" placeholder="Dataset ${inputBoxCount}"></input>
      <input type="text" class="data-label" id="${generateLabelID(inputBoxCount)}" placeholder="Name of Data"></input>
    </li>`);
  } else {
    alert("You can't add anymore.");
  }
}

export function inputBoxRemover() {

  if (inputBoxCount > 1) {
    inputBoxCount--;
    const dataIDToRemove = generateDataID(inputBoxCount + 1);
    const labelIDToRemove = generateLabelID(inputBoxCount + 1);

    $(`#${dataIDToRemove}, #${labelIDToRemove}`).closest("li").remove();
  } else {
    alert("You can't remove anymore.");
  }
}



