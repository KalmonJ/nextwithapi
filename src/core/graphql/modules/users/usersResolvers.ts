import { Resolvers } from "__generated__/resolvers-types";

export const usersResolvers: Resolvers = {
  Query: {
    users: async (_, __, ctx) => {
      if (!ctx.authUser) throw new Error("Unauthorized");
      return await ctx.users.find();
    },
    getUser: async (_, args, ctx) => {
      const user = await ctx.users.findById(args.id);

      if (!user) {
        throw new Error("User not found!");
      }

      return user;
    },
  },

  Mutation: {
    createUser: async (_, args, ctx) => {
      const newUser = new ctx.users(args.data);
      const user = await ctx.users.find({ email: args.data!.email });

      if (!!user.length) {
        throw new Error(`Email: ${args.data!.email} already in use`);
      }

      newUser.save();
      return newUser;
    },
  },
};
