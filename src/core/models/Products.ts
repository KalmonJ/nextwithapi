import mongoose from "mongoose";

const Schema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    stock: {
      type: Number,
      required: true,
    },

    likes: {
      type: Number,
    },

    discountPercentage: {
      type: Number,
    },

    salePrice: {
      type: Number,
    },

    availability: {
      type: Boolean,
    },

    image: {
      type: String,
    },

    description: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },

    salesCount: {
      type: Number,
    },

    publishedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Users",
      required: true,
    },

    reviews: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Reviews",
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.models.Products || mongoose.model("Products", Schema);
