import React, { useState } from "react";
import "./search.scss";
import { SearchBooks } from "../../redux/actions/actions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

const Search = props => {
  const [search, setSearch] = useState("");
  const handleChange = e => {
    setSearch(e.target.value);
    props.getInput(search);
    props.history.push("/search");
  };
  const handleSubmit = e => {
    e.preventDefault();
    props.getInput(search);

    props.history.push("/search");
  };

  return (
    <div className="searched container">
      <form className="container" onSubmit={e => handleSubmit(e)}>
        <input
          type="text"
          name="search"
          onChange={e => handleChange(e)}
          placeholder="Search Books "
        />
      </form>
    </div>
  );
};

const dispatchStateToProps = dispatch => {
  return {
    getInput: text => dispatch(SearchBooks(text))
  };
};
export default withRouter(connect(null, dispatchStateToProps)(Search));
