import mongoose from "mongoose";

const Schema = new mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Products",
  },

  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
    required: true,
  },
  quantity: {
    type: Number,
  },

  total: {
    type: Number,
  },
});

export default mongoose.models.Carts || mongoose.model("Carts", Schema);
