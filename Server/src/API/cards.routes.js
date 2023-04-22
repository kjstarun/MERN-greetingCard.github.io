import { Router } from "express";
import { createCard, getAllCards, updateCard } from "./cards.controller.js";

const cardsRouter = Router();

cardsRouter.post("/", createCard);
cardsRouter.get("/", getAllCards);
cardsRouter.put("/", updateCard);

export default cardsRouter;
