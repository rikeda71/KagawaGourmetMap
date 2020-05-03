import { configure } from '@storybook/react';
import { setConsoleOptions } from '@storybook/addon-console';
import "@babel/polyfill";

setConsoleOptions({
  panelExclude: []
});

function loadStories() {
  let req = require.context("../src", true, /.stories.(tsx|js)$/);
  req.keys().forEach(filename => req(filename));
  req = require.context("../src/stories", true, /.(tsx|js)$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);