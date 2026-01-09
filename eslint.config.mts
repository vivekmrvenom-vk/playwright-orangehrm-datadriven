import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import playwright from 'eslint-plugin-playwright';

export default [
  // Base JS recommended rules
  js.configs.recommended,

  // TypeScript recommended rules
  ...tseslint.configs.recommended,

  // Playwright-specific rules
  {
    files: ['**/*.ts'],
    plugins: {
      playwright
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      'playwright/no-wait-for-timeout': 'error',
      'playwright/no-force-option': 'warn'
    }
  },

  // Ignore generated folders
  {
    ignores: [
      'node_modules/**',
      'playwright-report/**',
      'test-results/**'
    ]
  }
];
