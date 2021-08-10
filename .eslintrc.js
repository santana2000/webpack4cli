module.exports = {
    "env": {
        "node": true,
        "browser": true,
        "es2021": true,
    },
    "extends": [
        "eslint:recommended",
        "plugin:vue/essential"
    ],
    "parserOptions": {
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "plugins": [
        "vue"
    ],
    "rules": {
        // "quotes": 2,
        "semi": 2,
        "no-console": 1,
    }
};
