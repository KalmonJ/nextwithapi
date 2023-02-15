import { mergeResolvers } from "@graphql-tools/merge";
import { loginResolvers } from "./auth/resolvers";
import { usersResolvers } from "./users/usersResolvers";

const resolvers = [usersResolvers, loginResolvers];

export default mergeResolvers(resolvers);
