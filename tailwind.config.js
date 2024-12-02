/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html, ts}', // Para arquivos HTML e JS dentro da pasta src
    './*.html',// Para todos os arquivos HTML na raiz do projeto
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}