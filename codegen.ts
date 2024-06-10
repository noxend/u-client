import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: ["http://localhost:3000/gql", "src/gql/schema.graphql"],
  documents: ["src/gql/queries.ts", "src/gql/mutations.ts"],
  generates: {
    "./src/gql/types/": {
      preset: "client",
    },
  },
};

export default config;
