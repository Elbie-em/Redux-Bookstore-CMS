import React from 'react'

const Book = ({book}) => {
  return (
    <tr>
      <td>{book.title}</td>
      <td>{book.category}</td>
      <td>{book.id}</td>
    </tr>
  )
}

export default Book
