let inputInOne = document.querySelector(".inputInOne");
let inputInTwo = document.querySelector(".inputInTwo");
let inputInThree = document.querySelector(".inputInThree");
let form = document.querySelector(".form");

inputInOne.addEventListener("keyup", onOperationButtonClick);
inputInTwo.addEventListener("keyup", onOperationButtonClick);
inputInThree.addEventListener("keyup", onOperationButtonClick);

function onOperationButtonClick(eventObject) {
  let clickElementName = eventObject.currentTarget.name;
  let clickElementValue = eventObject.currentTarget.value;
  localStorage.setItem(clickElementName, clickElementValue);
}

window.addEventListener("load", () => {
  let elements = document.querySelectorAll("input");
  for (let elem of elements) {
    let a = localStorage.getItem(elem.name);
    elem.value = a;
  }
});

form.addEventListener("submit", (e) => {
  let vision = document.querySelector(".content");
  vision.style.visibility = "visible";
  e.preventDefault();

  let elementsInp = document.querySelectorAll("input");
  let elementsLab = document.querySelectorAll("label");
  let i = 0;

  for (let elemInp of elementsInp) {
    let a = localStorage.getItem(elemInp.name);
    for (; i < elementsLab.length; ) {
      elementsLab[i].innerHTML = a;
      break;
    }
    i++;
  }
});
