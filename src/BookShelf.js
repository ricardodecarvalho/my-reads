import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

class BookShelf extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
    loading: PropTypes.bool.isRequired,
    onMoveBook: PropTypes.func.isRequired
  }

  render() {
    const { books, title, loading, onMoveBook } = this.props

    return(
      <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
          {loading === true && (
            <div className='loading'>
              <span>Loading...</span>
            </div>
          )}
          <ol className="books-grid">
            {books.map((book) => (
              <Book
                book={book}
                key={book.id}
                onMoveBook={onMoveBook}
              />
            ))}
          </ol>
        </div>
      </div>
    )
  }
}

export default BookShelf
