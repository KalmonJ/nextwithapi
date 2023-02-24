import mongoose from "mongoose";

const Schema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Products",
  },
  likes: {
    type: Number,
  },

  classifications: {
    type: Number,
    required: true,
  },

  comment: {
    type: String,
  },

  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Users",
  },
});

export default mongoose.models.Reviews || mongoose.model("Reviews", Schema);
