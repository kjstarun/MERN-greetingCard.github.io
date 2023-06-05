import cardModel from "./cards.model.js";

const projectionData = { isActive: 0, createdAt: 0, updatedAt: 0, __v: 0 };

export const getAllCards = async (req, res) => {
  try {
    console.log("getall");
    let result = await cardModel.find({}, projectionData);
    res.send({ result });
  } catch (error) {
    res.send({ error });
  }
};

export const createCard = async (req, res) => {
  try {
    const card = new cardModel(req.body);

    const saveProduct = await card.save();
    res.send({ createdProduct: saveProduct });
  } catch (error) {
    console.log("erroe", error);
    res.send({ message: error });
  }
};

// export const updateCard = async (req, res) => {
// try {
//   const { like, id } = req.body;
//   console.log(req.body);
//   // let UpdateCard = await cardModel.updateMany({ _id: id });
//   let updateLike = await cardModel.findById(id);
//   // let count = updateLike.likeCount;
//   // updateLike.likeCount = (updateLike.likeCount || 0) + 1;
//   console.log("count", updateLike.likeCount);
//   if (like) {
//     // console.log("true enter like", updateLike["likeCount"]);
//     updateLike.likeCount = (updateLike.likeCount || 0) + 1;
//   } else if (updateLike.likeCount >= 1) {
//     updateLike.likeCount = updateLike.likeCount - 1;
//   } else {
//     return res.send({ message: "Minimum like count" });
//   }

//   let result = await cardModel.findByIdAndUpdate(id, updateLike);

//   res.send({ message: result });
// } catch (error) {
//   console.log(error);
//   res.send({ message: error });
// }

// console.log(UpdateCard);
// res.send({ updatedCard: UpdateCard });
// };

export const handleLike = async (req, res) => {
  console.log("handlelike", req.params.id, req.body);
  try {
    const like = req.body.like;
    let updateObj = await cardModel.findById(req.params.id);
    updateObj.isLiked = updateObj.isLiked ? false : true;

    if (!like) {
      // console.log("true enter like", updateLike["likeCount"]);
      updateObj.likeCount = (updateObj.likeCount || 0) + 1;
    } else if (updateObj.likeCount >= 1) {
      updateObj.likeCount = updateObj.likeCount - 1;
    }
    let result = await cardModel.findByIdAndUpdate(req.params.id, updateObj, {
      new: true,
    });

    res.send({ likeUpdate: result });
  } catch (error) {
    console.log("error", error);
    res.send({ message: error });
  }
};

export const handleView = async (req, res) => {
  console.log("handleView", req.params.id, req.body);
  try {
    const id = req.params.id;
    let updateObj = await cardModel.findById(id);
    updateObj.viewCount = updateObj.viewCount + 1;

    let result = await cardModel.findByIdAndUpdate(req.params.id, updateObj, {
      new: true,
    });

    console.log("res", result);
    res.send({ viewUpdate: result });
  } catch (error) {
    console.log("error", error);
    res.send({ message: error });
  }
};
