const themeSwitch = document.getElementById("theme-switch");
const root = document.documentElement;

themeSwitch.addEventListener("click", () => {
  const isLight = root.dataset.theme === "light";
  root.dataset.theme = isLight ? "dark" : "light";
  themeSwitch.setAttribute("aria-pressed", String(!isLight));
  document.getElementById("theme-icon").src = isLight
    ? "icons/sun.svg"
    : "icons/moon.svg";
});
