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

    emphasis: {
      type: Boolean,
      required: false,
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

    images: [
      {
        desktop: { type: String },
        tablet: { type: String },
        mobile: { type: String },
      },
    ],

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
