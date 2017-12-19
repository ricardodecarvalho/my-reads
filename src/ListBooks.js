import React, { Component } from 'react'
import PropTypes from 'prop-types'
//import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'
import HeaderTitle from './HeaderTitle'
import BookShelf from './BookShelf'
import shelfs from './Shelfs'
import ButtonSearch from './ButtonSearch'

class ListBooks extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    onMoveBook: PropTypes.func.isRequired
  }

  render() {
    const { books, loading, onMoveBook } = this.props

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
              loading={loading}
              onMoveBook={onMoveBook}
            />
          ))}
        </div>
        <ButtonSearch />
      </div>
    )
  }
}

export default ListBooks
