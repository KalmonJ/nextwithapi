import mongoose from "mongoose";
import bcrypt from "bcrypt";

const Schema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },

    email: {
      type: String,
      required: true,
    },

    password: {
      type: String,
      required: true,
    },

    profileImage: {
      type: String,
    },
  },
  { timestamps: true }
);

Schema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }

  this["password"] = await bcrypt.hash(this.password, 10);
});

export default mongoose.models.Users || mongoose.model("Users", Schema);
