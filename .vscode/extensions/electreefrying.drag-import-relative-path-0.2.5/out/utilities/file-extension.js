"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFileExt = void 0;
const path = require("path");
/**
 * Get file extension from path/relative paths.
 * @param {string} relativePath Calculated relative path from dragged file and text editor.
 * @returns FileExtension: Supported file extensions
 */
function getFileExt(relativePath) {
    return path.parse(relativePath).ext;
}
exports.getFileExt = getFileExt;
