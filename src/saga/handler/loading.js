import { call, put } from "redux-saga/effects";
import { LOADING_ON } from "../../store/reducers/ui.action";

export function* handleLoading() {
  try {
    console.log("handling loading .....");
    // yield put({ type: LOADING_ON });
  } catch (error) {
    console.log(error);
  }
}
