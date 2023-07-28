<p align="center">
<a href="https://www.duxravel.com/">
    <img src="https://github.com/duxphp/duxravel/blob/main/resources/image/watermark.png?raw=true" width="100" height="100">
</a>

<h1 align="center">Dux UI</h1>


<p align="center">A beautiful web component library based on React using the Headless UI library and Unocss.</p>

<p align="center">
  <img alt="Version" src="https://img.shields.io/badge/version-Alpha-red.svg?cacheSeconds=2592000" />
  <a href="https://github.com/duxweb/dux-ui/blob/main/LICENSE" target="_blank">
    <img alt="License: MIT" src="https://img.shields.io/badge/License-MIT-yellow.svg" />
  </a>
</p>


## 💥 Version

Warning: This version is for development purposes only. Some features are still under development and there may be inevitable bugs. Please do not use it in a production environment.

## 🎯 Features

- ✨ Unified design standards, using a unified and lightweight design style for the theme, without the need for complex UI customization.
- 🚀 Ark, Radix, using high-quality basic unstyled libraries, provides a stable and reliable base guarantee.
- 🎨 UnoCSS customization, based on UnoCSS as CSS processor, development with Unocss presets, use of UI libraries while freely using UnoCSS.
- 📦 Ahook, which uses Ahook as a base Hook to make components more reliable.
- 🛠️ TypeScript, written in TypeScript, is type-safe and fully parameter-aware.
- 📱 Accessibility support, each component supports ARIA keyboard accessibility, easy to use for special populations.


##  ⚡ Installation

```sh
yarn add @duxweb/dux-ui
```

To develop with React 18, make sure the React version number is >= 18.x, and install the [UnoCSS](https://unocss.dev/integrations/) 。


```ts
// uno.config.ts
import { defineConfig, presetUno, presetIcons, presetTypography } from 'unocss';
import { presetDux, DuxProvider } from '@duxweb/dux-ui'

export default defineConfig({
  ... 
  presets: [
    presetUno(),
    presetIcons(),
    presetTypography(),
    presetDux(),
    ...
  ]
})

```

## Usage


```js
import React from "react";
import ReactDOM from "react-dom";

import { Provider, Button } from "@duxweb/dux-ui";

ReactDOM.render(
  <Provider locale={context.globals.locale}>
    <Button color="primary">Hello Arco</Button>
  </Provider>,
  document.querySelector("#root")
);
```

# Development

```bash
$ git clone git@github.com:duxweb/dux-ui.git
$ cd dux-ui
$ yarn
$ yarn dev
```