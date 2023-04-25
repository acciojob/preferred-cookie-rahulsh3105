//your JS code here. If required.
const form = document.querySelector("form");
const fontSizeInput = document.querySelector("#fontsize");
const fontColorInput = document.querySelector("#fontcolor");

// Load previously saved preferences from local storage
const savedFontSize = localStorage.getItem("preferredFontSize");
const savedFontColor = localStorage.getItem("preferredFontColor");
if (savedFontSize) {
  document.documentElement.style.setProperty("--fontsize", savedFontSize);
  fontSizeInput.value = savedFontSize.slice(0, -2); // remove "px" suffix
}
if (savedFontColor) {
  document.documentElement.style.setProperty("--fontcolor", savedFontColor);
  fontColorInput.value = savedFontColor;
}

// Handle form submit
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const fontSize = fontSizeInput.value + "px";
  const fontColor = fontColorInput.value;

  // Update page styles
  document.documentElement.style.setProperty("--fontsize", fontSize);
  document.documentElement.style.setProperty("--fontcolor", fontColor);

  // Store new preferences in local storage
  localStorage.setItem("preferredFontSize", fontSize);
  localStorage.setItem("preferredFontColor", fontColor);
});