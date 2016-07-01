const gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task('default', () => {
    return gulp.src(['es6extends/src/app.js', 'es6extends/src/Sub.js', 'es6extends/src/Sup.js'])
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('es6extends/dist'));
});