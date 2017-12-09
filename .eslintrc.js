module.exports = {
    parser: 'typescript-eslint-parser',
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        'eslint-config-alloy/typescript'
    ],
    plugins: [
        'typescript'
    ],
    "env": {
        "browser": true,
        "node": true
    },
    "rules": {}
};