import React from "react";
import Navbar from "./components/navbar/navbar";
import { Route, Switch } from "react-router-dom";
import Favorites from "./components/favorites/favorites";
import HomePage from "./components/home/homePage";
import Book from "./components/book/bookDetails";
import SearchedData from "./components/searchedAll/SearchedAll";
import "./App.css";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/Favorites" exact component={Favorites} />
        <Route path="/search" component={SearchedData} />
        <Route path="/bookDetail/:bookDetail" exact component={Book} />
      </Switch>
    </div>
  );
}

export default App;
