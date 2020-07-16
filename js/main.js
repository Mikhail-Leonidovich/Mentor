let inputInOne = document.querySelector(".inputInOne");
let inputInTwo = document.querySelector(".inputInTwo");
let inputInThree = document.querySelector(".inputInThree");
let form = document.querySelector(".form");
let btn = document.querySelector(".button-1");
let btnDisplay = document.querySelector(".button-2");

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
  }
});

btnDisplay.addEventListener("click", () => {
  form.classList.toggle("form-mod");
});

/* ==============
      AJAX 
================ */

let textResponse = document.querySelector("#response");
let btnResponse = document.querySelector("button[name=btnResponse]");
const requestUrl = "http://example.loc/test.json";
const xhr = new XMLHttpRequest();
let ajaxList = document.querySelector(".ajax-list");

function funcGetXhrResponse() {
  xhr.open("GET", requestUrl);
  xhr.responseType = "json";
  xhr.onload = () => {
    let arrayOfXhr = xhr.response;

    arrayOfXhr.forEach(function (item, i, arrayOfXhr) {
      let xhrObj = arrayOfXhr[i];
      let ajaxListElem = document.createElement("li");
      ajaxList.append(ajaxListElem);
      ajaxListElem.innerHTML = xhrObj.title;
    });
  };
  xhr.send();
}

btnResponse.addEventListener("click", (e) => {
  e.preventDefault();
  funcGetXhrResponse();
});

/* ==============
    AJAX - END
================ */
