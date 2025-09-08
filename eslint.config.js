import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{js,jsx}'],
    extends: [
      js.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.browser,
        ...globals.cypress,
      },
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    rules: {
      'no-unused-vars': ['error', { varsIgnorePattern: '^[A-Z_]' }],
    },
  },
  {
    files: ['cypress/**/*.js'],
    plugins: {
      cypress: (await import('eslint-plugin-cypress')).default || (await import('eslint-plugin-cypress')),
    },
    languageOptions: {
      globals: {
        ...globals.node,
        cy: false,
        Cypress: false,
        expect: false,
        assert: false,
        chai: false,
        ...globals.browser,
        ...globals.mocha,
      },
    },
    rules: {},
  },
])
