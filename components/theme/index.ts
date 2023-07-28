export default function presetDux() {
  return {
    name: 'dux-theme',
    theme: {
      darkMode: ['class', '[data-mode="dark"]'],
      colors: {
        primary: {
          light: '#4080FF',
          DEFAULT: '#165DFF',
          dark: '#0E42D2',
        },
        secondary: {
          light: '#B787F5',
          DEFAULT: '#883AE1',
          dark: '#7429C6',
        },
        info: {
          light: '#F754A8',
          DEFAULT: '#F5319D',
          dark: '#CB1E83',
        },
        warning: {
          light: '#FF9A2E',
          DEFAULT: '#FF7D00',
          dark: '#D25F00',
        },
        danger: {
          light: '#F76560',
          DEFAULT: '#F53F3F',
          dark: '#CB272D',
        },
        success: {
          light: '#23C343',
          DEFAULT: '#00B42A',
          dark: '#009A29',
        },
        gray: {
          light: '#F9F8F9',
          DEFAULT: '#E3E2E4',
          dark: '#C8C7CB',
        },
        black: {
          light: '#3E3E43',
          DEFAULT: '#2E2E32',
          dark: '#161618',
        },
      },
    },
  }
}
