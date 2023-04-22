import Mongoose from "mongoose";

const cardSchema = new Mongoose.Schema(
  {
    cardTitle: { type: String, required: true },
    cardDescription: { type: String, required: true },
    cardTag: { type: String, required: true },
    cardImageSource: { type: String, required: true },
    cardColor: { type: String, required: true },
    cardPopularity: {
      type: [
        {
          type: String,
          required: true,
        },
      ],
    },
    cardHTML: { type: String, required: true },
    isLiked: { type: Boolean, required: true },
    isViewed: { type: Boolean, required: true },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

const cardModel = Mongoose.model("Card", cardSchema);
export default cardModel;
