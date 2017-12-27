import React, {Component} from 'react';
import PropTypes from 'prop-types'
import Shelfs from './Shelfs'

class SelectMoveTo extends Component {
    static propTypes = {
        currentCategory: PropTypes.string,
        book: PropTypes.object.isRequired,
        books: PropTypes.array.isRequired,
        onMoveBook: PropTypes.func.isRequired
    }

    render() {
        const {currentCategory, book, books, onMoveBook} = this.props

        let current = currentCategory

        if (!current) {
            for (let item of books ) {
                if (item.id === book.id)  {
                    current = item.shelf
                    break
                } else {
                    current = "none"
                }
            }
        }

        return (
            <select
                onChange={(event) => onMoveBook(book, event.target.value)}
                defaultValue={ current }
            >
                <option value="none" disabled>Move to...</option>
                {Shelfs.map(shelf => (
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
