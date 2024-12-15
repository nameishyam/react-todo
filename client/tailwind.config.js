/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust this based on your project's file structure
    // "./public/index.html", // Include your HTML if applicable
  ],
  theme: {
    extend: {
      //   // Add customizations here, for example:
      //   colors: {
      //     customBlue: "#1DA1F2",
      //   },
      //   spacing: {
      //     '72': '18rem',
      //     '84': '21rem',
      //   },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
