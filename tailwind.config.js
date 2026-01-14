/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'loop': ['Sarabun', 'sans-serif'],    // 有頭（Loop）：公文書フォント
        'noloop': ['Kanit', 'sans-serif'],    // 無頭（No-Loop）：モダンフォント
      },
    },
  },
  plugins: [],
}

