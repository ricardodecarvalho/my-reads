import React from 'react'
import PropTypes from 'prop-types'

const Authors = (props) => (
    <div className="book-authors">
        {props.authors.map(
            name => `${name} `
        )}
    </div>
)

Authors.propTypes = {
    authors: PropTypes.array.isRequired
}

export default Authors
