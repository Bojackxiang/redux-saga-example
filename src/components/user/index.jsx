import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { LOGIN } from "../../store/reducers/user.action";

const User = () => {
  // get user from the redux
  const { user } = useSelector((state) => state.user);
  console.log("user: ", user);
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch action to login
    dispatch({ type: LOGIN });
  }, []);

  const getUser = () => {
    dispatch({ type: LOGIN });
  };
  return (
    <div>
      <h2>user</h2>
      <button onClick={getUser}>get user</button>
    </div>
  );
};

export default User;
