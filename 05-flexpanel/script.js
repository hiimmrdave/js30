const flexes = document.querySelectorAll("div");
function toggleOn() {
    this.classList.toggle("on");
}
flexes.forEach(flex => flex.addEventListener("click", toggleOn));
//# sourceMappingURL=script.js.map