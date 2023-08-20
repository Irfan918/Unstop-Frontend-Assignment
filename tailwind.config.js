/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "secondary-1": "#0073e6",
        gainsboro: "#dadce0",
        "text-100": "#1c4980",
        "accent-pink": "#e9407a",
        "text-white": "#fff",
        "pastel-neon-blue": "#6548ee",
        "text-50": "#8da4bf",
        "pastel-royal-blue": "#3079e1",
        "system-background": "#f6f8fa",
        "status-success": "#05c165",
        "system-divider": "#dde5ea",
        "accent-red-light": "#fbebea",
        "accent-new-red": "#d63500",
        aliceblue: "#e5f1fc",
        "accent-blue-light": "#ddedff",
        "secondary-5": "#f2f8fe",
        "text-85": "#3e6493",
      },
      fontFamily: {
        inter: "Inter",
      },
      borderRadius: {
        "13xl-7": "32.7px",
        "31xl": "50px",
        "21xl": "40px",
        "32xl-4": "51.4px",
        "53xl": "72px",
        "51xl": "70px",
        "3xl": "22px",
        "3xs": "10px",
        mini: "15px",
        "41xl": "60px",
      },
    },
    fontSize: {
      sm: "14px",
      xs: "12px",
      "3xs": "10px",
      base: "16px",
      lg: "18px",
      xl: "20px",
      inherit: "inherit",
    },
  },
  corePlugins: {
    preflight: false,
  },
};
