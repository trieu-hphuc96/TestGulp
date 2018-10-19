var gulp = require("gulp");
var concat = require("gulp-concat");
var rename = require("gulp-rename");
var uglify = require("gulp-uglify");
var sourcemaps = require("gulp-sourcemaps");

var jsFiles = "assets/scripts/**/*.js",
  jsDest = "dist/scripts";

gulp.task("concat-app-scripts", function() {
  return gulp
    .src(jsFiles)
    .pipe(concat("scripts.js"))
    .pipe(gulp.dest(jsDest));
});

gulp.task("concat-libs-scripts", function() {
  return gulp
    .src(jsFiles)
    .pipe(concat("scripts.js"))
    .pipe(gulp.dest(jsDest));
});

gulp.task("uglify-scripts", function() {
  return gulp
    .src(jsFiles)
    .pipe(concat("scripts.js"))
    .pipe(gulp.dest(jsDest))
    .pipe(rename("scripts.min.js"))
    .pipe(uglify())
    .pipe(gulp.dest(jsDest));
});

gulp.task("javascript:libs", function() {
  return (
    gulp
      .src([
        //index
        "./node_modules/gentelella/vendors/jquery/dist/jquery.js",
        "./node_modules/gentelella/vendors/bootstrap/dist/js/bootstrap.min.js",
        "./node_modules/gentelella/vendors/fastclick/lib/fastclick.js",
        "./node_modules/gentelella/vendors/nprogress/nprogress.js",

        "./node_modules/gentelella/vendors/Chart.js/dist/Chart.min.js",
        "./node_modules/gentelella/vendors/gauge.js/dist/gauge.min.js",
        "./node_modules/gentelella/vendors/bootstrap-progressbar/bootstrap-progressbar.min.js",
        "./node_modules/gentelella/vendors/iCheck/icheck.min.js",
        "./node_modules/gentelella/vendors/skycons/skycons.js",
        "./node_modules/gentelella/vendors/Flot/jquery.flot.js",
        "./node_modules/gentelella/vendors/Flot/jquery.flot.pie.js",
        "./node_modules/gentelella/vendors/Flot/jquery.flot.time.js",
        "./node_modules/gentelella/vendors/Flot/jquery.flot.stack.js",
        "./node_modules/gentelella/vendors/Flot/jquery.flot.resize.js",
        "./node_modules/gentelella/vendors/flot.orderbars/js/jquery.flot.orderBars.js",
        "./node_modules/gentelella/vendors/flot-spline/js/jquery.flot.spline.min.js",
        "./node_modules/gentelella/vendors/flot.curvedlines/curvedLines.js",
        "./node_modules/gentelella/vendors/DateJS/build/date.js",
        "./node_modules/gentelella/vendors/jqvmap/dist/jquery.vmap.js",
        "./node_modules/gentelella/vendors/jqvmap/dist/maps/jquery.vmap.world.js",
        "./node_modules/gentelella/vendors/jqvmap/examples/js/jquery.vmap.sampledata.js",
        "./node_modules/gentelella/vendors/moment/min/moment.min.js",
        "./node_modules/gentelella/vendors/bootstrap-daterangepicker/daterangepicker.js",
        //tables
        "./node_modules/gentelella/vendors/datatables.net/js/jquery.dataTables.min.js",
        "./node_modules/gentelella/vendors/datatables.net-bs/js/dataTables.bootstrap.min.js",
        "./node_modules/gentelella/vendors/datatables.net-buttons/js/dataTables.buttons.min.js",
        "./node_modules/gentelella/vendors/datatables.net-buttons-bs/js/buttons.bootstrap.min.js",
        "./node_modules/gentelella/vendors/datatables.net-buttons/js/buttons.flash.min.js",
        "./node_modules/gentelella/vendors/datatables.net-buttons/js/buttons.html5.min.js",
        "./node_modules/gentelella/vendors/datatables.net-buttons/js/buttons.print.min.js",
        "./node_modules/gentelella/vendors/datatables.net-fixedheader/js/dataTables.fixedHeader.min.js",
        "./node_modules/gentelella/vendors/datatables.net-keytable/js/dataTables.keyTable.min.js",
        "./node_modules/gentelella/vendors/datatables.net-responsive/js/dataTables.responsive.min.js",
        "./node_modules/gentelella/vendors/datatables.net-responsive-bs/js/responsive.bootstrap.js",
        "./node_modules/gentelella/vendors/datatables.net-scroller/js/dataTables.scroller.min.js",
        "./node_modules/gentelella/vendors/jszip/dist/jszip.min.js",
        "./node_modules/gentelella/vendors/pdfmake/build/pdfmake.min.js",
        "./node_modules/gentelella/vendors/pdfmake/build/vfs_fonts.js",

        //custom for library
        "./node_modules/gentelella/build/js/custom.min.js",
      ])
      .pipe(sourcemaps.init())
      // getBundleName creates a cache busting name
      .pipe(concat("libs.js"))
      .pipe(sourcemaps.write("./"))
      .pipe(gulp.dest("./vendors/js"))
      .on("error", handleErrors)
  );
});

gulp.task("css:libs", function() {
  return (
    gulp
      .src([
        "./node_modules/gentelella/vendors/bootstrap/dist/css/bootstrap.min.css",
        "./node_modules/gentelella/vendors/font-awesome/css/font-awesome.min.css",
        "./node_modules/gentelella/vendors/nprogress/nprogress.css",
        "./node_modules/gentelella/vendors/iCheck/skins/flat/green.css",
        "./node_modules/gentelella/vendors/bootstrap-progressbar/css/bootstrap-progressbar-3.3.4.min.css",
        "./node_modules/gentelella/vendors/jqvmap/dist/jqvmap.min.css",
        "./node_modules/gentelella/vendors/bootstrap-daterangepicker/daterangepicker.css",
        //tables
        "./node_modules/gentelella/vendors/datatables.net-bs/css/dataTables.bootstrap.min.css",
        "./node_modules/gentelella/vendors/datatables.net-buttons-bs/css/buttons.bootstrap.min.css",
        "./node_modules/gentelella/vendors/datatables.net-fixedheader-bs/css/fixedHeader.bootstrap.min.css",
        "./node_modules/gentelella/vendors/datatables.net-responsive-bs/css/responsive.bootstrap.min.css",
        "./node_modules/gentelella/vendors/datatables.net-scroller-bs/css/scroller.bootstrap.min.css",

        //custom for library
        "./node_modules/gentelella/build/css/custom.min.css",
      ])
      .pipe(sourcemaps.init())
      // getBundleName creates a cache busting name
      .pipe(concat("libs.css"))
      .pipe(sourcemaps.write("./"))
      .pipe(gulp.dest("./vendors/css"))
      .on("error", handleErrors)
  );
});

function handleErrors(error) {
  console.log(error);
}
