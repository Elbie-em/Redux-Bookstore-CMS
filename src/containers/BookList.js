import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import { removeBook, changeFilter } from '../actions';
import CategoryFilter from '../components/CategoryFilter';
import '../styles/styles.css';

const BookList = ({ booksData, deleteBook, changeBookFilter }) => {
  const handleRemoveBook = book => {
    deleteBook(book);
  };

  const handleFilterChange = ({ target }) => {
    changeBookFilter(target.value);
  };

  return (
    <div>
      <nav className='nav-sec d-flex align-items-center justify-content-between'>
        <div className='d-flex align-items-center'>
          <h1 className='bookstore-CMS ml-5 mr-3'>Book Store CMS</h1>
          <h6 className='mr-5 mt-2'>BOOKS</h6>
          <h6 className='mt-2 text-muted'>CATEGORIES</h6>
          <div className="ml-3">
           <CategoryFilter filterBooks={handleFilterChange} />
          </div>
        </div>
      </nav>
      <div className="main-panel-sec">
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
    </div>
  );
};

const mapStateToProps = state => {
  switch (state.filter) {
    case 'All':
      return {
        booksData: state.books,
      };
    default:
      return {
        booksData: state.books.filter(book => book.category === (state.filter || book.category)),
      };
  }
};

const mapDispatchToProps = dispatch => ({
  deleteBook: book => { dispatch(removeBook(book)); },
  changeBookFilter: filter => { dispatch(changeFilter(filter)); },
});

BookList.propTypes = {
  booksData: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteBook: PropTypes.func.isRequired,
  changeBookFilter: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
