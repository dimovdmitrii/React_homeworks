import { SET_USER_INFO } from "./actions";

const initialState = {
  name: "Ivan",
  status: "offline",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_INFO:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
