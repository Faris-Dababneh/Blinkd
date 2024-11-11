// Great effort on expanding the configuration! However, you didn't need to go overboard with adding so many 
// customizations right away. Tailwind’s default config is pretty robust out of the box, and for a basic setup, 
// this initial code would have sufficed:
//
// // /** @type {import('tailwindcss').Config} */
// // const { nextui } = require("@nextui/org/react");
// //
// // module.exports = {
// //   darkMode: ["class"],
// //   content: [
// //     './pages/**/*.{js,jsx}',
// //     './components/**/*.{js,jsx}',
// //     './app/**/*.{js,jsx}',
// //     './src/**/*.{js,jsx}',
// //     "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
// //   ],
// //   prefix: "",
// //   theme: {
// //     extend: {
// //       colors: {
// //         'primary': '#00A9FF', // Blue #4285F4
// //         'secondary': '#8A2BE2', // Purple
// //         'tertiary': '#FF533D', // Red
// //         'highlight': '#FFA500', // Orange
// //         'txt': '#333333',
// //         'whitish': '#F5F5F5',
// //       },
// //     },
// //   },
// //   darkMode: "class",
// //   plugins: [nextui()],
// // }
//
// This approach would have kept things simple for now, but it’s great that you’re exploring more advanced 
// options! As you progress, you can keep adding things as needed, but always try to start simple and 
// iterate as required. Great job again!

   




/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");

module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  prefix: "",
  theme: {
    extend: {
      colors: {
        'primary': '#00A9FF', // Blue #4285F4
        'secondary': '#8A2BE2', // Purple
        'tertiary': '#FF533D', // Red
        'highlight': '#FFA500', // Orange
        'txt': '#333333',
        'whitish': '#F5F5F5',
        'light-blue': '#D0F4F7',
        'dark-gray': '#2C2C2C',
        'warm-gray': '#D4D4D4',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Georgia', 'serif'],
      },
      fontSize: {
        'xxs': '0.625rem',
        'xs': '0.75rem',
        'sm': '0.875rem',
        'md': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
      borderRadius: {
        'none': '0px',
        'sm': '0.125rem',
        'default': '0.25rem',
        'lg': '0.375rem',
        'xl': '0.5rem',
        '2xl': '0.75rem',
        '3xl': '1rem',
        'full': '9999px',
      },
      boxShadow: {
        'sm': '0 1px 2px rgba(0, 0, 0, 0.05)',
        'default': '0 1px 3px rgba(0, 0, 0, 0.1)',
        'md': '0 4px 6px rgba(0, 0, 0, 0.1)',
        'lg': '0 10px 15px rgba(0, 0, 0, 0.1)',
        'xl': '0 15px 25px rgba(0, 0, 0, 0.1)',
        '2xl': '0 20px 30px rgba(0, 0, 0, 0.1)',
        '3xl': '0 25px 35px rgba(0, 0, 0, 0.1)',
      },
      screens: {
        'xs': '375px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
        '3xl': '1920px',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        bounce: {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out',
        bounce: 'bounce 1s infinite',
      },
      gridTemplateColumns: {
        'auto-fit': 'repeat(auto-fit, minmax(200px, 1fr))',
        'custom': 'repeat(3, minmax(0, 1fr))',
      },
      zIndex: {
        '0': 0,
        '10': 10,
        '20': 20,
        '30': 30,
        '40': 40,
        '50': 50,
        'max': '9999',
      },
      transitionTimingFunction: {
        'easy-in': 'ease-in',
        'easy-out': 'ease-out',
        'easy-in-out': 'ease-in-out',
      },
      transitionDuration: {
        'default': '200ms',
        'fast': '100ms',
        'slow': '300ms',
        'ultra-slow': '500ms',
      },
      textColor: {
        'primary': '#00A9FF',
        'secondary': '#8A2BE2',
        'tertiary': '#FF533D',
        'txt': '#333333',
      },
      backgroundColor: {
        'primary': '#00A9FF',
        'secondary': '#8A2BE2',
        'tertiary': '#FF533D',
        'highlight': '#FFA500',
        'txt': '#333333',
      },
      backgroundImage: {
        'hero-pattern': 'url(/images/hero-pattern.png)',
        'footer-texture': 'url(/images/footer-texture.png)',
      },
      height: {
        'screen': '100vh',
        'half-screen': '50vh',
      },
      minHeight: {
        'screen': '100vh',
        'half-screen': '50vh',
      },
      width: {
        'screen': '100vw',
        'half-screen': '50vw',
      },
      minWidth: {
        'screen': '100vw',
        'half-screen': '50vw',
      },
      transitionProperty: {
        'color': 'color',
        'background': 'background-color',
        'transform': 'transform',
        'all': 'all',
      },
      inset: {
        '0': '0',
        '1/2': '50%',
        'full': '100%',
      },
      fontWeight: {
        'light': '300',
        'normal': '400',
        'bold': '700',
        'extra-bold': '900',
      },
    },
  },
  plugins: [
    nextui(),
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/container-queries'),
  ],
}
