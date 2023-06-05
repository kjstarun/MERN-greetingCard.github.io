import bcrypt from "bcrypt";
import userModel from "./users.model.js";

export const registerUser = async (req, res) => {
  try {
    const bodyData = { ...req.body };
    // console.log("body", bodyData);
    if (!bodyData)
      return res.send({ message: "Invalid credentials from body" });

    const { email, password } = bodyData;
    const checkNewUser = await userModel.findOne({ email });

    if (checkNewUser) return res.send({ message: "User already exists" });

    const encryptPassword = await bcrypt.hash(password, 10);
    const newUser = new userModel({
      email,
      password: encryptPassword,
    });
    await newUser.save();
    // console.log("save", saveUser);
    res.send({ message: "Registration success, please login to continue" });
  } catch (error) {
    res.send({
      message: "Something went wrong, please try again after sometime",
    });
  }
};

export const authenticateUser = async (req, res) => {
  try {
    const bodyData = { ...req.body };
    console.log("body", bodyData);
    if (!bodyData)
      return res.send({ message: "Invalid credentials from body" });

    const { email, password } = bodyData;

    const ifUserExists = await userModel.findOne({ email });

    console.log("user", ifUserExists);

    if (!ifUserExists) return res.send({ message: "User doesn't exists" });

    const isUserAuthenticated = await bcrypt.compare(
      password,
      ifUserExists.password
    );
    console.log("authenticate", isUserAuthenticated);

    if (isUserAuthenticated) {
      return res.send({ message: true });
    }

    res.send({ message: "Invalid credentials" });
  } catch (error) {
    res.send({
      message: "Something went wrong, please try again after sometime",
    });
  }
};
