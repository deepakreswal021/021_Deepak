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
    const preserve = vscode.workspace.getConfiguration('auto-import.importStatement.script').get('preserveScriptFileExtension');
    const fileType = preserve ? (0, utilities_1.getFileExt)(fromFilepath) : '';
    return import_statements_1.importStatement.javascriptImportStatement(relativePath + fileType);
}
exports.snippet = snippet;
