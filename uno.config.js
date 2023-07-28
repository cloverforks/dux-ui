import {
  defineConfig,
  presetIcons,
  presetTypography,
  presetUno,
  transformerDirectives,
} from 'unocss'
import presetDux from './components/theme'

export default defineConfig({
  presets: [presetUno(), presetIcons(), presetTypography(), presetDux()],
  transformers: [transformerDirectives()],

  theme: presetDux().theme,
  shortcuts: {
    'text-placeholder': 'text-black/30 dark:text-gray/30',
  },
  screens: {
    'dark-mode': { raw: '(prefers-color-scheme: dark)' },
  },
})
