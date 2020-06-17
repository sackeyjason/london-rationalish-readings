let theme = undefined;

function handler(event) {
    if (event.target.matches('button')) {
        switch (event.target.textContent.slice(0, 1)) {
            case 'L':
                document.querySelector('themeStyle').innerHTML = `html {
                    --background: #fff;
                    --color: #000;
                    --link-color: #06c;
                    --focus-color: #ffd70087;
                  }`
                break;
            case 'D':
                document.querySelector('themeStyle').innerHTML = `html {
                    --background: #111;
                    --color: #eee;
                    --link-color: #3d9970;
                    --focus-color: #322;
                  }`
                break;
            default:
                document.querySelector('themeStyle').innerHTML = ''
                break;
        }
    }
}

function init() {
    const controls = document.createElement('div');
    controls.innerHTML = 'Theme <button>Light</button> <button>Dark</button> <button>&times;</button>';
    uiControls.appendChild(controls);
    controls.addEventListener('click', handler);
}
