const gulp  = require('gulp')
const watch = require('gulp-watch')
const webserver = require ('gulp-webserver')
gulp.task('monitorarMudancas', ()=>{
    watch('src/**/*.html', ()=>gulpstart("app.html"))
    watch('src/**/*.scss', ()=>gulpstart("app.css"))
    watch('src/**/*.js', ()=>gulpstart("app.js"))
    watch('src/assets/imgs/**/*.*', ()=>gulpstart("app.imgs"))
})
gulp.task('servidor', ['monitorarMudancas'], ()=>{
    return gulp.src('build').pipe(webserver({
        livereload:true,
        port:8080,
        open:true
    }))
})