import { Router } from "express";
import {
  createCard,
  getAllCards,
  handleLike,
  // updateCard,
} from "./cards.controller.js";

const cardsRouter = Router();

cardsRouter.post("/", createCard);
cardsRouter.get("/", getAllCards);
// cardsRouter.put("/", updateCard);
cardsRouter.put("/:id", handleLike);

export default cardsRouter;
