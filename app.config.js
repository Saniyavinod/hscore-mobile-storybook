// Log the value of STORYBOOK_ENABLED
console.log("STORYBOOK_ENABLED:", process.env.STORYBOOK_ENABLED);

export default ({ config }) => {
  // Log the initial config to debug
  console.log("Initial Config:", config);

  // Ensure config.extra exists before adding properties to it
  if (!config.extra) {
    config.extra = {};
  }

  // Log the final config for verification
  const finalConfig = {
    ...config,
    name: "hscore-mobile-storybook",       // Change this to your new project name
    slug: "hscore-mobile-storybook",       // Change this to your new project slug
    newArchEnabled: true,                  // Enable New Architecture
    extra: {
      ...config.extra,
      storybookEnabled: process.env.STORYBOOK_ENABLED || false,
    },
  };

  console.log("Final Config:", finalConfig);

  return finalConfig;
};
