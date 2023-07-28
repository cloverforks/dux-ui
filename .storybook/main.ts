import type { StorybookConfig } from "@storybook/react-vite";
import Unocss from 'unocss/vite';
const tsconfigPaths = require("vite-tsconfig-paths");
const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)", "../components/**/*.mdx", "../components/**/*stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-interactions", "@storybook/addon-styling", '@storybook/addon-a11y', '@storybook/addon-coverage', "storybook-addon-pseudo-states", "storybook-addon-paddings", '@storybook/addon-storysource', '@storybook/addon-docs', "@storybook/addon-mdx-gfm"],
  framework: {
    name: "@storybook/react-vite",
    options: {}
  },
  docs: {
    autodocs: "tag",
    defaultName: 'Docs'
  },
  viteFinal(config) {
    config.plugins?.push(Unocss());
    config.plugins?.push(tsconfigPaths.default());
    return config;
  },
  core: {
    builder: '@storybook/builder-vite',
  },
  typescript: {
    reactDocgen: 'react-docgen'
  }
};
export default config;