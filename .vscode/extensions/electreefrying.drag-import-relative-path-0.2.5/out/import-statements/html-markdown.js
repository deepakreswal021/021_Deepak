"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.markdownImageImportStatement = exports.markdownImportStatement = exports.htmlStylesheetImportStatement = exports.htmlImageImportStatement = exports.htmlScriptImportStatement = void 0;
const vscode = require("vscode");
const providers_1 = require("../providers");
/**
 * Returns the Import statement string
 * @param {string} relativePath Relative path of dragged file and active text editor.
 * @returns Import statement string
 */
function htmlScriptImportStatement(relativePath) {
    let configValue = vscode.workspace.getConfiguration('auto-import.importStatement.markup').get('htmlScriptImportStyle');
    configValue = providers_1.importStyle.HTMLScript.find((config) => config.description === configValue).value;
    switch (configValue) {
        case 0: return new vscode.SnippetString(`<script type=\"text/javascript\" src=\"${relativePath}\"></script>`);
        default: return new vscode.SnippetString(`<script type=\"text/javascript\" src=\"${relativePath}\"></script>`);
    }
}
exports.htmlScriptImportStatement = htmlScriptImportStatement;
/**
 * Returns the Import statement string
 * @param {string} relativePath Relative path of dragged file and active text editor.
 * @returns Import statement string
 */
function htmlImageImportStatement(relativePath) {
    let configValue = vscode.workspace.getConfiguration('auto-import.importStatement.markup').get('htmlImageImportStyle');
    configValue = providers_1.importStyle.HTMLImage.find((config) => config.description === configValue).value;
    switch (configValue) {
        case 0: return new vscode.SnippetString(`<img src=\"${relativePath}\" alt=\"sample\">`);
        default: return new vscode.SnippetString(`<img src=\"${relativePath}\" alt=\"sample\">`);
    }
}
exports.htmlImageImportStatement = htmlImageImportStatement;
/**
 * Returns the Import statement string
 * @param {string} relativePath Relative path of dragged file and active text editor.
 * @returns Import statement string
 */
function htmlStylesheetImportStatement(relativePath) {
    let configValue = vscode.workspace.getConfiguration('auto-import.importStatement.markup').get('htmlStyleSheetImportStyle');
    configValue = providers_1.importStyle.HTMLStylesheet.find((config) => config.description === configValue).value;
    switch (configValue) {
        case 0: return new vscode.SnippetString(`<link href=\"${relativePath}\" rel=\"stylesheet\">`);
        default: return new vscode.SnippetString(`<link href=\"${relativePath}\" rel=\"stylesheet\">`);
    }
}
exports.htmlStylesheetImportStatement = htmlStylesheetImportStatement;
/**
 * Returns the Import statement string
 * @param {string} relativePath Relative path of dragged file and active text editor.
 * @returns Import statement string
 */
function markdownImportStatement(relativePath) {
    let configValue = vscode.workspace.getConfiguration('auto-import.importStatement.markup').get('markdownImportStyle');
    configValue = providers_1.importStyle.markdown.find((config) => config.description === configValue).value;
    switch (configValue) {
        case 0: return new vscode.SnippetString(`![text](${relativePath})`);
        default: return new vscode.SnippetString(`![text](${relativePath})`);
    }
}
exports.markdownImportStatement = markdownImportStatement;
/**
 * Returns the Import statement string
 * @param {string} relativePath Relative path of dragged file and active text editor.
 * @returns Import statement string
 */
function markdownImageImportStatement(relativePath) {
    let configValue = vscode.workspace.getConfiguration('auto-import.importStatement.markup').get('markdownImageImportStyle');
    configValue = providers_1.importStyle.markdownImage.find((config) => config.description === configValue).value;
    switch (configValue) {
        case 0: return new vscode.SnippetString(`![alt-text](${relativePath} \"Hover text\")`);
        case 1: return new vscode.SnippetString(`![alt-text][image] / [image]: ${relativePath} \"Hover text\"`);
        default: return new vscode.SnippetString(`![alt-text](${relativePath} \"Hover text\")`);
    }
}
exports.markdownImageImportStatement = markdownImageImportStatement;
