"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.scssImageImportStatement = exports.scssImportStatement = exports.cssImageImportStatement = exports.cssImportStatement = void 0;
const vscode = require("vscode");
const providers_1 = require("../providers");
/**
 * Returns the Import statement string
 * @param {string} relativePath Relative path of dragged file and active text editor.
 * @returns Import statement string
 */
function cssImportStatement(relativePath) {
    let configValue = vscode.workspace.getConfiguration('auto-import.importStatement.styleSheet').get('cssImportStyle');
    configValue = providers_1.importStyle.css.find((config) => config.description === configValue).value;
    switch (configValue) {
        case 0: return new vscode.SnippetString(`@import '${relativePath}';`);
        case 1: return new vscode.SnippetString(`@import url('${relativePath}');`);
        default: return new vscode.SnippetString(`@import '${relativePath}';`);
    }
}
exports.cssImportStatement = cssImportStatement;
/**
 * Returns the Import statement string
 * @param {string} relativePath Relative path of dragged file and active text editor.
 * @returns Import statement string
 */
function cssImageImportStatement(relativePath) {
    let configValue = vscode.workspace.getConfiguration('auto-import.importStatement.styleSheet').get('cssImageImportStyle');
    configValue = providers_1.importStyle.cssImage.find((config) => config.description === configValue).value;
    switch (configValue) {
        case 0: return new vscode.SnippetString(`url('${relativePath}')`);
        default: return new vscode.SnippetString(`url('${relativePath}')`);
    }
}
exports.cssImageImportStatement = cssImageImportStatement;
/**
 * Returns the Import statement string
 * @param {string} relativePath Relative path of dragged file and active text editor.
 * @returns Import statement string
 */
function scssImportStatement(relativePath) {
    relativePath = parsePartialFile(relativePath);
    let configValue = vscode.workspace.getConfiguration('auto-import.importStatement.styleSheet').get('scssImportStyle');
    configValue = providers_1.importStyle.scss.find((config) => config.description === configValue).value;
    switch (configValue) {
        case 0: return new vscode.SnippetString(`@import '${relativePath}';`);
        case 1: return new vscode.SnippetString(`@import url('${relativePath}');`);
        case 2: return new vscode.SnippetString(`@use '${relativePath}';`);
        case 3: return new vscode.SnippetString(`@use '${relativePath}'; as $1`);
        default: return new vscode.SnippetString(`@import '${relativePath}';`);
    }
}
exports.scssImportStatement = scssImportStatement;
/**
 * Returns the Import statement string
 * @param {string} relativePath Relative path of dragged file and active text editor.
 * @returns Import statement string
 */
function scssImageImportStatement(relativePath) {
    let configValue = vscode.workspace.getConfiguration('auto-import.importStatement.styleSheet').get('scssImageImportStyle');
    configValue = providers_1.importStyle.scssImage.find((config) => config.description === configValue).value;
    switch (configValue) {
        case 0: return new vscode.SnippetString(`url('${relativePath}')`);
        default: return new vscode.SnippetString(`url('${relativePath}')`);
    }
}
exports.scssImageImportStatement = scssImageImportStatement;
function parsePartialFile(relativePath) {
    const arr = relativePath.split('/');
    const lastElemIndex = arr.length - 1;
    arr[lastElemIndex].startsWith('_') && (arr[lastElemIndex] = arr[lastElemIndex].substring(1));
    return arr.join('/');
}
