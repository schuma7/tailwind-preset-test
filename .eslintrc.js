module.exports = {
  env: {
    node: true,
    browser: true,
    es2021: true,
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['@typescript-eslint', 'simple-import-sort'],
  extends: ['plugin:@typescript-eslint/recommended', './node_modules/gts/'],
  rules: {
    'prettier/prettier': 'warn',
    'linebreak-style': ['error', 'unix'],
    'simple-import-sort/imports': 'warn',
  },
  globals: {
    Edit: 'writable',
    console: 'writable',
    _: 'writable',
    $: 'writable',
  },
  overrides: [
    {
      files: ['orval-fix.js'],
      rules: {'@typescript-eslint/no-var-requires': 'off', 'prefer-arrow-callback': 'off'},
    },
    {
      files: ['**/*.config.{j,t,mt}s', 'config.js'],
      rules: {
        'node/no-unsupported-features/es-syntax': 'off',
        'node/no-unpublished-import': 'off',
        'node/no-missing-import': 'off',
      },
    },
    {
      files: ['**/*.ts', '**/*.tsx'],
      extends: ['plugin:@typescript-eslint/recommended'],
      rules: {
        '@typescript-eslint/no-explicit-any': 'warn',
      },
    },
  ],
};
