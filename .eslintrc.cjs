module.exports = {
	root: true,
	parser: "@typescript-eslint/parser",
	extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
	plugins: ["svelte3", "@typescript-eslint"],
	overrides: [{ files: ["*.svelte"], processor: "svelte3/svelte3" }],
	settings: {
		"svelte3/typescript": () => require("typescript"),
		"svelte3/ignore-styles": () => true
	},
	parserOptions: {
		sourceType: "module",
		ecmaVersion: 2021
	},
	env: {
		browser: true,
		node: true,
		es2021: true,
	},
	rules: {
		indent: ["error", 2],
		semi: ["error", "always"],
		quotes: ["error", "double"],
		camelcase: ["error", {
			properties: "always",
			ignoreDestructuring: true, 
		}],
	}
};
