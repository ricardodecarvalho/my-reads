import React, { Component } from 'react'
import PropTypes from 'prop-types'
import SelectMoveTo from './SelectMoveTo'
import Authors from './Authors'

class Book extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired
  }

  render() {
    const { book } = this.props

    return (
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>
            <div className="book-shelf-changer">
              <SelectMoveTo />
            </div>
          </div>
          <div className="book-title">
            {book.title}
          </div>
          <Authors authors={book.authors}/>
        </div>
      </li>
    )
  }
}

export default Book
