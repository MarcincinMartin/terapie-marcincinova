module.exports = {
  content: ["./index.html", "./gdpr.html"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "surface-container": "#efedee",
        "on-surface-variant": "#42474a",
        "on-secondary-container": "#526869",
        "inverse-primary": "#b5cad4",
        "on-secondary": "#ffffff",
        "on-primary-container": "#c1d5e0",
        "soft-moss": "#A7B09E",
        "surface-container-low": "#f5f3f3",
        "surface-container-lowest": "#ffffff",
        "mist-white": "#F7F8F6",
        "inverse-on-surface": "#f2f0f1",
        "fjord-blue": "#2C3E47",
        "secondary-fixed": "#cfe7e7",
        "on-secondary-fixed": "#081f1f",
        "on-tertiary-fixed-variant": "#414845",
        background: "#fbf9f9",
        "on-tertiary-container": "#cdd4cf",
        "inverse-surface": "#303031",
        "tertiary-fixed-dim": "#c1c8c3",
        "surface-bright": "#fbf9f9",
        secondary: "#4d6263",
        "primary-container": "#4a5d66",
        "tertiary-container": "#555c58",
        tertiary: "#3e4541",
        "primary-fixed-dim": "#b5cad4",
        "surface-container-high": "#e9e8e8",
        "heather-gray": "#EDEDED",
        "surface-tint": "#4e616a",
        "surface-variant": "#e4e2e2",
        "on-primary-fixed": "#0a1e26",
        "tertiary-fixed": "#dde4df",
        "on-primary-fixed-variant": "#374952",
        "on-background": "#1b1c1c",
        "on-primary": "#ffffff",
        "on-error": "#ffffff",
        "surface-dim": "#dbdada",
        "on-tertiary": "#ffffff",
        "primary-fixed": "#d1e6f0",
        primary: "#33454e",
        "on-tertiary-fixed": "#161d1a",
        "on-surface": "#1b1c1c",
        "outline-variant": "#c3c7ca",
        surface: "#fbf9f9",
        "secondary-container": "#cfe7e7",
        outline: "#73787b",
        error: "#ba1a1a",
        "error-container": "#ffdad6",
        "on-secondary-fixed-variant": "#354b4b",
        "on-error-container": "#93000a",
        "secondary-fixed-dim": "#b4cbcb",
        "surface-container-highest": "#e4e2e2"
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px"
      },
      spacing: {
        gutter: "24px",
        "container-max": "1140px",
        "section-gap": "120px",
        "margin-mobile": "20px",
        "element-gap": "32px"
      },
      fontFamily: {
        "headline-xl": ["Manrope"],
        "body-lg": ["Inter"],
        "label-sm": ["Inter"],
        "body-md": ["Inter"],
        "headline-lg-mobile": ["Manrope"],
        "headline-lg": ["Manrope"]
      },
      fontSize: {
        "headline-xl": [
          "48px",
          {
            lineHeight: "56px",
            letterSpacing: "-0.02em",
            fontWeight: "300"
          }
        ],
        "body-lg": [
          "18px",
          {
            lineHeight: "30px",
            fontWeight: "400"
          }
        ],
        "label-sm": [
          "13px",
          {
            lineHeight: "16px",
            letterSpacing: "0.05em",
            fontWeight: "600"
          }
        ],
        "body-md": [
          "16px",
          {
            lineHeight: "26px",
            fontWeight: "400"
          }
        ],
        "headline-lg-mobile": [
          "28px",
          {
            lineHeight: "36px",
            fontWeight: "400"
          }
        ],
        "headline-lg": [
          "32px",
          {
            lineHeight: "40px",
            letterSpacing: "-0.01em",
            fontWeight: "400"
          }
        ]
      }
    }
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/container-queries")]
};
