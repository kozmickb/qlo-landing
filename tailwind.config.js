module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        qloPink: '#FF3F8D',
        qloOrchid: '#D764D4',
        qloViolet: '#AD5CFF',
      },
      backgroundImage: {
        'qlo-gradient': 'linear-gradient(to right, #FF3F8D, #D764D4, #AD5CFF)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
