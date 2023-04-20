const sass = require("gulp-sass")(require("sass"));
const imagens = require("gulp-imagemin");
const javaScript = require("gulp-uglify");

function compilacao() {
  return gulp.src("./sass/*.scss");
  return gulp.src("./imagens/*");
  return gulp
    .src("./js/*.js")
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: "compressed" }))
    .pip(sourcemaps.write(".maps"))
    .pipe(gulp.dest("./css/main"))
    .pipe(gulp.dest("./img"))
    .pipe(gulp.dest("./scripts"));
}
exports.default = function () {
  gulp.watch(
    "./sass./*.scss",
    { ignoreInitial: false },
    gulp.series(compilacao)
  );
  gulp.watch("./imagens/*", { ignoreInitial: false }, gulp.series(compilacao));
  gulp.watch("./js/*.js", { ignoreInitial: false }, gulp.series(compilacao));
};
