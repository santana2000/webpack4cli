module.exports = {
    env: {
        node: true,
        browser: true,
        es2021: true
    },
    extends: ["eslint:recommended", "plugin:vue/essential"],
    parserOptions: {
        ecmaVersion: 12,
        sourceType: "module"
    },
    plugins: ["vue"],
    rules: {
        //2 报错
        //1 警告
        //0 无视

        // "quotes": 2,

        semi: 2,
        singleQuote: false

        // "no-console": 2,
    }
};
