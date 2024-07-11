import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize : {
        'base' : '16px',
      },
      fontFamily: {
        'oswald': ['Oswald', 'sans-serif'],
      },
        colors: {
          'grey': '#818181',
          'myred': '#e62b4a',
          'lightgrey': '#e5e7eb',
          'transblack': 'hsla(0, 0%, 0%, 0.92)',
          'transparent' : '#ffffff24'
        },
        width: {
          '81': '21rem',
        '82': '22rem',
        "84": "336px",
        "88": "352px",
        '238': "950px",
        '138': '35rem',
        '130': '500px',
        '134': '513px',
        '148': '600px',
        '126': '450px',
        '155': '700px',
        '90': '350px',
       
        

      },
      height: {
        '138': '35rem',
        '238': '950px',
         '130': '500px',
         '120': '400px',
          '148': '600px',
          '134': '530px',
          '128': '470px'


      },
      padding: {
        '26' : '6.5rem'
      }
      
    },
  },
  plugins: [],
};
export default config;
