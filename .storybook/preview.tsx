import React from "react";
import { View } from "react-native";
import { Preview } from '@storybook/react';

// Define the preview object with type annotations
const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },

  decorators: [
    (Story, { parameters }) => (
      <View
        style={{
          flex: 1,
          backgroundColor: parameters.noBackground === true ? undefined : "white",
          padding: 8,
        }}
      >
        <Story />
      </View>
    ),
  ],
};

export default preview;
