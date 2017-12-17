import React from 'react'
import Shelfs from './Shelfs'

const SelectMoveTo = () => (
  <select>
    <option value="none" disabled>Move to...</option>
    {Shelfs.map(shelf => (
      <option key={shelf.id} value={shelf.type}>{shelf.title}</option>
    ))}
    <option value="none">None</option>
  </select>
)

export default SelectMoveTo
