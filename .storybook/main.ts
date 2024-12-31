import type { StorybookConfig } from '@storybook/react-native';

const config: StorybookConfig = {
  stories: ['../widgets/**/*.stories.@(ts|tsx|js|jsx)'],  // Adjust the path to include the widgets folder
  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-ondevice-actions',
    '@storybook/addon-ondevice-controls',
  ],
};

export default config;
