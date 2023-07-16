import type { Preview } from "@storybook/react";
import { withThemeByClassName } from "@storybook/addon-styling";

import "@elf-framework/design-system/style.css";

const preview: Preview = {
  decorators: [
    withThemeByClassName({
      themes: {
        light: "theme-light",
        dark: "theme-dark",
      },
      defaultTheme: "light",
    }),
  ],
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
