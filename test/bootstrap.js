window.h = require('preact').h;
window.shallow = require('preact-render-spy').shallow;
window.expect = require('chai').expect;

document.write(`
    <link rel="stylesheet" type="text/css" href="http://localhost:9001/styles.[hash].css">
    <script src="http://localhost:9001/main.[hash].js" onload="miui.run()"></script>
`);