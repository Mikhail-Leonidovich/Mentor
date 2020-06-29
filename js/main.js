let inputInOne = document.querySelector(".inputInOne");
let inputInTwo = document.querySelector(".inputInTwo");
let inputInThree = document.querySelector(".inputInThree");

inputInOne.addEventListener("keyup", onOperationButtonClick);
inputInTwo.addEventListener("keyup", onOperationButtonClick);
inputInThree.addEventListener("keyup", onOperationButtonClick);

function onOperationButtonClick(eventObject) {
  let clickElementName = eventObject.currentTarget.name;
  if (
    clickElementName == "inputDataOne" ||
    clickElementName == "inputDataTwo" ||
    clickElementName == "inputDataThree"
  ) {
    localStorage.setItem("a", clickElementName);
  } else {
    console.log("Вы не ввели значение");
  }
}
localStorage.removeItem("a");
