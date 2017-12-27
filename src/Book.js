import React from 'react'
import PropTypes from 'prop-types'
import SelectMoveTo from './SelectMoveTo'
import Authors from './Authors'

const Book = (props) => (
    <li>
        <div className="book">
            <div className="book-top">
                {props.book.imageLinks !== undefined && (
                    <div className="book-cover" style={{
                        width: 128,
                        height: 193,
                        backgroundImage: `url(${props.book.imageLinks.smallThumbnail})`
                    }}></div>
                )}
                <div className="book-shelf-changer">
                    <SelectMoveTo
                        currentCategory={props.book.shelf}
                        book={props.book}
                        books={ props.books }
                        onMoveBook={props.onMoveBook}
                    />
                </div>
            </div>
            <div className="book-title">
                {props.book.title}
            </div>
            {props.book.authors !== undefined && (
                <Authors authors={props.book.authors}/>
            )}
        </div>
    </li>
)

Book.propTypes = {
    book: PropTypes.object.isRequired,
    books: PropTypes.array.isRequired,
    onMoveBook: PropTypes.func.isRequired
}

export default Book
