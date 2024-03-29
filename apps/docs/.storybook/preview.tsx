import type { Preview } from "@storybook/react";
import { withThemeByClassName } from "@storybook/addon-styling";

import "@elf-framework/design-system/style.css";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    docs: {
      toc: {
        contentsSelector: ".sbdocs-content",
        headingSelector: "h1, h2, h3",
        ignoreSelector: "#primary",
        title: "Table of Contents",
        disable: false,
        unsafeTocbotOptions: {
          orderedList: false,
        },
      },
    },
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
