const inputInOne = document.querySelector(".inputInOne");
const inputInTwo = document.querySelector(".inputInTwo");
const inputInThree = document.querySelector(".inputInThree");
const form = document.querySelector(".form");
const btn = document.querySelector(".button-1");
const btnDisplay = document.querySelector(".button-2");

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
    if (a != "") {
      let date = new Date();
      let minutes = Number(date.getMinutes());
      elem.value = a + minutes;
      a = localStorage.setItem(elem.name, elem.value);
    } else continue;
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

btn.addEventListener("click", () => {
  let elements = document.querySelectorAll("input");
  for (elem of elements) {
    localStorage.removeItem(elem.name);
    elem.value = "";
  }
});

btnDisplay.addEventListener("click", () => {
  form.classList.toggle("form-mod");
});

/* ==============
      AJAX 
================ */

const btnResponse = document.querySelector("button[name=btnResponse]");
const ajaxList = document.querySelector(".ajax-list");
const responseUrl = "http://example.loc/test.json";
let content = null;

async function getAjaxResponse() {
  let response = await fetch(responseUrl);
  content = await response.json();

  function getFromArray(content) {
    content.forEach(function (item, i, content) {
      let contentObj = item;
      let ajaxListElem = document.createElement("li");
      ajaxList.append(ajaxListElem);
      ajaxListElem.innerHTML = contentObj.title;
    });
  }
  getFromArray(content);
}

btnResponse.addEventListener("click", () => {
  getAjaxResponse();
});

/* ==============
    AJAX - END
================ */
