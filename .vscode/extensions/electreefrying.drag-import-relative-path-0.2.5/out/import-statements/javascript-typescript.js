"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typescriptImportStatement = exports.javascriptImportStatement = void 0;
const vscode = require("vscode");
const path = require("path");
const providers_1 = require("../providers");
/**
 * Returns the Import statement string
 * @param {string} relativePath Relative path of dragged file and active text editor.
 * @returns Import statement string
 */
function javascriptImportStatement(relativePath) {
    let configValue = vscode.workspace.getConfiguration('auto-import.importStatement.script').get('javascriptImportStyle');
    configValue = providers_1.importStyle.javascript.find((config) => config.description === configValue).value;
    switch (configValue) {
        case 0: return new vscode.SnippetString(`import $1 from '${relativePath}';`);
        case 1: return new vscode.SnippetString(`import { $1 } from '${relativePath}';`);
        case 2: return new vscode.SnippetString(`import { $1 as $2 } from '${relativePath}';`);
        case 3: return new vscode.SnippetString(`import * as $1 from '${relativePath}';`);
        case 4: return new vscode.SnippetString(`import '${relativePath}';`);
        case 5: return new vscode.SnippetString(`var $1 = require('${relativePath}');`);
        case 6: return new vscode.SnippetString(`const $1 = require('${relativePath}');`);
        case 7: return new vscode.SnippetString(`var $1 = import('${relativePath}');`);
        case 8: return new vscode.SnippetString(`const $1 = import('${relativePath}');`);
        default: return new vscode.SnippetString(`import $1 from '${relativePath}';`);
    }
}
exports.javascriptImportStatement = javascriptImportStatement;
/**
 * Returns the Import statement string
 * @param {string} relativePath Relative path of dragged file and active text editor.
 * @returns Import statement string
 */
function typescriptImportStatement(relativePath) {
    let configValue = vscode.workspace.getConfiguration('auto-import.importStatement.script').get('typescriptImportStyle');
    configValue = providers_1.importStyle.typescript.find((config) => config.description === configValue).value;
    switch (configValue) {
        case 0: return new vscode.SnippetString(`import $1 from '${relativePath}';`);
        case 1: return new vscode.SnippetString(`import { ${importName(relativePath)} } from '${relativePath}';`);
        case 2: return new vscode.SnippetString(`import { $1 as $2 } from '${relativePath}';`);
        case 3: return new vscode.SnippetString(`import * as $1 from '${relativePath}';`);
        case 4: return new vscode.SnippetString(`import '${relativePath}';`);
        default: return new vscode.SnippetString(`import { $1 } from '${relativePath}';`);
    }
}
exports.typescriptImportStatement = typescriptImportStatement;
/**
 * Returns a customized import name if the file is an Angular component.
 * @param {string} relativePath Relative path of dragged file and active text editor.
 * @returns Import name
 */
function importName(relativePath) {
    if (relativePath.includes('.component')
        || relativePath.includes('.directive')
        || relativePath.includes('.pipe')) {
        const snackCase = path.basename(relativePath).replace(/\./g, '-');
        return snackCase.split('-').map(e => e[0].toUpperCase() + e.slice(1)).join('');
    }
    else {
        return '$1';
    }
}
