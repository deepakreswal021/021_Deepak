"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AutoImportOnDropProvider = void 0;
const vscode = require("vscode");
const utilities_1 = require("../utilities");
const model_1 = require("../model");
const providers_1 = require("../providers");
/*
  Drag and drop handler
 */
class AutoImportOnDropProvider {
    async provideDocumentDropEdits(_document, position, dataTransfer, token) {
        /*
          Get the active text editor file path and dragged file path from tree view
          */
        const dataTransferItem = dataTransfer.get('text/plain');
        const dropFilePath = _document.uri.fsPath;
        const dragFilePath = dataTransferItem.value;
        /*
          Prevents same file drag and drop
          */
        if (dragFilePath.toLowerCase() === dropFilePath.toLowerCase()) {
            return (0, utilities_1.notify)(model_1.NotifyType.SameFilePath);
        }
        /*
          Prevents unsupported drag and drop
          */
        if (
        // Checks unsupported drag and drop files
        (!providers_1.permittedExts.includes((0, utilities_1.getFileExt)(dropFilePath)) && ((0, utilities_1.getFileExt)(dragFilePath) !== (0, utilities_1.getFileExt)(dropFilePath)))
            // Checks HTML to HTML drag and drop
            || ((0, utilities_1.getFileExt)(dragFilePath) === '.html' && (0, utilities_1.getFileExt)(dropFilePath) === '.html')
            // Checks unsupported HTML drag import file extensions
            || (!providers_1.htmlSupported.includes((0, utilities_1.getFileExt)(dragFilePath)) && (0, utilities_1.getFileExt)(dropFilePath) === '.html')
            // Checks unsupported Markdown drag import file extensions
            || (!providers_1.markdownSupported.includes((0, utilities_1.getFileExt)(dragFilePath)) && (0, utilities_1.getFileExt)(dropFilePath) === '.md')
            // Checks unsupported CSS drag import file extensions
            || (!providers_1.cssSupported.includes((0, utilities_1.getFileExt)(dragFilePath)) && (0, utilities_1.getFileExt)(dropFilePath) === '.css')
            // Checks unsupported SCSS drag import file extensions
            || (!providers_1.scssSupported.includes((0, utilities_1.getFileExt)(dragFilePath)) && (0, utilities_1.getFileExt)(dropFilePath) === '.scss')) {
            (0, utilities_1.notify)(model_1.NotifyType.NotSupported);
            return { insertText: relativePath(dropFilePath, dragFilePath) };
        }
        const snippet = (0, utilities_1.importStatementSnippet)((0, utilities_1.getRelativePath)(dropFilePath, dragFilePath), dragFilePath, dropFilePath);
        if (snippet.value === '\n') {
            (0, utilities_1.notify)(model_1.NotifyType.NotSupported);
            return { insertText: relativePath(dropFilePath, dragFilePath) };
        }
        /*
          Insert text
          */
        return { insertText: snippet };
    }
}
exports.AutoImportOnDropProvider = AutoImportOnDropProvider;
function relativePath(toFilepath, fromFilepath) {
    const snippet = new vscode.SnippetString(`${(0, utilities_1.getRelativePath)(toFilepath, fromFilepath) + (0, utilities_1.getFileExt)(fromFilepath)}`);
    return snippet.appendText('\n');
}
