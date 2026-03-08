import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

/** @type {import('eslint').Linter.Config[]} */
export default defineConfig([
  js.configs.recommended,
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    plugins: { js },
    extends: ["js/recommended"],
    languageOptions: {
      globals: {
        ...globals.browser,
        describe: true,
        test: true,
        it: true,
        expect: true,
        require: true,
        module: true,
        process: true,
      },
    },
  },
]);
