import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
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
        }
      }
    },
  },
  plugins: [],
}
export default config
