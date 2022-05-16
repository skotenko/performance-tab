const {watch} = require('gulp');
const gulp = require('gulp');

const sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps');

const rootPath = './';
const path = {
    style: {
        src: rootPath + 'scss/**/*.scss',
        dest: rootPath + 'build/css/',
        mapsDest: './'
    },
};

const style = () => {
    return (
        gulp
            .src(path.style.src)
            .pipe(sourcemaps.init())
            .pipe(sass().on('error', sass.logError)) /* compressed | expanded | nested | compact */
            .pipe(sourcemaps.write(path.style.mapsDest))
            .pipe(gulp.dest(path.style.dest))
    )
};

exports.style = style;
exports.default = () => {
    watch(path.style.src, style);
};
