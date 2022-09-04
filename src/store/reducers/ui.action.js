export const LOADING_OFF = "LOADING_OFF";
export const LOADING_ON = "LOADING_ON";

export const loadingOnn = () => {
  return {
    type: LOADING_ON,
  };
};

export const loadingOff = () => {
  return {
    type: LOADING_OFF,
  };
};
