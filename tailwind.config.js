module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      'gold': '#EDB50F',
      },
      fontFamily: {
        'sans': ['ui-sans-serif', 'system-ui','Roboto', 'Arial','Helvetica neue','Noto sans','Segoe UI'],
        'serif': ['ui-serif', 'Georgia', 'robot'],
        'mono': ['ui-monospace', 'SFMono-Regular'],
        'display': ['Oswald'],
        'body': ['"Open Sans"'],
      }
    },
  },
  plugins: [],
}
