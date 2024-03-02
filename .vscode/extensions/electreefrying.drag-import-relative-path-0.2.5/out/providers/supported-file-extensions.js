"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.permittedExts = exports.scssSupported = exports.cssSupported = exports.markdownSupported = exports.htmlSupported = void 0;
/*
  Supported image files extensions
  */
const supportedImages = ['.gif', '.jpeg', '.jpg', '.png', '.webp'];
/*
  Supported import file extensions to HTML
  */
exports.htmlSupported = ['.js', '.css', ...supportedImages];
/*
  Supported import file extensions to Markdown
  */
exports.markdownSupported = ['.md', ...supportedImages];
/*
  Supported import file extensions to CSS
  */
exports.cssSupported = ['.css', ...supportedImages];
/*
  Supported import file extensions to SCSS
  */
exports.scssSupported = ['.scss', '.css', ...supportedImages];
exports.permittedExts = ['.html', '.md', '.css', '.scss', '.tsx', '.jsx'];
