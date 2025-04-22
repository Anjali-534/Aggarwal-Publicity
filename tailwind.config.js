module.exports = {
    theme: {
      extend: {
        keyframes: {
          collageAnimation: {
            '0%, 100%': {
              transform: 'translate(0px, 0px) scale(1)',
            },
            '50%': {
              transform: 'translate(10px, -10px) scale(1.1)',
            },
          },
        },
        animation: {
          collage: 'collageAnimation 4s ease-in-out infinite',
        },
      },
    },
    plugins: [],
  }
  