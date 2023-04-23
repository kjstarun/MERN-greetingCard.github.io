import cardModel from "./cards.model.js";

const projectionData = { isActive: 0, createdAt: 0, updatedAt: 0, __v: 0 };

export const getAllCards = async (req, res) => {
  try {
    let result = await cardModel.find({}, projectionData);
    res.send(result);
  } catch (error) {
    res.send({ error });
  }
};

export const createCard = async (req, res) => {
  const {
    cardTitle,
    cardTag,
    cardImageSource,
    isLiked,
    isViewed,
    cardColor,
    cardPopularity,
    cardDescription,
    cardHTML,
    isActive,
  } = req.body;

  const card = new cardModel({
    cardTitle,
    cardTag,
    cardImageSource,
    isLiked,
    isViewed,
    cardColor,
    cardPopularity,
    cardDescription,
    cardHTML,
    isActive,
  });

  const saveProduct = await card.save();
  res.send({ createdProduct: saveProduct });
};

export const updateCard = async (req, res) => {
  console.log(req.body);
  let UpdateCard = await cardModel.updateMany(
    { _id: req.body._id },
    {
      $set: {
        cardHTML: req.body.cardHTML,
      },
    }
  );

  console.log(UpdateCard);
  res.send({ updatedCard: UpdateCard });
};

export const handleLike = async (req, res) => {
  console.log(req.params.id);
  let updateLike = await cardModel.updateOne(
    { _id: req.params.id },
    {
      $set: {
        isLiked: !isLiked,
      },
    }
  );
  res.send({ likeUpdate: updateLike });
};
