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

const projectPreview = document.querySelector(".project-preview");

if (projectPreview) {
  const projectVideo = projectPreview.querySelector(".firstProject");
  const previewTrigger = projectPreview.querySelector(
    ".project-preview-trigger",
  );
  let pinned = false;

  const startPreview = () => {
    projectPreview.classList.add("is-active");
    projectVideo.play().catch((error) => {
      console.error("Unable to play the project preview:", error);
    });
  };

  previewTrigger.addEventListener("click", () => {
    pinned = true;
    startPreview();
  });

  if (window.matchMedia("(hover: hover)").matches) {
    projectPreview.addEventListener("pointerenter", () => {
      if (!pinned) {
        startPreview();
      }
    });

    projectPreview.addEventListener("pointerleave", () => {
      if (!pinned) {
        projectVideo.pause();
        projectVideo.currentTime = 0;
        projectPreview.classList.remove("is-active");
      }
    });
  }
}
