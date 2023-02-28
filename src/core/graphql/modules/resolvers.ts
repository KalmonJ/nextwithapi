import { mergeResolvers } from "@graphql-tools/merge";
import { loginResolvers } from "./auth/resolvers";
import { cartResolvers } from "./carts/resolvers";
import { productResolvers } from "./products/resolvers";
import { usersResolvers } from "./users/usersResolvers";

const resolvers = [
  usersResolvers,
  loginResolvers,
  productResolvers,
  cartResolvers,
];

export default mergeResolvers(resolvers);
