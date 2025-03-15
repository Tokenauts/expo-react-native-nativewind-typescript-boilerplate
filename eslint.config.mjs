import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import configPrettier from "eslint-config-prettier";
import prettierPlugin from "eslint-plugin-prettier";

export default [
  { files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
  {
    languageOptions: {
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
      globals: { ...globals.browser, ...globals.node },
    },
  },
  {
    linterOptions: {
      reportUnusedDisableDirectives: true,
    },
    rules: {
      "no-unused-vars": "error",
      "no-undef": "error",
      "no-console": "warn",
    },
  },
  ...tseslint.configs.recommended,
  pluginReactConfig,
  {
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      "prettier/prettier": "error", // Adds ESLint rule for Prettier
      "react/react-in-jsx-scope": "off", // Already configured
    },
  },
  {
    settings: {
      react: {
        version: "detect", // Automatically detects React version
      },
    },
  },
  configPrettier, // Ensures ESLint rules don't conflict with Prettier
];
