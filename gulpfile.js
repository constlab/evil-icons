'use strict';

var gulp = require('gulp'),
    fs = require('fs'),
    template = require('gulp-template'),
    rename = require('gulp-rename');

gulp.task('default', function () {
    function icons() {
        var result = '';
        var files = fs.readdirSync(__dirname + '/icons');

        for (var i in files) {
            var file = fs.readFileSync(__dirname + '/icons/' + files[i]);
            result += '<div class="icon">' + file + '</div>';
        }

        return result;
    }

    return gulp.src('example/index.tmpl.html')
        .pipe(template({icons: icons()}))
        .pipe(rename({
            basename: 'index'
        }))
        .pipe(gulp.dest('example'));
});