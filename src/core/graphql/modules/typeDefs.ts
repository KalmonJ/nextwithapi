import { mergeTypeDefs } from "@graphql-tools/merge";
import { loadFilesSync } from "@graphql-tools/load-files";
import path from "path";

const typeDefsArray = loadFilesSync(
  path.join(__dirname, "../../../../src/core/graphql/modules/**/*.gql")
);

export default mergeTypeDefs(typeDefsArray);
