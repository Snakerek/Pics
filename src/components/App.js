import React from "react";
import SearchBar from "./SearchBar";

export default class App extends React.Component {
  //Metoda która wyświetla w konsoli wartość zmiennej term
  onSearchSubmit(term) {
    console.log(term);
  }
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSubmit={this.onSearchSubmit} />{" "}
      </div>
    );
    /* Do komponentu jako właściwość przekazujemy metodę */
  }
}
