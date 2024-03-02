const vscode = require("vscode");
const path = require("path");
const axios = require("axios");

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
  let ReactIconsAutoImportWebViewDisposable = ReactIconsAutoImportWebView(
    vscode,
    context
  );
  context.subscriptions.push(ReactIconsAutoImportWebViewDisposable);
}
function deactivate() {}

const ReactIconsAutoImportWebView = (vscode, context) => {
  vscode.window.registerWebviewViewProvider("react-icons-auto-import-webview", {
    resolveWebviewView(webviewView, webviewContext, token) {
      webviewView.webview.options = {
        enableScripts: true,
        localResourceRoots: [
          vscode.Uri.file(path.join(context.extensionPath, "build")),
        ],
      };

      const baseUri = webviewView.webview.asWebviewUri(
        vscode.Uri.file(path.join(context.extensionPath, "build"))
      );

      webviewView.webview.html = getWebviewContent(baseUri);

      const viewContext = "sidebar";

      webviewApiRoute(webviewView, context, viewContext);
    },
  });
};

const webviewApiRoute = (Webview, context, viewContext) => {
  return Webview.webview.onDidReceiveMessage(async (message) => {
    try {
      switch (message.command) {
        case "importIcon":
          await handleImportIcon(message, Webview, context, viewContext);

          break;

        default:
          break;
      }
    } catch (error) {
      console.log(error);
    }
  });
};

function handleImportIcon(message, Webview, context, viewContext) {
  return new Promise(async (resolve, reject) => {
    try {
      const { iconName } = message.data;
      const iconEle = `<${iconName} />`;
      // add this icon name at current cursor position
      const editor = vscode.window.activeTextEditor;
      const position = editor.selection.active;

      // add import statement at top of file if not exist
      const document = editor.document;
      const text = document.getText();
      const firstTwoLetters = iconName.slice(0, 2).toLowerCase();
      const importStatement = `import { ${iconName} } from "react-icons/${firstTwoLetters}"; \n`;
      const importStatementRegex = new RegExp(importStatement, "g");
      const importStatementExist = importStatementRegex.test(text);
      if (!importStatementExist) {
        const importStatementPosition = new vscode.Position(0, 0);
        editor.edit((editBuilder) => {
          editBuilder.insert(importStatementPosition, importStatement);
          editBuilder.insert(position, iconEle);
        });
      } else {
        editor.edit((editBuilder) => {
          editBuilder.insert(position, iconEle);
        });
      }
      // color used by vscode menu icons
      const color = "#ffffff";

      Webview.webview.postMessage({
        command: "importIcon",
        data: {
          status: "success",
        },
      });

      await postAnalytics({
        iconName,
      });
    } catch (error) {
      Webview.webview.postMessage({
        command: "importIcon",
        data: {
          status: "fail",
        },
      });
    }
  });
}

function getWebviewContent(baseUri) {
  return `<!DOCTYPE html>
  <html lang="en">
	<head>
	  <title>Editor App</title>
	<meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0, user-scalable=no, maximum-scale=1.0" />
	  <style>
		@import url(https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap);
	  </style>
	<base href="${baseUri}" />
	<script defer="defer" src="build/script.js"></script>
	  <link rel="stylesheet" href="build/styles.css"></link>
	<style>
	  html {
		zoom: 0.8;
	  }
	</style>
	 </head>
	<body>
	  <div id="root">root</div>  
	</body>
  </html> 
  `;
}

async function postAnalytics(iconName) {
  try {
    const user = getUserDetails();
    const data = {
      ...user,
      iconName,
    };
    const url =
      "https://us-east-1.aws.data.mongodb-api.com/app/application-0-oxuoq/endpoint/analytics/iconAdded";
    await axios.post(url, data);
  } catch (error) {
    console.log(error);
  }
}

function getUserDetails() {
  const configuration = vscode.workspace.getConfiguration();
  const userName =
    configuration.get("user.name") ||
    process.env.USER ||
    process.env.USERNAME ||
    "anonymous";
  const userEmail = configuration.get("user.email") || "anonymous";
  return { userName, userEmail };
}

module.exports = {
  activate,
  deactivate,
};
