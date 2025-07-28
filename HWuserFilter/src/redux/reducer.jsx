const initialState = {
  users: [
    { id: 1, name: "Thomas Anderson" },
    { id: 2, name: "Bob Johnson" },
    { id: 3, name: "Max Ivanov" },
    { id: 4, name: "Eva Braun" },
    { id: 5, name: "Alice Smith" },
  ],
  filter: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_FILTER":
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
