const { src, dest, parallel, series, watch } = require("gulp");
const browserSync = require("browser-sync").create();
// Подключаем модули gulp-sass
const sass = require("gulp-sass");
// Подключаем Autoprefixer
const autoprefixer = require("gulp-autoprefixer");
// Подключаем модуль gulp-clean-css
const cleancss = require("gulp-clean-css");
const concat = require("gulp-concat");

function browsersync() {
  browserSync.init({
    server: { baseDir: "app/" },
    notify: false,
    online: true,
  });
}
function startWatch() {
  watch("app/**/*.scss", styles);
  watch("app/**/*.html").on("change", browserSync.reload);
  watch("app/images/src/**/*", images);
}

function styles() {
  return src("app/" + "scss" + "/style." + "scss" + "")
    .pipe(sass())
    .pipe(concat("style.min.css"))
    .pipe(
      autoprefixer({ overrideBrowserslist: ["last 10 versions"], grid: true })
    )
    .pipe(
      cleancss({
        level: { 1: { specialComments: 0 } } /* , format: 'beautify' */,
      })
    )
    .pipe(dest("app/css/"))
    .pipe(browserSync.stream());
}

//Подключение команды для работы с изображениями

function images() {
  return src("app/images/src/**/*")
    .pipe(newer("app/images/dest/"))
    .pipe(imagemin())
    .pipe(dest("app/images/dest/"));
}

// Подключаем gulp-imagemin для работы с изображениями
const imagemin = require("gulp-imagemin");
// Подключаем модуль gulp-newer
const newer = require("gulp-newer");
// Подключаем модуль del
const del = require("del");

//Очистка папки изображений
// function cleanimg() {
//   return del("app/images/dest/**/*", { force: true });
// }

//Финальная сборка проекта для разработчика
function buildcopy() {
  return src(["app/images/dest/**/*", "app/css/*.min.css", "app/**/*.html"], {
    base: "app",
  }).pipe(dest("dist"));
}
//Очистка Clean Dist для обнуления папки, чтобы клиенту все пошло так как надо
function cleandist() {
  return del("dist/**/*", { force: true });
}

// Экспортируем функцию styles() в таск styles
exports.styles = styles;
exports.browsersync = browsersync;
exports.images = images;
exports.cleanimg = cleanimg;
exports.cleandist = cleandist;

exports.default = parallel(browsersync, startWatch);
// exports.build = series(cleandist, cleanimg, styles, images, buildcopy);
exports.build = series(cleandist, styles, images, buildcopy);
