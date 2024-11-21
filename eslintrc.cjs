module.exports = {
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
    "prettier",
    "plugin:prettier/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  plugins: ["simple-import-sort", "i18next"],
  overrides: [
    {
      files: ["*.js", "*.jsx", "*.ts", "*.tsx"],
      rules: {
        "simple-import-sort/imports": [
          "warn",
          {
            groups: [
              ["^react", "^@?\\w"],
              ["^(@|api|assets|components|constants|hooks|pages|types|utils|store)(/.*|$)"],
              ["^\\u0000"],
              ["^\\.\\.(?!/?$)", "^\\.\\./?$"],
              ["^\\./(?=.*/)(?!/?$)", "^\\.(?!/?$)", "^\\./?$"],
              ["^.+\\.?(css)$"],
            ],
          },
        ],
      },
    },
  ],
  rules: {
    eqeqeq: ["warn", "always"],
    "max-params": ["warn", 3],
    "no-extra-boolean-cast": [
      "error",
      {
        enforceForLogicalOperands: true,
      },
    ],
    "react/no-unescaped-entities": 0,
    "jsx-quotes": [1, "prefer-double"],
    "object-curly-spacing": ["warn", "always"],
    "func-style": ["error", "expression", { allowArrowFunctions: true }],
    "no-restricted-imports": [
      "error",
      {
        patterns: ["*.ts", "*.tsx"],
      },
    ],
    "prefer-promise-reject-errors": ["error"],
    "array-bracket-spacing": ["error", "never"],
    "arrow-spacing": "warn",
    "block-spacing": "warn",
    "@typescript-eslint/no-unused-vars": ["error"],
    "require-jsdoc": 0,
    "operator-linebreak": [
      "error",
      "after",
      {
        overrides: {
          "?": "before",
          ":": "before",
        },
      },
    ],
    "linebreak-style": 0,
    "no-unused-vars": "off",
    "simple-import-sort/imports": "warn",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "offset-ternary-expressions": 0,
    "i18next/no-literal-string": 2,
    "@typescript-eslint/no-empty-interface": 0,
    "no-console": 1,
  },
};