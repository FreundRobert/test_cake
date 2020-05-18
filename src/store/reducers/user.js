const initialState = {
  favorites: [1],
};
const user = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_FAVORITES":
      return state.favorites.includes(action.payload)
        ? Object.assign({}, state, {
            favorites: [
              ...state.favorites.filter((fav) => fav != action.payload),
            ],
          })
        : Object.assign({}, state, {
            favorites: [...state.favorites, action.payload],
          });
    default:
      return state;
  }
};

export default user;
