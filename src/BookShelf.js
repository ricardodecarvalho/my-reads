import React from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

const BookShelf = (props) => (
    <div className="bookshelf">
        <h2 className="bookshelf-title">{props.title}</h2>
        <div className="bookshelf-books">
            {props.loading === true && (
                <div className='loading'>
                    <span>Loading...</span>
                </div>
            )}
            <ol className="books-grid">
                {props.books.map((book) => (
                    <Book
                        books={props.books}
                        book={book}
                        key={book.id}
                        onMoveBook={props.onMoveBook}
                    />
                ))}
            </ol>
        </div>
    </div>
)

BookShelf.propTypes = {
    books: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
    loading: PropTypes.bool.isRequired,
    onMoveBook: PropTypes.func.isRequired
}

export default BookShelf
