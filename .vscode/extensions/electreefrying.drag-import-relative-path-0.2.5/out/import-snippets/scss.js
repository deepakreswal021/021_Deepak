"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.snippet = void 0;
const vscode = require("vscode");
const import_statements_1 = require("../import-statements");
const utilities_1 = require("../utilities");
/**
 * Returns the import statement
 * @param {string} relativePath Relative path of dragged file and active text editor.
 * @param {string} fromFilepath File extension of the dragged file.
 * @returns Import statement string
 */
function snippet(relativePath, fromFilepath) {
    switch ((0, utilities_1.getImportType)(fromFilepath)) {
        case 'image': return import_statements_1.importStatement.cssImageImportStatement(relativePath + (0, utilities_1.getFileExt)(fromFilepath));
        default: return import_statements_1.importStatement.scssImportStatement(relativePath + getScssFileExt(fromFilepath));
    }
}
exports.snippet = snippet;
/**
 * Get SCSS file extension.
 * @param {string} fromFilepath Dragged file path.
 * @returns CSS file extension if fromFilepath ext is .css else none
 */
function getScssFileExt(fromFilepath) {
    if ((0, utilities_1.getFileExt)(fromFilepath) === '.css') {
        // Auto preserve file extension if file extension is CSS
        return (0, utilities_1.getFileExt)(fromFilepath);
    }
    else {
        const preserve = vscode.workspace.getConfiguration('auto-import.importStatement.styleSheet').get('preserveStylesheetFileExtension');
        return preserve ? (0, utilities_1.getFileExt)(fromFilepath) : '';
    }
}
