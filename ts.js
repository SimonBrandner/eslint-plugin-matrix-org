module.exports = {
    "parser": "@typescript-eslint/parser",
    "plugins": ["@typescript-eslint"],
    "extends": [
        ".",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
    ],
    rules: {
        // Allow the use of underscore to show args are not used.
        // This is helpful for seeing that a function implements
        // an interface but won't be using one of it's arguments.
        "@typescript-eslint/no-unused-vars": ["error", { "args": "none" }],
        "@typescript-eslint/no-empty-function": ["off"],

        "@typescript-eslint/explicit-module-boundary-types": ["off"],
        "@typescript-eslint/ban-types": ["off"],

        // We use IProps and IState
        "@typescript-eslint/interface-name-prefix": ["off"],

        // Require spaces after colons and around arrows
        "@typescript-eslint/type-annotation-spacing": ["error"],

        // `typescript-eslint` has a rule for semis which conflicts with the
        // original ESLint core rule.
        "semi": ["off"],

        // We're relying on TS types and going with more ad hoc JS docs
        "valid-jsdoc": ["off"],

    }
}
