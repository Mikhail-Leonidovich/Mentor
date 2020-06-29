let inputInOne = document.querySelector(".inputInOne");
let inputInTwo = document.querySelector(".inputInTwo");
let inputInThree = document.querySelector(".inputInThree");

inputInOne.addEventListener("keyup", onOperationButtonClick);
inputInTwo.addEventListener("keyup", onOperationButtonClick);
inputInThree.addEventListener("keyup", onOperationButtonClick);

function onOperationButtonClick(eventObject) {
  let clickElementName = eventObject.currentTarget.name;
  let clickElementValue = eventObject.currentTarget.value;
  localStorage.setItem(clickElementName, clickElementValue);
}

window.onload = () => {
  inputInOne.value = localStorage.getItem("inputDataOne");
  inputInTwo.value = localStorage.getItem("inputDataTwo");
  inputInThree.value = localStorage.getItem("inputDataThree");
};
