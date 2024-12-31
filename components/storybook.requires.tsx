import { start, updateView } from "@storybook/react-native";
import "@storybook/addon-ondevice-controls/register";
import "@storybook/addon-ondevice-actions/register";

const normalizedStories = [
  {
    titlePrefix: "",
    directory: "./widgets",  // Update the directory to point to widgets
    files: "**/*.stories.?(ts|tsx|js|jsx)",
    importPathMatcher:
      /^\.(?:(?:^|[\\/]|(?:(?:(?!(?:^|[\\/])\.).)*?)[\\/])(?!\.)(?=.)[^\\/]*?\.stories\.(?:ts|tsx|js|jsx)?)$/,

    req: require.context(
      "../widgets",  // Update the directory to point to widgets
      true,
      /^\.(?:(?:^|[\\/]|(?:(?:(?!(?:^|[\\/])\.).)*?)[\\/])(?!\.)(?=.)[^\\/]*?\.stories\.(?:ts|tsx|js|jsx)?)$/
    ),
  },
];

const annotations = [
  require("./preview"),
  require("@storybook/react-native/dist/preview"),
  require("@storybook/addon-actions/preview"),
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
