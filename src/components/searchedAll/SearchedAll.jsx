import React, { Component } from "react";
import { connect } from "react-redux";
import "./searched.scss";

class SearchData extends Component {
  render() {
    const { searchData } = this.props;
    const movieTv = searchData ? (
      searchData.map(data => {
        if (data.id) {
          return (
            <div key={data.id} className="movies">
              <img
                src={
                  data.volumeInfo.imageLinks === undefined
                    ? ""
                    : `${data.volumeInfo.imageLinks.thumbnail}`
                }
                alt="searchedBooks"
              />
              <div id="container">
                <div className="buttonContainer">
                  <button
                    className="learn-more"
                    onClick={() =>
                      this.props.history.push("/bookDetail/" + data.id)
                    }
                  >
                    <span className="circle">
                      <span className="icon arrow"></span>
                    </span>
                    <span className="button-text">Read more</span>
                  </button>
                </div>
              </div>
            </div>
          );
        }
      })
    ) : (
      <div className="error">PLEASE SEARCH BOOKS</div>
    );

    return <div className="searchedData">{movieTv}</div>;
  }
}

const mapStateToProps = state => {
  return {
    searchData: state.allstaff
  };
};

export default connect(mapStateToProps)(SearchData);
