"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.importStatement = void 0;
const htmlMarkdown = require("./html-markdown");
const cssScss = require("./css-scss");
const javascriptTypescript = require("./javascript-typescript");
exports.importStatement = {
    ...htmlMarkdown,
    ...cssScss,
    ...javascriptTypescript
};
