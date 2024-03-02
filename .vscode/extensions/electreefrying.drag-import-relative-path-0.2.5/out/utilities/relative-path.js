"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRelativePath = void 0;
const path = require("path");
const file_extension_1 = require("./file-extension");
/**
 * Get calculated import style to append in editor.
 * @param {string} from Dragged file path.
 * @param {string} to Active text editor file path.
 * @returns Calculated relative path.
 */
function getRelativePath(from, to) {
    const startChars = isSameDir(from, to) ? './' : '';
    const relativePath = toWindowsPath(relative(from, to));
    return startChars + removeFileExt(relativePath);
}
exports.getRelativePath = getRelativePath;
/**
 * Calculates file path between from and to.
 * @param {string} from Dragged file path.
 * @param {string} to Active text editor file path.
 * @returns relative file path of dragged and active text editor.
 */
function relative(from, to) {
    return path.relative(path.dirname(from), to);
}
/**
 * Convert linux/unix path to windows path.
 * @param {string} relativePath Calculated relative path from dragged file and text editor.
 * @returns Windows relative path.
 */
function toWindowsPath(relativePath) {
    return relativePath.replace(/\\/gi, '/');
}
/**
 * Remove relative path's file extension.
 * @param {string} relativePath Calculated relative path from dragged file and text editor.
 * @returns Relative path without file extension.
 */
function removeFileExt(relativePath) {
    const ext = (0, file_extension_1.getFileExt)(relativePath);
    return relativePath.slice(0, -(ext.length));
}
/**
 * Validate Dragged file path and active text editor file path if in the same directory.
 * @param {string} from Dragged file path.
 * @param {string} to Active text editor file path.
 * @returns Boolean
 */
function isSameDir(from, to) {
    from = path.parse(from).dir.toLowerCase().trim();
    to = path.parse(from).dir.toLowerCase().trim();
    return from === to || from.includes(to);
}
