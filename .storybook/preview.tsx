import React from "react";
import type { Preview } from "@storybook/react";
import { withThemeByClassName } from '@storybook/addon-styling';
import DuxProvider from '../components/provider';
import '@unocss/reset/tailwind-compat.css';
import 'virtual:uno.css';
import './styles.css';


export const decorators = [
  withThemeByClassName({
    themes: {
      light: 'light',
      dark: 'dark',
    },
    defaultTheme: 'light',
  }),
];

export const preview: Preview = {
  parameters: {
    layout: 'medium',
    paddings: {
      values: [
        { name: 'Small', value: '16px' },
        { name: 'Medium', value: '32px' },
        { name: 'Large', value: '64px' },
      ],
      default: 'Medium',
    },
    actions: { argTypesRegex: "^on.*" },
    controls: {
      expanded: true,
      matchers: {
        // color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: {
      autodocs: true,
    },
  },
  decorators: [
    (Story, context) => {
      return <DuxProvider locale={context.globals.locale}>
      <Story />
    </DuxProvider>
    },
  ],
}
