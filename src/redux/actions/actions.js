export const SearchBooks = text => {
  return dispatch => {
    const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=${text}`;
    fetch(apiUrl)
      .then(res => res.json())
      .then(data => {
        dispatch({ type: "SEARCH_ALL", movie: data.items });
      });
  };
};

export const addFavorite = id => dispatch =>
  dispatch({ type: "ADD_FAVORITE", id });

export const removeFavorite = id => dispatch =>
  dispatch({ type: "REMOVE_FAVORITE", id });
