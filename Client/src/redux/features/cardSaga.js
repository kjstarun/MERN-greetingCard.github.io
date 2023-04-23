import { takeLatest } from "redux-saga/effects";
import {updateLikeLocal} from "./cardSlice";
import axios from "axios";


const fetchAPI = async (url) => {
  const data = await axios.patch(url);
  return data;
};

function* updateLike(actions) {
  console.log("actions saga", actions.payload);
  try {
    const result = yield fetchAPI(`https://localhost:1001/${actions.payload}`);
    yield put(updateLikeLocal({ result }));
  } catch (error) {
    console.log("Error from saga", error);
  }
}

export default function* listenUpdateLikeRequest() {
  yield takeLatest("filterData/updateLikeAPI", updateLike);
}
