"use strict";

const {src, dest} = require("gulp");

const gulp = require("gulp");
const autoprefixer = require("gulp-autoprefixer");
const cssbeautify = require("gulp-cssbeautify");
const cssnano = require("gulp-cssnano");
const imagemin = require("gulp-imagemin");
const plumber = require("gulp-plumber");
const rename = require("gulp-rename");
const rigger = require("gulp-rigger");
const sass = require("gulp-sass");
const comments = require("gulp-strip-css-comments");
const uglify = require("gulp-uglify");
const panini = require("panini");


let path = {
    build: {
        html: "dist/",
        js: "dist/assets/js/",
        css: "dist/assets/css/",
        img: "dist/assets/img/"
    },
    src: {
        html: "src/*.html",
        js: "src/assets/js/*.js",
        css: "src/assets/sass/style.scss",
        img: "src/assets/img/**/*.{jpg,png,svg,gif,ico}"
    },
    watch: {
        html: "src/**/*.html",
        js: "src/assets/js/**/*.js",
        css: "src/assets/sass/**/*.scss",
        img: "src/assets/img/**/*.{jpg,png,svg,gif,ico}"
    },
    clean: "./dist"
}


function html() {
    return src(path.src.html, {base: "src/"})
        .pipe(dist(path.src.html))
}

exports.html = html;