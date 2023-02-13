import mongoose from "mongoose";

mongoose.set("strictQuery", true);

export const dbConnection = mongoose.connect(
  "mongodb+srv://kalmon:kalmon@cluster0.k0hmnyk.mongodb.net/graphql-next?retryWrites=true"
);
