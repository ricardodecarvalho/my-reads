import React, { Component } from 'react';
import ListBooks from './ListBooks'
import './App.css'
import * as BooksAPI from './utils/BooksAPI'

class App extends Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  render() {
    return (
      <div className="app">
        <ListBooks
          books={this.state.books}
        />
      </div>
    );
  }
}

export default App;
