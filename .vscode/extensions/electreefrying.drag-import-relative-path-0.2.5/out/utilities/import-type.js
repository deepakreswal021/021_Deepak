"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getImportType = void 0;
const file_extension_1 = require("./file-extension");
/**
 * Get Import type.
 * @param {string} relativePath Calculated relative path from dragged file and text editor.
 * @returns Import type
 */
function getImportType(relativePath) {
    switch ((0, file_extension_1.getFileExt)(relativePath)) {
        case '.js': return 'script';
        case '.css': return 'stylesheet';
        case '.scss': return null;
        case '.md': return 'markdown';
        default: return 'image';
    }
}
exports.getImportType = getImportType;
