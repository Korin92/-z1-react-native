export const RULES = {
    OFF: 'off',
    WARN: 'warn',
    ERROR: 'error',
}
module.exports = {
    root: true,
    env: {
        browser: true,
        es2021: true,
        node: true,
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
    extends: [
        '@react-native-community',
        'plugin:react/recommended',
        'standard-with-typescript',
        'prettier',
    ],
    overrides: [
        {
            env: {
                node: true,
            },
            files: ['.eslintrc.{js,cjs,mjs,ts,cts,tsx}'],
            parserOptions: {
                sourceType: 'script',
            },
        },
        {
            files: ['**/*.css'],
            plugins: ['css'],
            rules: {
                'css/recommended': 'error',
            },
        },
    ],
    parserOptions: {
        ecmaFeatures: {
            tsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json',
        extraFileExtensions: ['.css'],
    },
    plugins: ['react'],
    parser: '@typescript-eslint/parser',
}
