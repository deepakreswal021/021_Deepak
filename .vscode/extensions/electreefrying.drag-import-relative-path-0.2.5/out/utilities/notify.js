"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notify = void 0;
const vscode = require("vscode");
const model_1 = require("../model");
/**
 * Notification actions
 * @param {NotifyType} type Indicated notification type
 * @returns {vscode.DocumentDropEdit} undefined text in active text editor.
 */
function notify(type) {
    switch (type) {
        case model_1.NotifyType.SameFilePath: {
            /*
              Emit same file path, window notification (warning)
            */
            vscode.window.showWarningMessage(`Same file path.`);
            return { insertText: undefined };
        }
        case model_1.NotifyType.NotSupported: {
            /*
              Emit not supported, window notification (warning)
            */
            vscode.window.showWarningMessage(`Not supported.`);
            return { insertText: undefined };
        }
    }
}
exports.notify = notify;
