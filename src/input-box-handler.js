export let inputBoxCount = 3;

// this function returns a numbered ID for dataset inputboxes
function generateDataID(inputBoxCount) {
  return "data-set-" + inputBoxCount;
}

// this function returns a numbered ID for dataset labels/names
function generateLabelID(inputBoxCount) {
  return "data-set-" + inputBoxCount + "-label";
}

// this function adds new input boxes for datasets and their labels up to 10 boxes on the page
export function inputBoxMaker() {
  if (inputBoxCount < 10) {
    inputBoxCount++;

    $("#input-boxes").append(`<li>
      <label for="data-set">Dataset ${inputBoxCount}</label>
      <input type="number" class="data-set" id="${generateDataID(inputBoxCount)}" min="0" placeholder="Value"></input>
      <input type="text" class="data-label" id="${generateLabelID(inputBoxCount)}" placeholder="Name of Data"></input>
    </li>`);
  } else {
    alert("You can't add anymore.");
  }
}

// this function removes input boxes unless there is only one box on the page
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



