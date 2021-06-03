module.exports = {
  purge: {
    content: ['./pages/**/*.js', './components/**/*.js'],
    options: {
      whitelist: [
        'max-w-12',
        'md:max-w-28',
        'md:max-w-716',
        'max-w-md',
        'max-w-3xl',
        'my-6',
        'my-16',
        'py-16',
        'py-20',
        'pt-16',
        'md:px-2',
        'md:px-5',
        'md:px-64',
        'lg:-mt-40',
        'text-5.5xl',
        'text-42px',
        'md:max-w-lg',
        'md:mb-4',
        'max-w-1032',
        'lg:px-64',
        'text-21px',
        'md:text-18px',
        'lg:-mt-49',
        'mr-1.5',
        'ml-1.5'
      ]
    }
  },
  theme: {
    // Breakpoints
    screens: {
      xs: '360px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1240px',
      xxl: '1920px'
    },
    container: {
      screens: {
        sm: '100%',
        md: '100%',
        lg: '1024px',
        xl: '1240px'
      }
    },
    extend: {
      zIndex: {
        4: 4,
        20: 20,
        60: 60
      },
      width: {
        auto: 'auto',
        '962px': '60.125rem',
        '140px': '8.75rem',
        '147px': '9.188rem',
        '152px': '152px',
        '455px': '455px',
        '272px': '272px'
      },
      height: {
        'half-px': '0.03125rem',
        '44px': '2.75rem',
        '58px': '58px',
        '96px': '96px',
        '103px': '103px',
        '110px': '110px',
        '144px': '144px',
        '200px': '12.5rem',
        '255px': '15.938rem',
        '180px': '180px',
        '288px': '18rem',
        '155px': '155px',
        '632px': '632px'
      },
      inset: {
        '1/2': '50%'
      },
      borderRadius: {
        '3xl': '1.5rem'
      },
      colors: {
        gray: {
          100: '#F7F7F7',
          200: '#EFEFEF',
          300: '#E3E3E3',
          400: '#A7A7A7',
          500: '#666666',
          600: '#3F3F3F'
        },
        blue: {
          faint: '#D8EAFE',
          light: '#89C1FC',
          normal: '#3B97FA',
          dark: '#2960C5',
          darkest: '#10489E'
        },
        teal: {
          faint: '#CCEDED',
          light: '#66CAC8',
          normal: '#00A6A4',
          dark: '#007B79'
        },
        coral: {
          light: '#FF9E99',
          normal: '#FF5E55',
          dark: '#D73F3C'
        }
      },
      padding: {
        '1px': '0.0625rem',
        '14px': '0.875rem',
        '15px': '0.9375rem',
        '20px': '1.25rem',
        '30px': '1.875rem',
        '18px': '18px',
        '77px': '77px',
        '73px': '73px',
        '10px': '10px',
        '5px': '5px',
        '6px': '0.375rem'
      },
      fontSize: {
        xxs: '0.55rem',
        '10px': '0.625rem',
        '11px': '0.687rem',
        '12px': '0.75rem',
        '13px': '0.8125rem',
        sm: '0.8125rem',
        '14px': '0.875rem',
        '15px': '0.9375rem',
        '18px': '1.125rem',
        '20px': '1.25rem',
        '21px': '1.3125rem',
        '22px': '1.375rem',
        '24px': '1.75rem',
        '42px': '2.625rem',
        '2xl': '1.5rem',
        '28px': '1.75rem',
        '3xl': '1.875rem',
        '2rem': '2rem',
        '3.5xl': '2rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '5.5xl': '3.5rem',
        '3-halfrem': '3.5rem',
        '6xl': '4rem'
      },
      spacing: {
        '53px': '3.3125rem',
        '351px': '21.93rem',
        '520px': '32.5rem',
        '688px': '43rem',
        'full-screen': '100vw'
      },
      opacity: {
        0: '0',
        5: '0.05',
        10: '0.1',
        20: '0.2',
        25: '0.25',
        30: '0.3',
        40: '0.4',
        50: '0.5',
        60: '0.6',
        70: '0.7',
        75: '0.75',
        80: '0.8',
        90: '0.9',
        95: '0.95',
        100: '1'
      },
      fontFamily: {
        sans: ['Poppins', 'Helvetica', 'Arial', 'sans-serif'],
        poppins: 'Poppins',
        bioRhyme: 'BioRhyme'
      },
      lineHeight: {
        '16px': '1rem',
        '20px': '1.25rem',
        '24px': '1.5rem',
        '42px': '2.625rem',
        '2xl': '2',
      },
      margin: {
        '6px': '0.375rem',
        '-6px': '-0.375rem',
        '-10px': '-0.625rem',
        '15px': '0.9375rem',
        '22px': '1.375rem',
        '36px': '2.25rem',
        '44px': '2.75rem',
        '-44px': '-2.75rem',
        '-49': '-10.7rem',
        '-300': '-20rem'
      }
    },
    minHeight: (theme) => ({
      0: '0',
      ...theme('spacing'),
      '35px': '2.1875rem',
      '185px': '11.562rem',
      '206px': '12.875rem',
      '296px': '18.5rem',
      16: '16rem',
      full: '100%',
      screen: '100vh'
    }),
    maxHeight: (theme) => ({
      0: '0',
      ...theme('spacing'),
      auto: 'auto',
      full: '100%',
      screen: '100vh'
    }),
    minWidth: (theme) => ({
      0: '0',
      ...theme('spacing'),
      full: '100%',
      '1/2': '50%',
      '4/5': '70%',
      '144px': '9rem',
      '160px': '10rem',
    }),
    maxWidth: (theme, { breakpoints }) => ({
      none: 'none',
      xs: '20rem', // 320px
      sm: '24rem', // 384px
      md: '28rem', // 448px
      lg: '32rem', // 512px
      xl: '36rem',
      '2xl': '42rem',
      '3xl': '48rem',
      '4xl': '56rem',
      '5xl': '64rem',
      '6xl': '72rem',
      '144px': '9rem',
      '160px': '10rem',
      full: '100%',
      '1440px': '90rem',
      ...theme('spacing'),
      ...breakpoints(theme('screens'))
    }),
    flex: {
      1: '1 1 0%',
      '1-30': '1 1 30%',
      auto: '1 1 auto',
      initial: '0 1 auto',
      none: 'none'
    },
    plugins: []
  },
  variants: {
    borderWidth: ['responsive', 'last'],
    textTransform: ['responsive', 'last'],
    padding: ['responsive', 'odd', 'last', 'hover'],
    display: ['responsive', 'group-hover', 'hover'],
    boxShadow: ['responsive', 'hover', 'group-hover'],
    margin: ['responsive', 'odd', 'even', 'last', 'first', 'hover'],
    justifyContent: ['responsive', 'hover', 'focus', 'last'],
    textColor: ['responsive', 'group-hover', 'focus-within', 'hover', 'focus'],
    opacity: ['responsive', 'group-hover', 'focus-within', 'hover', 'focus']
  }
}
