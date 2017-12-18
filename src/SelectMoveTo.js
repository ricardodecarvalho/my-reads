import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Shelfs from './Shelfs'

class SelectMoveTo extends Component {
  static propTypes = {
    currentCategory: PropTypes.string.isRequired
  }

  render() {
    const { currentCategory } = this.props
    return(
      <select>
        <option value="none" disabled>Move to...</option>
        {Shelfs.filter((shelf) => shelf.type !== currentCategory).map(shelf => (
          <option key={shelf.id} value={shelf.type}>{shelf.title}</option>
        ))}
        <option value="none">None</option>
      </select>
    )
  }
}

export default SelectMoveTo
