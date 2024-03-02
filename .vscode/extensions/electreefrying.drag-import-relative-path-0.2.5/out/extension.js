"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = void 0;
const vscode = require("vscode");
const subscriptions_1 = require("./subscriptions");
const providers_1 = require("./providers");
/**
 * Called when the extension is activated.
 * Extension is activated the first time the command is executed.
 * @param {vscode.ExtensionContext} context An extension context is a collection of utilities private to an extension.
 * @returns void
 */
function activate(context) {
    /*
      Register Drag and drop handler on activation
     */
    context.subscriptions.push(vscode.languages.registerDocumentDropEditProvider(providers_1.selectors, new subscriptions_1.AutoImportOnDropProvider()));
}
exports.activate = activate;
