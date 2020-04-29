let inputOne = document.querySelector(".inputOne");
let inputTwo = document.querySelector(".inputTwo");

inputOne.addEventListener("keyup", first);
inputTwo.addEventListener("keyup", second);

function first() {
  localStorage.setItem("first", inputOne.value);
  localStorage.getItem("first");
}

function second() {
  localStorage.setItem("second", inputTwo.value);
  localStorage.getItem("second");
}
