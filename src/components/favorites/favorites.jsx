import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import axios from "axios";

const Favorites = props => {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    const { favoritesId } = props;

    favoritesId.forEach(async id => {
      if (data.find(i => i.id === id)) {
        return;
      }
      const result = await axios(
        `https://www.googleapis.com/books/v1/volumes/${id}`
      );
      const dataState = [...data, result.data];
      setData(dataState);
    });
  }, [data]);

  const Books = data.map(el => (
    <div className="bookContainer" key={el.id}>
      <div className="books">
        <p>{el.volumeInfo.title}</p>
        <img src={el.volumeInfo.imageLinks.thumbnail} alt="books" />
      </div>
    </div>
  ));
  if (load) {
    return <div className="bookContainer">{Books}</div>;
  } else {
    return <div>Loading...</div>;
  }
};

const mapStateToProps = state => {
  return {
    favoritesId: state.favoritesId
  };
};

export default connect(mapStateToProps)(Favorites);
