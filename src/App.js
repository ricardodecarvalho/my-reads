import React, { Component } from 'react';
import ListBooks from './ListBooks'
import './App.css'
import * as BooksAPI from './utils/BooksAPI'

class App extends Component {
  state = {
    books: [],
    loading: true
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
      this.setState({ loading: false })
    })
  }

  render() {
    return (
      <div className="app">
        <ListBooks
          books={this.state.books}
          loading={this.state.loading}
        />
      </div>
    );
  }
}

export default App;
