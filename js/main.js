let inputOne = document.querySelector(".inputOne");
let inputTwo = document.querySelector(".inputTwo");
let button = document.querySelector(".btn-1");

let onlyForm = document.forms.onlyForm;
let firstInput = onlyForm.elements.first;
let secondInput = onlyForm.elements.second;
let anotherForm = document.forms.anotherForm;

inputOne.addEventListener("keyup", () => {
  localStorage.setItem("a", firstInput.value);
});
inputTwo.addEventListener("keyup", () => {
  localStorage.setItem("b", secondInput.value);
});

onlyForm.addEventListener("onsubmit", (e) => {
  e.preventDefault();
  if (inputOne.value === "Михаил" && inputTwo.value === "Юркевич") {
    anotherForm.style.display = "block";
  } else {
    anotherForm.style.display = "none";
  }
});

window.addEventListener("onload", () => {
  inputOne.value = localStorage.getItem("a");
  inputTwo.value = localStorage.getItem("b");
});
