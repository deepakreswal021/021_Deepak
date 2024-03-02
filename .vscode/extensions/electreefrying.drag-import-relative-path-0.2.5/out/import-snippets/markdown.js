"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.snippet = void 0;
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
        case 'markdown': return import_statements_1.importStatement.markdownImportStatement(relativePath + (0, utilities_1.getFileExt)(fromFilepath));
        case 'image': return import_statements_1.importStatement.markdownImageImportStatement(relativePath + (0, utilities_1.getFileExt)(fromFilepath));
    }
}
exports.snippet = snippet;
