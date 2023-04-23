import { all, fork } from "redux-saga/effects";
import listenUpdateLikeRequest from "./features/cardSaga";

export default function* rootSaga() {
  yield all([fork(listenUpdateLikeRequest)]);
}
