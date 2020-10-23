import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { removeBook } from '../actions';

const BookList = ({ booksData, deleteBook }) => { 
  
  const handleRemoveBook = (book) => {
    deleteBook(book);
  };

  return (
      <div>
        <h1>Book List</h1>
        <table>
          <tr>
            <th>Title</th>
            <th>Category</th>
            <th>ID</th>
          </tr>
          {booksData.map(book => <Book key={book.id} book={book} handleRemoveBook={handleRemoveBook}/>)}
        </table>
      </div>
  );
}

const mapStateToProps = state => ({
  booksData: state.books,
});

const mapDispatchToProps = dispatch => ({
  deleteBook: book => { dispatch(removeBook(book)); },
});

BookList.propTypes = {
  booksData: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps,mapDispatchToProps)(BookList);
