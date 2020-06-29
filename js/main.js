let inputInOne = document.querySelector(".inputInOne");
let inputInTwo = document.querySelector(".inputInTwo");
let inputInThree = document.querySelector(".inputInThree");

inputInOne.addEventListener("keyup", onOperationButtonClick);
inputInTwo.addEventListener("keyup", onOperationButtonClick);
inputInThree.addEventListener("keyup", onOperationButtonClick);

function onOperationButtonClick(eventObject) {
  // eventObject.preventDefault();
  let clickElementName = eventObject.currentTarget.name;
  if (clickElementName == "inputDataOne") {
    localStorage.setItem("a", clickElementName);
  } else if (clickElementName == "inputDataTwo") {
    localStorage.setItem("b", clickElementName);
  } else if (clickElementName == "inputDataThree") {
    localStorage.setItem("c", clickElementName);
  }
}

window.addEventListener("onload", () => {
  inputInOne.value = localStorage.getItem("a");
  inputInTwo.value = localStorage.getItem("b");
  inputInThree.value = localStorage.getItem("c");
});
