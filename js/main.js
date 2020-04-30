let inputOne = document.querySelector(".inputOne");
let inputTwo = document.querySelector(".inputTwo");

inputOne.addEventListener("keyup", listenerFunction);
inputTwo.addEventListener("keyup", listenerFunction);

let onlyForm = document.forms.onlyForm;
let firstInput = onlyForm.elements.first;
let secondInput = onlyForm.elements.second;

function listenerFunction() {
  localStorage.setItem("a", firstInput.value);
  localStorage.setItem("b", secondInput.value);
}

// =========================================

window.onload = function () {
  inputOne.value = localStorage.getItem("a");
  inputTwo.value = localStorage.getItem("b");
};
