module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "plugin:react-hooks/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "import/prefer-default-export": 0,
    "react/function-component-definition": 0,
    "import/order": 0,
    "import/no-unresolved": 0,
    "import/extensions": 0,
    quotes: 0,
    "react/jsx-filename-extension": [1, { extensions: [".tsx", ".ts"] }],
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": ["error"],
  },
};
