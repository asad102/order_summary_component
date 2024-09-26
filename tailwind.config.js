/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./**/*.html",
  ],
  theme: {
    fontFamily : {
      redhat : ['Red Hat Display', 'sans'],
    },
    colors : {
      bggg : '#E0E8FF',
      White : '#FFF',
      mbg : '#F7F9FF',
      cd : '#1F2E55',
      tp : '#717FA6',
      ch : '#382AE1',

    },
    
    extend: {
      backgroundImage: {
        'mobile-pattern': "url('/img/pattern-background-mobile.svg')",
        'desktop-pattern': "url('/img/pattern-background-desktop.svg')",
      },
      spacing : {
        6 : '6px',
        15 : '15px',
        450 : '450px',
        17 : '17px',
        20 : '20px',
        24 : '24px',
        32 : '32px',
        45 : '45px',
        50 : '50px'
      },
      borderRadius : {
        11 : '11px',
        20 : '20px',
      },
      fontSize : {
        "preset-1" : ['28px',{
          lineHeight : '37px',
          letterSpacing : '0px',
          fontWeight : '900'
        }],
        'preset-2' : ['16px',{
          lineHeight : '26px',
          letterSpacing : '0px',
          fontWeight : '500'
        }],
        "preset-3" : ['16px',{
          lineHeight : '21px',
          letterSpacing : '0px',
          fontWeight : '900'
        }],
        "preset-4" : ['14px', {
          lineHeight : '19px',
          letterSpacing : '0x',
          fontWeight : '700',
        }],
        "preset-5" : ['15px', {
          lineHeight : '20px',
          letterSpacing : '0x',
          fontWeight : '900',
        }],
      },
    },
  },
  plugins: [],
}

