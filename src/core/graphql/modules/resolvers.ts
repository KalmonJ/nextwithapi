import { mergeResolvers } from "@graphql-tools/merge";
import { loginResolvers } from "./auth/resolvers";
import { productResolvers } from "./products/resolvers";
import { usersResolvers } from "./users/usersResolvers";

const resolvers = [usersResolvers, loginResolvers, productResolvers];

export default mergeResolvers(resolvers);
