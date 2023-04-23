import { configureStore } from "@reduxjs/toolkit";
import cardSlice from "./features/cardSlice";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./rootSaga";
// import createSagaMiddleware from ''


const sagaMiddleware = createSagaMiddleware();


export default configureStore({
  reducer: {
    cardSlice
  },
  middleware: (currentMiddleware) => [
    ...currentMiddleware({ thunk: false }),
    sagaMiddleware,
  ],
});

sagaMiddleware.run(rootSaga);
