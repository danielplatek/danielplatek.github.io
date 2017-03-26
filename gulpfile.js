var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var gplumber = require('gulp-plumber');
var browserSync = require('browser-sync').create();

var errorHandler = function (){
    return gplumber(function(error){
        console.log(error.message);
    });
};

gulp.task('sass', function() {
    return gulp.src('scss/main.scss')
    .pipe(errorHandler())
    .pipe(sourcemaps.init())
    .pipe(sass.sync({outputStyle: 'expanded'}))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('css'))
    .pipe(browserSync.stream())
});

gulp.task('watch', function(){
    return gulp.watch('scss/**/*.scss', ['sass']),
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    browserSync.init({
        proxy: "./"
    });
});

gulp.task('default', ['sass', 'watch']);
