/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
          'header-pattern': "url(../../public/image/home-header-bg.svg)",
          'right-arrow': "url(../../public/icon/right-arrow.svg)",
          'video-pattern': "url(../../public/image/bg-video-pattern.svg)",
          'sign-up-pattern': "url(../../public/image/sign-up-bg-pattern.svg)"
          
      },
    }
  },

  plugins: [],
}
