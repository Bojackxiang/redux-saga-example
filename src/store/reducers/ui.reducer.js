import { loadingOff, LOADING_OFF, LOADING_ON } from "./ui.action";

const INITIAL_STATE = {
  loading: false,
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOADING_ON:
      return {
        ...state,
        loading: true,
      };

    case LOADING_OFF:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};

export default reducer;
