const inputs = document.querySelectorAll("input");
function handleChange(): void {
  const end = this.dataset.end || '';
  document.documentElement.style.setProperty(`--${this.id}`, this.value + end);
}

inputs.forEach(e => e.addEventListener("change", handleChange));
