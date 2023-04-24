import { put, takeLatest } from "redux-saga/effects";
import { updateLikeLocal } from "./cardSlice";
import axios from "axios";

const fetchAPI = async (id) => {
  const URL = `http://localhost:1001/${id}`;
  console.log("enter", URL);
  const data = await axios.put(URL);
  console.log("data", data);
  return data.data;
};

function* updateLike(actions) {
  console.log("actions saga", actions.payload);
  try {
    const result = yield fetchAPI(actions.payload);
    yield put(updateLikeLocal({ result }));
  } catch (error) {
    console.log("Error from saga", error);
  }
}

export default function* listenUpdateLikeRequest() {
  yield takeLatest("filterData/updateLikeAPI", updateLike);
}
