import type { Preview } from "@storybook/react";
import "@elf-framework/design-system/style.css";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    options: {
      storySort: {
        method: "configure",
        includeNames: true,
        order: [
          "Introduction",
          "Foundation",
          [
            "Components",
            [
              ["Actions", ["Button", "Action Group", "Toolbar", "Menu"]],
              "Containers",
              "Feed Backs",
              "Inputs",
              "Navigations",
              "Status",
              "Pattern",
            ],
          ],
        ],
      },
    },
  },
};

export default preview;
