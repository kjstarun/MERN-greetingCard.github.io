import express, { json } from "express";
import { PORT } from "../config.js";
import Mongoose from "mongoose";
import cardsRouter from "./API/cards/cards.routes.js";
import cors from "cors";
import authRouter from "./API/users/users.routes.js";

const app = express();
app.use(cors());

const connectDB = async () => {
  await Mongoose.connect(
    "mongodb+srv://kjstarun:Tarun181@greetingspitstopcluster.bk83x0a.mongodb.net/GreetingsPitstopCluster?retryWrites=true&w=majority"
  )
    .then(() => console.log("Databse connected sucessfully"))
    .catch((err) => console.log("Database connection failed"));
};

connectDB();

app.use(json());
app.use("/", cardsRouter);
app.use("/user", authRouter);

app.listen(PORT, () => {
  console.log(`Backend started successfully on port number ${PORT}`);
});
