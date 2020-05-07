let inputOne = document.querySelector(".inputOne");
let inputTwo = document.querySelector(".inputTwo");
let button = document.querySelector(".btn-1");

let onlyForm = document.querySelector(".only-form");
let anotherForm = document.querySelector(".second-form");

inputOne.addEventListener("keyup", () => {
  localStorage.setItem("a", inputOne.value);
});
inputTwo.addEventListener("keyup", () => {
  localStorage.setItem("b", inputTwo.value);
});

onlyForm.addEventListener("onsubmit", (e) => {
  e.preventDefault();
  if (inputOne.value === "Михаил" && inputTwo.value === "Юркевич") {
    anotherForm.style.display = "block";
  } else {
    anotherForm.style.display = "none";
  }
});

// need to fix
window.onload = () => {
  inputOne.value = localStorage.getItem("a");
  inputTwo.value = localStorage.getItem("b");
};
