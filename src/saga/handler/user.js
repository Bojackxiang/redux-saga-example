import { call, put } from "redux-saga/effects";
import { LOADING_OFF, LOADING_ON } from "../../store/reducers/ui.action";
import { SET_USER } from "../../store/reducers/user.action";
import { getUserRequest } from "../request/user";

export function* handleGetUser() {
  try {
    console.log("handle user .....");
    yield put({ type: LOADING_ON });
    const response = yield call(getUserRequest);
    const { data } = response;
    yield put({ type: SET_USER, payload: data });
    yield put({ type: LOADING_OFF });
  } catch (error) {
    console.log(error);
  }
}
