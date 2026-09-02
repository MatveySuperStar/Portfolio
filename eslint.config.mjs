import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import nextConfig from 'eslint-config-next';
import prettierConfig from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';
import unicorn from 'eslint-plugin-unicorn';
import unusedImports from 'eslint-plugin-unused-imports';

const eslintConfig = [
  ...nextConfig,
  {
    ignores: [
      'node_modules/**',
      '.next/**',
      'out/**',
      'build/**',
      'next-env.d.ts',
      'messages/**/*.d.json.ts',
    ],
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: './tsconfig.json',
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
    },
    rules: {
      '@typescript-eslint/explicit-function-return-type': 'error',
      '@typescript-eslint/no-explicit-any': 'error',
    },
  },
  prettierConfig,
  {
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      'prettier/prettier': [
        'warn',
        {
          printWidth: 80,
          useTabs: false,
          tabWidth: 2,
          semi: true,
          singleQuote: true,
          trailingComma: 'es5',
          bracketSpacing: true,
          arrowParens: 'always',
          htmlWhitespaceSensitivity: 'css',
          jsxSingleQuote: false,
          proseWrap: 'preserve',
        },
      ],
    },
  },
  {
    plugins: {
      'unused-imports': unusedImports,
      unicorn,
    },
    rules: {
      'padding-line-between-statements': [
        'warn',
        { blankLine: 'always', prev: 'directive', next: '*' },
      ],
      '@next/next/no-before-interactive-script-outside-document': 'warn',
      'react/no-unescaped-entities': 'off',
      'no-duplicate-imports': 'warn',
      'unused-imports/no-unused-imports': 'warn',
      'unicorn/prefer-add-event-listener': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'off',
      'no-console': 'warn',
      'unicorn/prevent-abbreviations': 'off',
      'unicorn/no-array-reduce': 'off',
      'unicorn/prefer-global-this': 'off',
      'unicorn/no-array-for-each': 'off',
      'unicorn/filename-case': 'off',
      'unicorn/no-null': 'off',
      'unicorn/no-nested-ternary': 'off',
      'unicorn/explicit-length-check': 'off',
      'react-hooks/rules-of-hooks': 'off',
    },
  },
];
export default eslintConfig;
