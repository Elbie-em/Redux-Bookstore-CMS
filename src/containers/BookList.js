import React from 'react'
import { connect } from 'react-redux';

const BookList = ({booksData}) => {
  return (
    <div>
      <h1>Book List</h1>
      <table>
        <tr>
          <th>Title</th>
          <th>Category</th>
          <th>ID</th>
        </tr>
        {booksData.map((book) => <Book  book={book}/>)}
      </table>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    booksData: state.books
  }
}

export default connect(mapStateToProps)(BookList);
