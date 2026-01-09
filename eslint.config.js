import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import playwright from 'eslint-plugin-playwright';

export default [
    js.configs.recommended,

    ...tseslint.configs.recommended,

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
    }
];
{
    ignores: [
        'node_modules/**',
        'playwright-report/**',
        'test-results/**'
    ]
}
