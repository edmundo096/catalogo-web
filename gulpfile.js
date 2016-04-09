'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var sassOptions = {
    // Values: nested, expanded, compact, compressed
    outputStyle: 'nested',
    includePaths: './public/bootstrap-sass-3.3.6/assets/stylesheets'
};
var postcss      = require('gulp-postcss');
var sourcemaps   = require('gulp-sourcemaps');
var autoprefixer = require('autoprefixer');


// https://www.npmjs.com/package/gulp-sass
// https://github.com/sass/node-sass

gulp.task('sass', function () {
    return gulp.src('./public/stylesheets/*.scss')
        //.pipe(sourcemaps.init())
        .pipe(sass(sassOptions).on('error', sass.logError))
        //.pipe(sourcemaps.write('.'))  // breaks load srcmap of autoprefixer.
        .pipe(gulp.dest('./public/stylesheets'));
});

gulp.task('default:watch', function () {
    //gulp.watch('./sass/**/*.scss', ['sass']);
    return gulp.watch('./public/stylesheets/*.scss',  ['sass', 'autoprefixer']);
});


// https://github.com/postcss/autoprefixer
// Depends on Sass task to finish (return the stream).

gulp.task('autoprefixer', ['sass'], function () {
    return gulp.src('./public/stylesheets/*.css')
        //.pipe(sourcemaps.init({ loadMaps: true }))
        .pipe(postcss([ autoprefixer({ browsers: ['last 2 versions'] }) ]))
        //.pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('./public/stylesheets'));
});


gulp.task('default', ['sass', 'autoprefixer']);
