import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {DebounceInput} from 'react-debounce-input'
import PropTypes from 'prop-types'
import * as BooksAPI from './utils/BooksAPI'
import Book from './Book'

class SearchBook extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        onMoveBook: PropTypes.func.isRequired,
        loading: PropTypes.bool.isRequired
    }

    state = {
        query: '',
        showingBooks: []
    }

    componentDidMount() {
        this.nameInput.focus()
    }

    searchBooks(query) {

        let newBooks = []

        console.log(query);

        if (query.trim() === '') {
            this.clearQuery()
            this.setState({showingBooks: newBooks})
            return
        }

        this.setState({query: query, loading: true})

        BooksAPI.search(query).then(books => {
            if (!books.error) {
                newBooks = books
            }
            this.setState({showingBooks: newBooks, loading: false})
        })
    }

    clearQuery = () => {
        this.setState({query: ''})
    }

    render() {
        const {query, showingBooks} = this.state
        const {onMoveBook, loading, books} = this.props

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/" className="close-search">Close</Link>
                    <div className="search-books-input-wrapper">

                        <DebounceInput
                            debounceTimeout={400}
                            inputRef={(input) => {
                                this.nameInput = input;
                            }}
                            element="input"
                            type="text"
                            placeholder="Search by title or author"
                            value={query}
                            onChange={(event) => this.searchBooks(event.target.value)}
                        />

                    </div>
                </div>
                <div className="search-books-results">

                    {loading === true && (
                        <div className='loading'>
                            <span>Loading...</span>
                        </div>
                    )}

                    {showingBooks.length > 0 && (
                        <ol className="books-grid">
                            {showingBooks.map((book) => (
                                <Book
                                    books={books}
                                    book={book}
                                    key={book.id}
                                    onMoveBook={onMoveBook}
                                />
                            ))}
                        </ol>
                    )}

                </div>
            </div>
        )
    }
}

export default SearchBook