import Users from "core/models/Users";
import { User } from "../../../../types/User";

export const usersResolvers = {
  Query: {
    users: async () => await Users.find(),
    getUser: async (_: any, args: User) => await Users.findById(args.id),
  },

  Mutation: {
    createUser: async (_: any, args: { data: User }) => {
      const newUser = new Users(args.data);
      const user = await Users.find({ email: args.data.email });

      if (!!user.length) {
        throw new Error(`Email: ${args.data.email} already in use`);
      }

      newUser.save();
      return newUser;
    },
  },
};
