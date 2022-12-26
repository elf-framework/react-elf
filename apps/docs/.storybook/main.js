const path = require("path");

module.exports = {
  stories: [
    "../stories/foundation/*.stories.mdx", 
    "../stories/**/*.stories.mdx", 
    "../stories/foundation/*.stories.tsx", 
    "../stories/**/*.stories.tsx"
  ],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-vite",
  },
  async viteFinal(config, { configType }) {
    // customize the Vite config here
    return {
      ...config,
    };
  },
};
