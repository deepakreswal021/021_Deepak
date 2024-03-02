"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.snippet = void 0;
const vscode = require("vscode");
const utilities_1 = require("../utilities");
function snippet(relativePath, fromFilepath) {
    switch ((0, utilities_1.getFileExt)(fromFilepath)) {
        case '.gif': // Images
        case '.jpeg':
        case '.jpg':
        case '.png':
        case '.webp':
        case '.json': // Data
        case '.js': // Scripts
        case '.jsx':
        case '.html': // HTML
        case '.yml': // YAML
        case '.yaml':
        case '.md': // MD
            {
                return new vscode.SnippetString(`import name$1 from '${relativePath + (0, utilities_1.getFileExt)(fromFilepath)}';`);
            }
        case '.woff': // Fonts
        case '.woff2':
        case '.ttf':
        case '.eot':
        case '.css': // Stylesheets
        case '.scss':
            {
                return new vscode.SnippetString(`import '${relativePath + (0, utilities_1.getFileExt)(fromFilepath)}';`);
            }
        default: {
            return new vscode.SnippetString(``);
        }
    }
}
exports.snippet = snippet;
