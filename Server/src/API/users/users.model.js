import Mongoose from "mongoose";

const UserSchema = new Mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const userModel = Mongoose.model("Users", UserSchema);
export default userModel;
