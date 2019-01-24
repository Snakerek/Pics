import React, { Component } from "react";

export default class SearchBar extends Component {
  render() {
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label>Wyszukaj obrazek</label>
            <input type="text" />
          </div>
        </form>
      </div>
    );
  }
}
