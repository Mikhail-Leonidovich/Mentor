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

  let elementsInp = document.querySelectorAll(".form > input");
  let elementsContInp = document.querySelectorAll(".content > p > input");
  let elementsContLab = document.querySelectorAll(".content > p > label");
  let i = 0;

  for (let elemInp of elementsInp) {
    let a = localStorage.getItem(elemInp.name);
    let b = localStorage.getItem(elemInp);
    for (; i < elementsContInp.length; ) {
      elementsContInp[i].value = a;
      elementsContLab[i].innerHTML = elemInp.name;
      break;
    }
    i++;
  }
});
