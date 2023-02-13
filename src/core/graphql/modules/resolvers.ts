import { mergeResolvers } from "@graphql-tools/merge";
import { usersResolvers } from "./users/usersResolvers";

const resolvers = [usersResolvers];

export default mergeResolvers(resolvers);
