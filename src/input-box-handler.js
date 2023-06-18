export var inputBoxCount = 3;

function generateDataID(inputBoxCount) {
  return "data-set-" + inputBoxCount;
}

function generateLabelID(inputBoxCount) {
  return "data-set-" + inputBoxCount + "-label";
}

export function inputBoxMaker() {
  inputBoxCount++;

  $(`<li>
      <input type="text" class="data-set" id="${generateDataID(inputBoxCount)}" placeholder="Dataset ${inputBoxCount}"></input>
      <input type="text" class="data-label" id="${generateLabelID(inputBoxCount)}" placeholder="Name of Data"></input>
    </li>`).insertBefore("#last-list-item");
};





