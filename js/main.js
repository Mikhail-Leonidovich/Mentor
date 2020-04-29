let inputIn = document.querySelector(".inputIn");
let labelOut = document.querySelector(".labelOut");

inputIn.addEventListener("keyup", One);

function One() {
  localStorage.setItem("first", inputIn.value);
  labelOut.innerHTML = localStorage.getItem("first");
}
