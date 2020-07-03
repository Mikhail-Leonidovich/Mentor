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
    let a = Number(localStorage.getItem(elem.name));

    let date = new Date();
    let minutes = Number(date.getMinutes());
    elem.value = a + minutes;
  }
  for (let elem of elements) {
    let b = Number(localStorage.getItem(elem.name));

    let newSum = b + Number(elem.value);
    b = localStorage.setItem(elem.name, newSum);
  }
});

form.addEventListener("submit", (e) => {
  let date = document.querySelectorAll(".form > input");
  let text = document.getElementById("text");

  for (elem of date) {
    let p = document.createElement("p");
    let a = document.createTextNode(elem.name + ": ");
    let b = document.createTextNode(elem.value);
    text.appendChild(p);
    p.appendChild(a);
    p.appendChild(b);
  }
  e.preventDefault();
});

// form.addEventListener("submit", (e) => {
//   let vision = document.querySelector(".content");
//   vision.style.visibility = "visible";
//   e.preventDefault();

// let elementsInp = document.querySelectorAll(".form > input");
// let elementsContInp = document.querySelectorAll(".content > p > input");
// let elementsContLab = document.querySelectorAll(".content > p > label");
// let i = 0;

// for (let elemInp of elementsInp) {
//   let a = localStorage.getItem(elemInp.name);
//   let b = localStorage.getItem(elemInp);
//   for (; i < elementsContInp.length; ) {
//     elementsContInp[i].value = a;
//     elementsContLab[i].innerHTML = elemInp.name;
//     break;
//   }
//   i++;
// }
// });
