const gulp = require("gulp"); //O Gulp é um automatizador de tarefas para JavaScript. Ele permite automatizar processos como compilação de arquivos, minificação de código, otimização de imagens, entre outros.
const sass = require("gulp-sass")(require("sass"));//O Sass é um pré-processador CSS que adiciona funcionalidades como variáveis, aninhamento e mixins ao CSS tradicional. O pacote gulp-sass é um plugin do Gulp que permite compilar arquivos .scss (Sass) para .css.
const imagemin = require("gulp-imagemin"); //O gulp-imagemin é um plugin do Gulp usado para otimizar imagens (reduzir o tamanho de arquivos .png, .jpg, .svg, etc.), sem perder qualidade significativa.
const uglify = require("gulp-uglify"); //O gulp-uglify é um plugin do Gulp que reduz o tamanho do código JavaScript, removendo espaços em branco e renomeando variáveis para tornar o arquivo menor e mais eficiente.

function scripts(){
    return gulp.src ("./src/scripts/*.js")
    .pipe(uglify())
    .pipe(gulp.dest("./dist/js"));
}

function styles(){
    return gulp.src("./src/styles/*.scss")
    .pipe(sass({outputStyle: "compressed"}))
    .pipe(gulp.dest("./dist/css"));
}

function images(){
    return gulp.src("./src/images/**/*")
    .pipe(imagemin())
    .pipe(gulp.dest("./dist/images"));
}

exports.default = gulp.parallel(styles, images, scripts);

exports.watch = function() {
    gulp.watch("./src/styles/*.scss", gulp.parallel(styles))
    gulp.watch("./src/scripts/*.js", gulp.parallel(scripts))
}