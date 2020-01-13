import React, { useState, useEffect } from "react";
import axios from "axios";
import "./bookDetails.scss";

const BookDetails = props => {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    const apiUrl = `https://www.googleapis.com/books/v1/volumes/${props.match.params.bookDetail}`;
    axios
      .get(apiUrl)
      .then(data => {
        setData(data.data);
        setLoad(true);
      })
      .catch(err => {
        setError(err.message);
        setLoad(true);
      });
  }, []);

  if (load) {
    const regex = /(<([^>]+)>)/gi;
    const result = data.volumeInfo.description
      ? data.volumeInfo.description.replace(regex, "")
      : null;
    return (
      <div className="Container">
        <img src={data.volumeInfo.imageLinks.thumbnail} alt="bookImage" />
        <div className="details">
          <h1>
            <strong>{data.volumeInfo.title}</strong>
          </h1>
          <p>by {data.volumeInfo.authors}</p>
          <h4>publish data:{data.volumeInfo.publishedDate}</h4>
          <div className="description">
            <article> {result}</article>
          </div>
        </div>
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
};
export default BookDetails;
