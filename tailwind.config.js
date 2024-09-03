/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily:{
        'sasti': [ 'Satisfy', 'cursive'],
      },  
    },
    screens:{
      "2xl": {max:"1535px"},
      // => @media(max-width: 1535px)
      xl: {max: "1279px"},
      // => @media (max-width: 1279px)
      lg: {max: "1023px"},
      // => @media (max-width: 1023px)
      md: {max: "767px"},
      // => @media (max-width: 767px)
      sm: {max: "639px"},
      // => @media (max-width: 639px)
      xs: {max: "479px"},
      // => @media (max-width: 479px)

    },
    
    colors:{
      dark: "#1b1b1b",
      light: "#eff4fd",
      primary: "#2896b2",
      primaryback: "#B63E96",
      primaryDark: "#5BE6D9",
      transparent: " "
    },
    backgroundImage:{
      circularLight:'repeating-radial-gradient(rgba(0,0,0,0.4) 2px, #eff4fd 5px, #eff4fd 100px);',
      circularDark:'repeating-radial-gradient(rgba(255,255,255,0.6) 2px, #1b1b1b 8px, #1b1b1b 100px);',
      circularLightlg:'repeating-radial-gradient(rgba(0,0,0,0.4) 2px, #eff4fd 5px, #eff4fd 80px);',
      circularDarklg:'repeating-radial-gradient(rgba(255,255,255,0.6) 2px, #1b1b1b 8px, #1b1b1b 80px);',
      circularLightMb:'repeating-radial-gradient(rgba(0,0,0,0.4) 2px, #eff4fd 5px, #eff4fd 60px);',
      circularDarkMb:'repeating-radial-gradient(rgba(255,255,255,0.6) 2px, #1b1b1b 6px, #1b1b1b 60px);',
      circularLightSm:'repeating-radial-gradient(rgba(0,0,0,0.4) 2px, #eff4fd 5px, #eff4fd 40px);',
      circularDarkSm:'repeating-radial-gradient(rgba(255,255,255,0.6) 2px, #1b1b1b 4px, #1b1b1b 40px);',
    },
    transformOrigin:{
      transform: 'translateX(-50%);'
    },
    transitionDelay:{
      transition: 'bottom 1s, left 1s;'
    }
    
  },
  plugins: [],
}
