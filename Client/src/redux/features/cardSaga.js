import { put, takeLatest } from "redux-saga/effects";
import { setOnLoadAPIDATA, updateLikeLocal } from "./cardSlice";
import axios from "axios";

const fetchAPI = async (id) => {
  const URL = `http://localhost:1001/${id}`;
  console.log("enter", URL);
  const data = await axios.post(URL);
  console.log("data", data);
  return data.data;
};

const loadData = async () => {
  const URL = "http://localhost:1001";
  const data = await axios.get(URL);
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

function* fetchOnLoadCardData(actions) {
  try {
    const result = yield loadData();
    yield put(setOnLoadAPIDATA(result));
  } catch (error) {
    console.log("error from saga get requets", error);
  }
}

export default function* listenUpdateLikeRequest() {
  yield takeLatest("filterData/updateLikeAPI", updateLike);
  yield takeLatest("filterData/fetchCardData", fetchOnLoadCardData);
}
