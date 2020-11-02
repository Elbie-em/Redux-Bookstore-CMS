import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { removeBook, changeFilter } from '../actions';
import CategoryFilter from '../components/CategoryFilter'

const BookList = ({ booksData, deleteBook, changeBookFilter}) => {

  const handleRemoveBook = book => {
    deleteBook(book);
  };

  const handleFilterChange = ({target}) => {
    changeBookFilter(target.value);
  }

  return (
    <div>
      <h1>Book List</h1>
      <div>
        <CategoryFilter filterBooks={handleFilterChange}/>
      </div>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Category</th>
            <th>ID</th>
          </tr>
        </thead>
        <tbody>
          {booksData.map(book => (
            <Book
              key={book.id}
              book={book}
              handleRemoveBook={handleRemoveBook}
            />
          ))}
        </tbody>
        <tfoot />
      </table>
    </div>
  );
};

const mapStateToProps = (state) => {
  switch (state.filter) {
    case "All":
      return {
        booksData: state.books
      };
    default:
      return {
        booksData: state.books.filter((book) => 
    book.category === (state.filter || book.category))
      } 
  }
};

const mapDispatchToProps = dispatch => ({
  deleteBook: book => { dispatch(removeBook(book)); },
  changeBookFilter: filter => { dispatch(changeFilter(filter));}
});

BookList.propTypes = {
  booksData: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteBook: PropTypes.func.isRequired,
  changeBookFilter: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(BookList);


