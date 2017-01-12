var fs = require('fs');
var browserify = require('browserify');

function bundle(entries, outfile) {
    browserify({
        entries: entries,
        extensions: ['.es5.js'],
        paths: ['.']
    })
    .transform({
        global: true
    }, 'uglifyify')
    .bundle()
    .on('error', function(err) {
        console.log('Error : ' + err.message);
    })
    .pipe(fs.createWriteStream(outfile));
};

bundle([
    'src/index/index.es5.js'
], 'dist-es5/app.js');

