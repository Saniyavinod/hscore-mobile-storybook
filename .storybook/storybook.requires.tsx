/* do not change this file, it is auto generated by storybook. */

import { start, updateView } from "@storybook/react-native";

import "@storybook/addon-ondevice-actions/register";
import "@storybook/addon-ondevice-controls/register";

const normalizedStories = [
  {
    titlePrefix: "",
    directory: "./widgets",
    files: "**/*.stories.@(ts|tsx|js|jsx)",
    importPathMatcher:
      /^\.(?:(?:^|[\\/]|(?:(?:(?!(?:^|[\\/])\.).)*?)[\\/])(?!\.)(?=.)[^\\/]*?\.stories\.(ts|tsx|js|jsx))$/,

    req: require.context(
      "../widgets",
      true,
      /^\.(?:(?:^|[\\/]|(?:(?:(?!(?:^|[\\/])\.).)*?)[\\/])(?!\.)(?=.)[^\\/]*?\.stories\.(ts|tsx|js|jsx))$/
    ),
  },
];

const annotations = [
  require("./preview"),
  require("@storybook/react-native/preview"),
  require("@storybook/addon-ondevice-actions/preview"),
];

global.STORIES = normalizedStories;

module?.hot?.accept?.();

if (!global.view) {
  global.view = start({
    annotations,
    storyEntries: normalizedStories,
  });
} else {
  updateView(global.view, annotations, normalizedStories);
}

export const view = global.view;
