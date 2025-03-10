import sonarjs from "eslint-plugin-sonarjs";
import unicorn from "eslint-plugin-unicorn";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import unusedImports from "eslint-plugin-unused-imports";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";

export default [
	{
		ignores: ["**/webpack.config.js", "**/documentation", "**/*.gql"]
	},
	{
		files: ["**/*.ts", "**/*.tsx", "**/*.js", "**/*.jsx"],

		plugins: {
			sonarjs,
			unicorn,
			"simple-import-sort": simpleImportSort,
			"unused-imports": unusedImports
		},

		rules: {
			"no-extra-boolean-cast": "error",
			"no-extra-parens": "off",
			"no-extra-semi": "error",
			"no-regex-spaces": "error",
			"curly": "error",
			"dot-location": "off",
			"dot-notation": "off",
			"eqeqeq": "error",
			"no-div-regex": "error",
			"no-else-return": "error",
			"no-extra-bind": "error",
			"no-extra-label": "error",
			"no-floating-decimal": "error",
			"no-implicit-coercion": "error",
			"no-multi-spaces": "error",
			"no-unused-labels": "error",
			"no-useless-return": "error",
			"wrap-iife": "error",
			"yoda": "error",
			"strict": "off",
			"no-undef-init": "error",
			"array-bracket-newline": "off",
			"array-bracket-spacing": "error",
			"array-element-newline": "off",
			"block-spacing": "error",
			"brace-style": "off",
			"capitalized-comments": "off",
			"comma-dangle": "off",
			"comma-spacing": "error",
			"computed-property-spacing": "error",
			"eol-last": "error",
			"func-call-spacing": "error",
			"function-call-argument-newline": "off",
			"function-paren-newline": "off",
			"indent": "off",
			"jsx-quotes": "off",
			"key-spacing": "error",
			"keyword-spacing": "error",
			"linebreak-style": "error",
			"lines-around-comment": "off",

			"lines-between-class-members": [
				"error",
				"always",
				{
					exceptAfterSingleLine: true
				}
			],

			"multiline-comment-style": ["error", "separate-lines"],
			"multiline-ternary": "off",
			"new-parens": "error",
			"newline-per-chained-call": "off",
			"no-lonely-if": "error",
			"no-multiple-empty-lines": "off",
			"no-trailing-spaces": "off",
			"no-unneeded-ternary": "error",
			"no-whitespace-before-property": "error",
			"nonblock-statement-body-position": "error",
			"object-curly-newline": "error",
			"object-curly-spacing": ["error", "always"],
			"object-property-newline": "off",
			"one-var": "off",
			"one-var-declaration-per-line": "error",
			"operator-assignment": "error",
			"operator-linebreak": "error",
			"padded-blocks": "off",
			"padding-line-between-statements": "error",
			"prefer-exponentiation-operator": "error",
			"prefer-object-spread": "error",
			"quote-props": "off",
			"quotes": "off",
			"semi": "error",
			"semi-spacing": "error",
			"semi-style": "error",
			"sort-vars": "error",
			"space-before-blocks": "error",
			"space-before-function-paren": "off",
			"space-in-parens": "error",
			"space-infix-ops": "error",
			"space-unary-ops": "error",
			"spaced-comment": "error",
			"switch-colon-spacing": "error",
			"template-tag-spacing": "error",
			"unicode-bom": "error",
			"wrap-regex": "off",
			"arrow-body-style": "error",
			"arrow-parens": "error",
			"arrow-spacing": "error",
			"generator-star-spacing": "error",
			"no-confusing-arrow": "off",
			"no-useless-computed-key": "error",
			"no-useless-rename": "error",
			"no-var": "error",
			"object-shorthand": "error",
			"prefer-arrow-callback": "error",
			"prefer-const": "error",
			"prefer-destructuring": "error",
			"prefer-numeric-literals": "error",
			"prefer-template": "error",
			"rest-spread-spacing": "error",
			"sort-imports": "off",
			"template-curly-spacing": "error",
			"yield-star-spacing": "error",
			"sonarjs/no-inverted-boolean-check": "error",
			"sonarjs/prefer-immediate-return": "error",
			"sonarjs/prefer-while": "off",
			"unicorn/better-regex": "error",
			"unicorn/catch-error-name": "error",
			"unicorn/consistent-destructuring": "off",
			"unicorn/custom-error-definition": "off",
			"unicorn/empty-brace-spaces": "error",
			"unicorn/escape-case": "error",
			"unicorn/explicit-length-check": "error",
			"unicorn/import-index": "error",
			"unicorn/new-for-builtins": "error",
			"unicorn/no-array-for-each": "error",
			"unicorn/no-array-method-this-argument": "off",
			"unicorn/no-array-push-push": "error",
			"unicorn/no-console-spaces": "error",
			"unicorn/no-for-loop": "error",
			"unicorn/no-hex-escape": "error",
			"unicorn/no-instanceof-array": "error",
			"unicorn/no-lonely-if": "error",
			"unicorn/no-null": "off",
			"unicorn/no-static-only-class": "error",
			"unicorn/no-new-buffer": "error",
			"unicorn/no-unreadable-array-destructuring": "error",
			"unicorn/no-useless-length-check": "error",
			"unicorn/no-useless-spread": "error",
			"unicorn/no-zero-fractions": "error",
			"unicorn/number-literal-case": "error",
			"unicorn/numeric-separators-style": "error",
			"unicorn/prefer-array-find": "error",
			"unicorn/prefer-array-flat": "error",
			"unicorn/prefer-array-flat-map": "error",
			"unicorn/prefer-array-index-of": "error",
			"unicorn/prefer-array-some": "error",
			"unicorn/prefer-at": "error",
			"unicorn/prefer-date-now": "error",
			"unicorn/prefer-default-parameters": "error",
			"unicorn/prefer-dom-node-append": "error",
			"unicorn/prefer-dom-node-dataset": "error",
			"unicorn/prefer-dom-node-remove": "error",
			"unicorn/prefer-includes": "error",
			"unicorn/prefer-keyboard-event-key": "error",
			"unicorn/prefer-math-trunc": "error",
			"unicorn/prefer-modern-dom-apis": "error",
			"unicorn/prefer-module": "off",
			"unicorn/prefer-negative-index": "error",
			"unicorn/prefer-node-protocol": "off",
			"unicorn/prefer-number-properties": "error",
			"unicorn/prefer-object-from-entries": "off",
			"unicorn/prefer-object-has-own": "error",
			"unicorn/prefer-optional-catch-binding": "error",
			"unicorn/prefer-prototype-methods": "error",
			"unicorn/prefer-query-selector": "error",
			"unicorn/prefer-reflect-apply": "error",
			"unicorn/prefer-regexp-test": "error",
			"unicorn/prefer-set-has": "error",
			"unicorn/prefer-spread": "error",
			"unicorn/prefer-string-replace-all": "error",
			"unicorn/prefer-string-slice": "error",
			"unicorn/prefer-string-starts-ends-with": "error",
			"unicorn/prefer-string-trim-start-end": "error",
			"unicorn/prefer-switch": "error",
			"unicorn/prefer-ternary": "error",
			"unicorn/prefer-type-error": "error",
			"unicorn/prevent-abbreviations": "off",
			"unicorn/require-array-join-separator": "error",
			"unicorn/require-number-to-fixed-digits-argument": "error",
			"unicorn/string-content": "error",
			"unicorn/throw-new-error": "error",
			"simple-import-sort/imports": "error",
			"simple-import-sort/exports": "error",
			"unused-imports/no-unused-imports": "error",

			"unused-imports/no-unused-vars": [
				"error",
				{
					vars: "all",
					varsIgnorePattern: "^_",
					args: "after-used",
					argsIgnorePattern: "^_"
				}
			]
		}
	},
	{
		files: ["**/*.ts", "**/*.tsx"],

		plugins: {
			"@typescript-eslint": typescriptEslint
		},

		languageOptions: {
			parser: tsParser,
			ecmaVersion: 5,
			sourceType: "script",

			parserOptions: {
				project: ["./tsconfig.json"]
			}
		},

		rules: {
			"@typescript-eslint/array-type": "error",
			"@typescript-eslint/ban-tslint-comment": "error",
			"@typescript-eslint/ban-types": "off",
			"@typescript-eslint/class-literal-property-style": "error",
			"@typescript-eslint/consistent-indexed-object-style": "error",
			"@typescript-eslint/consistent-type-definitions": "error",
			"@typescript-eslint/consistent-type-imports": "error",
			"@typescript-eslint/explicit-member-accessibility": "off",
			// "@typescript-eslint/member-delimiter-style": "error",
			"@typescript-eslint/no-confusing-non-null-assertion": "error",
			"@typescript-eslint/no-confusing-void-expression": "off",
			"@typescript-eslint/no-dynamic-delete": "off",
			"@typescript-eslint/no-empty-interface": "error",
			"@typescript-eslint/no-explicit-any": "off",
			"@typescript-eslint/no-extra-non-null-assertion": "error",
			"@typescript-eslint/no-implicit-any-catch": "off",
			"@typescript-eslint/no-unnecessary-boolean-literal-compare": "error",
			"@typescript-eslint/no-unnecessary-condition": "off",
			"@typescript-eslint/no-unnecessary-qualifier": "error",
			"@typescript-eslint/no-unnecessary-type-arguments": "error",
			"@typescript-eslint/no-unnecessary-type-assertion": "error",
			"@typescript-eslint/no-unnecessary-type-constraint": "error",
			"@typescript-eslint/non-nullable-type-assertion-style": "error",
			"@typescript-eslint/prefer-as-const": "error",
			"@typescript-eslint/prefer-function-type": "error",
			"@typescript-eslint/prefer-includes": "error",
			"@typescript-eslint/prefer-namespace-keyword": "error",
			"@typescript-eslint/prefer-reduce-type-parameter": "error",
			"@typescript-eslint/prefer-regexp-exec": "error",
			"@typescript-eslint/prefer-return-this-type": "error",
			"@typescript-eslint/prefer-string-starts-ends-with": "error",
			"@typescript-eslint/prefer-ts-expect-error": "error",
			"@typescript-eslint/promise-function-async": "off",
			"@typescript-eslint/strict-boolean-expressions": "off",
			"@typescript-eslint/brace-style": "off",
			"@typescript-eslint/comma-dangle": "off",
			// "@typescript-eslint/comma-spacing": "error",
			"@typescript-eslint/dot-notation": "off",
			// "@typescript-eslint/func-call-spacing": "error",
			"@typescript-eslint/indent": ["off"],
			// "@typescript-eslint/keyword-spacing": "error",

			// "@typescript-eslint/lines-between-class-members": ["error", "always", {
			//     exceptAfterSingleLine: true,
			// }],

			"@typescript-eslint/no-array-constructor": "error",
			"@typescript-eslint/no-extra-parens": "off",
			// "@typescript-eslint/no-extra-semi": "error",
			// "@typescript-eslint/object-curly-spacing": ["error", "always"],
			"@typescript-eslint/quotes": "off",
			"@typescript-eslint/return-await": "error",
			// "@typescript-eslint/semi": "error",
			"@typescript-eslint/space-before-function-paren": "off"
			// "@typescript-eslint/space-infix-ops": "error",
		}
	}
];
