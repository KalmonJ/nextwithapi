import Users from "core/models/Users";

export const loginResolvers = {
  Query: {
    login: async (_: any, args: any) => {
      const user = await Users.find({ email: args.data.email });
    },
  },
};
