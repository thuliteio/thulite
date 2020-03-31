var shell = require('shelljs');

// Clean assets vendor dirs
shell.rm('-rf', 'assets/js/vendor/*');
shell.rm('-rf', 'assets/sass/vendor/*');

// Clean static vendor dirs
shell.rm('-rf', 'static/css/vendor/*');
shell.rm('-rf', 'static/fonts/vendor/*');
shell.rm('-rf', 'static/images/vendor/*');
shell.rm('-rf', 'static/js/vendor/*');

shell.echo('Dependencies cleaned.');
