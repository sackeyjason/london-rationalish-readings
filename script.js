let theme =
  document.cookie &&
  document.cookie.match(/theme=([a-z]*)/) &&
  document.cookie.match(/theme=([a-z]*)/)[1];
const LIGHT_CSS = `html {
    --background: #fff;
    --color: #000;
    --link-color: #06c;
    --focus-color: #ffd70087;
  }`;
const DARK_CSS = `html {
    --background: #111;
    --color: #eee;
    --link-color: #3d9970;
    --focus-color: #322;
  }`;

function handler(event) {
  if (event.target.matches("button")) {
    switch (event.target.textContent.slice(0, 1)) {
      case "L":
        theme = "light";
        break;
      case "D":
        theme = "dark";
        break;
      default:
        theme = null;
        break;
    }
    if (theme) {
      document.cookie = `theme=${theme}`;
    } else {
      document.cookie =
        "theme=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    }
    useTheme();
  }
}

function useTheme() {
  switch (theme) {
    case "light":
      themeStyle.innerHTML = LIGHT_CSS;
      break;
    case "dark":
      themeStyle.innerHTML = DARK_CSS;
      break;
    default:
      themeStyle.innerHTML = "";
      break;
  }
}

function init() {
  const controls = document.createElement("div");
  controls.innerHTML =
    "Theme <button>Light</button> <button>Dark</button> <button>&times;</button>";
  uiControls.appendChild(controls);
  controls.addEventListener("click", handler);
}
