import { LOGIN, SET_USER } from "./user.action";

const INITIAL_STATE = {
  user: null,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
