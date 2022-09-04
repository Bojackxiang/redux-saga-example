import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import createSagaMiddleware from "@redux-saga/core";
import { watchSaga } from "../saga";

const sagaMiddle = createSagaMiddleware();
const middleware = [sagaMiddle];
// 这边就是声明检测 dispatch 地方

const store = createStore(rootReducer, {}, applyMiddleware(...middleware));
// 下面这行一定要在 store 下面
sagaMiddle.run(watchSaga);

export default store;
