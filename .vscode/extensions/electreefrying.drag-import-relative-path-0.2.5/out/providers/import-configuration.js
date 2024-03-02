"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.markdownImage = exports.markdown = exports.HTMLStylesheet = exports.HTMLImage = exports.HTMLScript = exports.scssImage = exports.scss = exports.cssImage = exports.css = exports.typescript = exports.javascript = void 0;
/*
  Javascript/Javascript React/Typescript/Typescript React Import styles
  */
exports.javascript = [
    { value: 0, description: "import name from '_relativePath_';" },
    { value: 1, description: "import { name } from '_relativePath_';" },
    { value: 2, description: "import { default as name } from '_relativePath_';" },
    { value: 3, description: "import * as name from '_relativePath_';" },
    { value: 4, description: "import '_relativePath_';" },
    { value: 5, description: "var name = require('_relativePath_');" },
    { value: 6, description: "const name = require('_relativePath_');" },
    { value: 7, description: "var name = import('_relativePath_');" },
    { value: 8, description: "const name = import('_relativePath_');" }
];
/*
  Javascript/Javascript React/Typescript/Typescript React Import styles
  */
exports.typescript = [
    { value: 0, description: "import name from '_relativePath_';" },
    { value: 1, description: "import { name } from '_relativePath_';" },
    { value: 2, description: "import { default as name } from '_relativePath_';" },
    { value: 3, description: "import * as name from '_relativePath_';" },
    { value: 4, description: "import '_relativePath_';" },
];
/*
  CSS Import styles
  */
exports.css = [
    { value: 0, description: "@import '_relativePath_';" },
    { value: 1, description: "@import url('_relativePath_');" }
];
/*
  CSS Import styles
  */
exports.cssImage = [
    { value: 0, description: "url('_relativePath_')" }
];
/*
  CSS preprocessor, SCSS Import styles
  */
exports.scss = [
    { value: 0, description: "@import '_relativePath_';" },
    { value: 1, description: "@import url('_relativePath_');" },
    { value: 2, description: "@use '_relativePath_';" },
    { value: 3, description: "@use '_relativePath_' as *;" }
];
/*
  CSS preprocessor, SCSS Import styles
  */
exports.scssImage = [
    { value: 0, description: "url('_relativePath_')" }
];
/*
  HTML scripts Import styles
  */
exports.HTMLScript = [
    { value: 0, description: "<script type=\"text/javascript\" src=\"_relativePath_\"></script>" }
];
/*
  HTML image Import styles
  */
exports.HTMLImage = [
    { value: 0, description: "<img src=\"_relativePath_\" alt=\"sample\">" }
];
/*
  HTML stylesheets Import styles
  */
exports.HTMLStylesheet = [
    { value: 0, description: "<link href=\"_relativePath_\" rel=\"stylesheet\">" }
];
/*
  Markdown Import styles
  */
exports.markdown = [
    { value: 0, description: "![text](_relativePath_)" }
];
/*
  Markdown (image) Import styles
  */
exports.markdownImage = [
    { value: 0, description: "![alt-text](_relativePath_ \"Hover text\")" },
    { value: 1, description: "![alt-text][image] / [image]: _relativePath_ \"Hover text\"" }
];
