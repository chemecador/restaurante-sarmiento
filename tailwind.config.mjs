/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        sarmiento: {
          cream:   '#F5EFE0',
          brown:   '#5C3D2E',
          amber:   '#C8832A',
          dark:    '#2C1A0E',
          muted:   '#8B6F5E',
        },
      },
      fontFamily: {
        serif:  ['Playfair Display', 'Georgia', 'serif'],
        sans:   ['Lato', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
