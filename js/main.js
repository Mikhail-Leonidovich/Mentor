let inputIn = document.querySelector(".inputIn");

inputIn.addEventListener("keyup", onOperationButtonClick);

function onOperationButtonClick(eventObject) {
  let clickElementName = eventObject.currentTarget.name;
  if (clickElementName !== "") {
    localStorage.setItem("a", inputIn.value);
  } else {
    console.log("Вы не ввели значение");
  }
}
