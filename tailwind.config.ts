import {nextui} from '@nextui-org/theme';
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/components/(button|popover|ripple|spinner).js"
  ],
  theme: {
    extend: {
      colors: {
        primary: 'hsl(var(--color-primary) / <alpha-value>)',
        secondary: 'hsl(var(--color-secondary) / <alpha-value>)',
        button: 'hsl(var(--color-button) / <alpha-value>)',
        border: 'hsl(var(--color-border) / <alpha-value>)',
        card: 'hsl(var(--color-card) / <alpha-value>)',
        icon: 'hsl(var(--color-icon) / <alpha-value>)',
        typography: 'hsl(var(--color-typography) / <alpha-value>)',
        bkg: "hsl(var(--color-bkg) / <alpha-value>)",
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      
    },
  },
  //plugins: [require(@tailwindcss/forms),nextui()],
  plugins: [nextui()],
  darkMode: 'class',
};
export default config;
