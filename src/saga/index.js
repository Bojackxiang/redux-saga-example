import { takeLatest, all } from "redux-saga/effects";
import { LOADING_OFF } from "../store/reducers/ui.action";
import { LOGIN } from "../store/reducers/user.action";
import { handleLoading } from "./handler/loading";
import { handleGetUser } from "./handler/user";

// 下面这个方法会检测 所有的 redux 的所有 dispatch 方法
// also a listening function
// 下面的function 是 sage 开始进行的 起始点，然后才是去调用 handler 和 request
// 下面的这个也是 root saga
const sagaList = [
  takeLatest(LOGIN, handleGetUser),
  takeLatest(LOADING_OFF, handleLoading),
];

export function* watchSaga() {
  console.log("saga effect");

  yield all(sagaList);
}
