// let inputOne = document.querySelector(".inputOne");
// let inputTwo = document.querySelector(".inputTwo");

// inputOne.addEventListener("keyup", first);
// inputTwo.addEventListener("keyup", second);

// function first() {
//   localStorage.setItem("first", inputOne.value);
//   localStorage.getItem("first");
//   a = localStorage.getItem("first");
// }

// function second() {
//   localStorage.setItem("second", inputTwo.value);
//   localStorage.getItem("second");
//   b = localStorage.getItem("second");
// }

// window.onload = function ready() {
//   inputOne.value = localStorage.getItem("first");
//   inputTwo.value = localStorage.getItem("second");
// };

// ===================================================

let inputIn = document.querySelector(".inputIn");
let labelOut = document.querySelector(".labelOut");

inputIn.addEventListener("keyup", One);

function One() {
  localStorage.setItem("first", inputIn.value);
  labelOut.innerHTML = localStorage.getItem("first");
}
