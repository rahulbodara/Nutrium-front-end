/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [
    require("@tailwindcss/forms")
  ],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      '2xl': {'max': '1535px'},

      'xl': {'max': '1279px'},

      '2lg': {'max': '1199px'},

      'lg': {'max': '991px'},

      'md': {'max': '767px'},

      'sm': {'max': '500px'},
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
          'header-pattern': "url(../../public/image/home-header-bg.svg)",
          'right-arrow': "url(../../public/icon/right-arrow.svg)",
          'right-green-arrow': "url(../../public/icon/green-right-arrow.svg)",
          'video-pattern': "url(../../public/image/bg-video-pattern.svg)",
          'sign-up-pattern': "url(../../public/image/sign-up-bg-pattern.svg)",
          'testimonial-pattern': "url(../../public/image/testimonial-bg-pattern.svg)",
          'home-card-pattern': "url(../../public/image/testimonial-bg-pattern.svg)",
          'footer-pattern': "url(../../public/image/footer-pattern.svg)",
          'slider-pattern-1': "url(../../public/image/slider-pattern-1.svg)",
          'light-heart': "url(../../public/icon/light-heart.png)",
          'nav-logo' : "url(../../public/icon/heart-text.png)",
          'nav-logo-mobile': "url(../../public/image/nav-logo-mobile.png)",
          'small-heart': "url(../../public/image/mob-heart.png)"

          
      },
      boxShadow: {
        'box1': '0 2px 2px 0 rgba(144,144,144,0.14), 0 3px 1px -2px transparent, 0 1px 5px 0 rgba(145,145,145,0.12)',
        'box2':'0 2px 2px 0 rgba(144,144,144,0.14), 0 3px 1px -2px rgba(255,255,255,0), 0 1px 5px 0 rgba(145,145,145,0.12)',
        'innershdaow':'inset 0 3px 5px rgba(0,0,0,0.125)',
        'modal':'0 1px 3px rgba(0,0,0,0.3)',
        'insetbtn':'inset 0 0 10px rgba(0,0,0,0.1)',
      },
      spacing: {
        'custom-margin-top': 'calc(100px - (-0.06875 * 100vw + 98.125px))',
      },
    }
  },

}
