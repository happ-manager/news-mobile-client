import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
	overwrite: true,
	schema: "http://localhost:3000/graphql",
	documents: "**/*.gql",
	generates: {
		"./graphql.ts": {
			plugins: ["typescript"]
		},
		"./": {
			preset: "near-operation-file",
			presetConfig: {
				extension: ".gql.ts",
				baseTypesPath: "./graphql.ts"
			},
			plugins: ["typescript-operations", "typescript-react-apollo"]
		},
		"./graphql.schema.json": {
			plugins: ["introspection"]
		}
	},
	hooks: { afterAllFileWrite: ["prettier --write", "eslint --fix --ignore-pattern '*.json'"] }
};

export default config;
