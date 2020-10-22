import React from 'react'
import { connect } from 'react-redux';

const BookList = ({booksData}) => {
  return (
    <div>
      <h1>Book List</h1>
      
    </div>
  )
}

const mapStateToProps = state => {
  return {
    booksData: state.books
  }
}

export default connect(mapStateToProps)(BookList);
