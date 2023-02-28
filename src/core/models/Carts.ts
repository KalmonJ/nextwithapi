import mongoose from "mongoose";

const Schema = new mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Products",
    required: true,
  },

  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },

  total: {
    type: Number,
    required: true,
  },
});

export default mongoose.models.Carts || mongoose.model("Carts", Schema);
