import React, { useState, useEffect } from "react";
import axios from "axios";
import "./homePage.scss";
import Button from "../button/readMore";
import {
  // Favorties,
  addFavorite,
  removeFavorite
} from "../../redux/actions/actions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
const Home = props => {
  const [book, setBook] = useState([]);
  const [load, setLoad] = useState(false);
  const [error, setError] = useState("");
  const [id, setId] = useState([]);
  useEffect(() => {
    const apiUrl = `https://www.googleapis.com/books/v1/volumes?q=c++`;
    axios
      .get(apiUrl)
      .then(data => {
        setBook(data.data.items);
        setLoad(true);
      })
      .catch(err => {
        setError(err.message);
        setLoad(true);
      });
  }, []);
  const isInFavorite = id => props.favoritesId.find(myId => myId === id);

  const handleClick = item => {
    if (isInFavorite(item.id)) {
      props.removeFavorite(item.id);
    } else {
      props.addFavorite(item.id);
    }
  };
  const Book = book.map(el => (
    <div className="bookContainer" key={el.id}>
      <div className="books">
        <p>{el.volumeInfo.title}</p>
        <img src={el.volumeInfo.imageLinks.thumbnail} alt="books" />
        <Button props={props} id={el.id} />
        <button onClick={() => handleClick(el)}>
          {isInFavorite(el.id) ? "remove" : "add"} to favorites
        </button>
      </div>
    </div>
  ));

  if (load) {
    return <div className="bookContainer">{Book}</div>;
  } else {
    return <div>Loading...</div>;
  }
};

const dispatchStateToProps = dispatch => {
  return {
    addFavorite: id => dispatch(addFavorite(id)),
    removeFavorite: id => dispatch(removeFavorite(id))
  };
};

const mapStateToProps = state => {
  return {
    favoritesId: state.favoritesId
  };
};

export default withRouter(connect(mapStateToProps, dispatchStateToProps)(Home));
