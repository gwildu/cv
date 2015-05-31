var gulp = require('gulp'),
    less = require('gulp-less'),
    autoprefixer = require('gulp-autoprefixer'),
    dest = require('gulp-dest'),
    notify = require('gulp-notify'),
    debug = require('gulp-debug');

gulp.task('less', function(){
    return gulp.src('**/modules/*/*.less')
        .pipe(debug({title: 'debug - src: '}))
        .pipe(less())
        .pipe(debug({title: 'debug - less: '}))
        .pipe(autoprefixer({
            browsers: [
                'Android >= 4',
                'last 2 Chrome versions',
                'last 2 ff versions',
                'ie >= 8',
                'iOS >= 6',
                'last 2 Opera versions',
                'Safari >= 5',
                'last 2 op_mob versions',
                'last 2 op_mini versions',
                'last 2 and_chr versions',
                'last 2 and_ff versions',
                'last 2 ie_mob versions'
            ]
        }))
        .pipe(gulp.dest('compiled/css'))
        .pipe(debug({title: 'debug - gulp.dest: '}))

});

gulp.task('copy', function(){
    var result = gulp.src(['prototypes/animation/modules/animation/css/style.css'])
        .pipe(debug())
        .pipe(dest())
        .pipe(debug());
    console.log(result);
    return result;
});