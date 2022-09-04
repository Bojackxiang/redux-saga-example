import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { LOADING_OFF, LOADING_ON } from "../../store/reducers/ui.action";

const Loading = () => {
  const loading = useSelector((state) => state.ui.loading);
  console.log("loading: ", loading);
  const dispatch = useDispatch();

  const turnOnLoading = () => {
    dispatch({ type: LOADING_ON });
  };

  const turnOffLoading = () => {
    dispatch({ type: LOADING_OFF });
  };

  return (
    <div>
      <h2>{String(loading)}</h2>
      <div>
        <button onClick={turnOnLoading}>on</button>
        <button onClick={turnOffLoading}>off</button>
      </div>
    </div>
  );
};

export default Loading;
