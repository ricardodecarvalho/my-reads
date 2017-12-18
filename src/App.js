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
      this.setState({ books, loading: false })
    })
  }

  moveBook = (book, newShelf) => {
    this.setState({ loading: true })
    BooksAPI.update(book, newShelf).then(() => {
      book.shelf = newShelf
      let updateLocalBookList = this.state.books.filter( b => b.id !== book.id )
      updateLocalBookList.push(book);
      this.setState({ books: updateLocalBookList, loading: false })
    })
  }

  render() {
    return (
      <div className="app">
        <ListBooks
          books={this.state.books}
          loading={this.state.loading}
          onMoveBook={this.moveBook}
        />
      </div>
    );
  }
}

export default App;
