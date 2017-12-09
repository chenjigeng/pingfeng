module.exports = {
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
    "rules": {
        "indent": ["error", 2]
    }
};