import { render, h, Component } from 'preact';
import App from './App';

// This might seem really weird, but it saves several KB and also
// simplifies component files as there won't be a mysterious "h" being imported.
window.h = h;

// Prevents browser from remembering scroll position with HTML5 history API.
history.scrollRestoration = 'manual';

// Intended to prevent sticky hover effects
let touchsupport = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0);
if (!touchsupport) {
    document.documentElement.className += ' non-touch';
}

// Disable component recycling.
// This is important to ensure that we don't see old images while new images are loading.
// There's a pull request in progress to remove this recycling:
// https://github.com/developit/preact/pull/664
Object.defineProperty(Component.prototype, 'nextBase', {
    get() { return null; },
    set() { return; }
});

// This is seperated to another file so that way we don't have
// to render the app when we compile and load the index file
// for the test cases. This is only needed when running the real app.
render(<App />, document.getElementById('app'));
