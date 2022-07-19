module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "plugin:react/recommended",
    "airbnb",
    "plugin:react-hooks/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint", "prettier"],
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
    "prettier/prettier": "error",
    "implicit-arrow-linebreak": "off",
    "react/jsx-curly-newline": "off",
    "operator-linebreak": "off",
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": ["error"],
  },
};
