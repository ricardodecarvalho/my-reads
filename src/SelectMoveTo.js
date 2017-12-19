import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Shelfs from './Shelfs'

class SelectMoveTo extends Component {
  static propTypes = {
    currentCategory: PropTypes.string.isRequired,
    book: PropTypes.object.isRequired,
    onMoveBook: PropTypes.func.isRequired
  }

  render() {
    const { currentCategory, book, onMoveBook } = this.props
    return(
      <select
        onChange={(event) => onMoveBook(book, event.target.value)}
      >
        <option value="none" disabled selected>Move to...</option>
        {Shelfs.filter((shelf) => shelf.type !== currentCategory).map(shelf => (
          <option
            key={shelf.id}
            value={shelf.type}
          >
            {shelf.title}
          </option>
        ))}
        <option value="none">None</option>
      </select>
    )
  }
}

export default SelectMoveTo
