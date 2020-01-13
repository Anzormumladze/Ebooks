const INITIALSTATE = {
  searchInput: "",
  allstaff: [],
  allfavorites: [],
  favoritesId: []
};

export const rootReducer = (state = INITIALSTATE, action) => {
  switch (action.type) {
    case "SEARCH_ALL":
      return {
        ...state,
        allstaff: action.movie
      };
    case "ADD_FAVORITE":
      return {
        ...state,
        favoritesId: [...state.favoritesId, action.id]
      };
    case "REMOVE_FAVORITE":
      return {
        ...state,
        favoritesId: state.favoritesId.filter(id => id != action.id)
      };

    default:
      return state;
  }
};
