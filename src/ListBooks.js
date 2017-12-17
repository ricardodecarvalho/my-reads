import React, { Component } from 'react'
import PropTypes from 'prop-types'
//import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
import HeaderTitle from './HeaderTitle'
import BookShelf from './BookShelf'
import shelfs from './Shelfs'

class ListBooks extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired
  }

  render() {
    const { books } = this.props

    let showingBooks
    showingBooks = books
    showingBooks.sort(sortBy('shelf'))

    return (
      <div className="list-books">
        <HeaderTitle/>
        <div className="list-books-content">
          {shelfs.map((shelf) => (
            <BookShelf
              title={shelf.title}
              books={books.filter( book => book.shelf === shelf.type)}
              key={shelf.id}
            />
          ))}
        </div>
      </div>
    )
  }
}

export default ListBooks
