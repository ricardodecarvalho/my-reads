import React from 'react'
import {Link} from 'react-router-dom'

const ButtonSearch = () => (
    <div className="open-search">
        <Link
            to="/search"
        >Add a book</Link>
    </div>
)

export default ButtonSearch
