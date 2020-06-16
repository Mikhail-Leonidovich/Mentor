let btnNameOne = document.querySelector(".buttonOne");
let btnNameTwo = document.querySelector(".buttonTwo");

function onOperationButtonClick(eventObject) {
  let clickElement = eventObject.currentTarget;
  let btnName = clickElement.name;
  console.log(btnName);
}

btnNameOne.addEventListener("click", onOperationButtonClick);
btnNameTwo.addEventListener("click", onOperationButtonClick);
