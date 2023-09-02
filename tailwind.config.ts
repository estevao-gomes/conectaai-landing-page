import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'md': '734px',

      'xl': '1439px'
    },
    extend: {
      backgroundImage: {
        'hero-pattern' : 'url(/assets/bgImage.jpeg)'
      },
      fontFamily: {
        'inter' : ['var(--font-inter)'],
        'roboto' : ['var(--font-roboto)'],
        'serif' : ['var(--font-pt)']
      },
      colors : {
        'verde' : {
          '600' : '#00EC5B'
        },
        'button' : {
          '500' : '#101213'
        },
        'preto' : {
          '500' : "#1B1F1C"

        },
        'cinza' : {
          '500' : 'rgba(255, 255, 255, 0.20)'
        }
      },
      boxShadow : {
        'card' : '0px 8px 24px -4px rgba(0, 0, 0, 0.25)'
      }
    },
  },
  plugins: [],
}
export default config
