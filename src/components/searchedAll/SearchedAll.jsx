import React, { Component } from "react";
import { connect } from "react-redux";
import Button from "../button/readMore";

import "./searched.scss";

class SearchData extends Component {
  render() {
    const { searchData } = this.props;
    const Books = searchData ? (
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
              <Button props={this.props} id={data.id} />
            </div>
          );
        }
      })
    ) : (
      <div className="error">PLEASE SEARCH BOOKS</div>
    );

    return <div className="searchedData">{Books}</div>;
  }
}

const mapStateToProps = state => {
  return {
    searchData: state.allstaff
  };
};

export default connect(mapStateToProps, null)(SearchData);
