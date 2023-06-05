import { Router } from "express";
import {
  createCard,
  getAllCards,
  handleLike,
  handleView,
  // updateCard,
} from "./cards.controller.js";

const cardsRouter = Router();

cardsRouter.post("/", createCard);
cardsRouter.get("/", getAllCards);
// cardsRouter.put("/", updateCard);
cardsRouter.put("/:id", handleLike);
cardsRouter.put("/view/:id", handleView);

export default cardsRouter;
