var shell = require('shelljs');

// Copy lazysizes to assets dir
shell.rm('-rf', 'assets/js/vendor/lazysizes');
shell.mkdir('-p', 'assets/js/vendor/lazysizes');
shell.cp('-R', 'node_modules/lazysizes/lazysizes.min.js', 'assets/js/vendor/lazysizes/lazysizes.min.js')

// Copy ga-lite to static dir
shell.rm('-rf', 'static/js/vendor/ga-lite');
shell.mkdir('-p', 'static/js/vendor/ga-lite');
shell.cp('-R', 'node_modules/ga-lite/dist/ga-lite.min.js', 'static/js/vendor/ga-lite/ga-lite.min.js')

shell.echo('Dependencies copied.');