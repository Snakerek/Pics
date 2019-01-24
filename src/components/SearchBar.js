import React, { Component } from "react";

export default class SearchBar extends Component {
  state = { term: "" };

  OnFormSubmit = event => {
    event.preventDefault(); //Powoduje że nie jest wykonywana metoda domyślna
    console.log(this.state.term); //Przekazanie do konsoli wartości stanu komponentu
  };
  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.OnFormSubmit} className="ui form">
          <div className="field">
            <label>Wyszukaj obrazek</label>
            <input
              type="text"
              value={this.state.term}
              onChange={e =>
                this.setState({ term: e.target.value })
              } /* Wpisywanie w okienko wyszukiwania powoduje zmianę stanu komponentu */
            />
          </div>
        </form>
      </div>
    );
  }
}
