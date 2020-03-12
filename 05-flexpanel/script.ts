const flexes = document.querySelectorAll("div");

function toggleOn(): void {
  this.classList.toggle("on");
}

flexes.forEach(flex => flex.addEventListener("click", toggleOn))