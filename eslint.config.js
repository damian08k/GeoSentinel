import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import importPlugin from 'eslint-plugin-import';
import tseslint from 'typescript-eslint';
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs.flat.recommended,
      reactRefresh.configs.vite,
      importPlugin.flatConfigs.recommended,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    settings: {
      'import/parsers': {
        '@typescript-eslint/parser': ['.ts', '.tsx'],
      },
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
          project: './tsconfig.app.json',
        },
      },
    },
    rules: {
      'import/no-unresolved': 'error',
      'import/named': 'warn',
      'import/namespace': 'warn',
      'import/no-named-as-default': 'off',
      'import/export': 'warn',
      'import/order': [
        'error',
        {
          groups: [
            ['builtin', 'type'],
            'index',
            'external',
            'object',
            'internal',
            'parent',
            'sibling',
          ],
          pathGroups: [
            {
              pattern: './components/**',
              group: 'internal',
              position: 'before',
            },
            {
              pattern: './*.module.css',
              group: 'sibling',
              position: 'after',
            },
            {
              pattern: 'tests/**',
              group: 'sibling',
              position: 'before',
            },
            {
              pattern: 'assets/**',
              group: 'sibling',
              position: 'before',
            },
          ],
          'newlines-between': 'always',
          alphabetize: {
            order: 'asc',
            caseInsensitive: true,
          },
        },
      ],
    },
  },
]);
