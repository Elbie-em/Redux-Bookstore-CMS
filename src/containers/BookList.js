import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';

const BookList = ({ booksData }) => (
  <div>
    <h1>Book List</h1>
    <table>
      <tr>
        <th>Title</th>
        <th>Category</th>
        <th>ID</th>
      </tr>
      {booksData.map(book => <Book key={book.id} book={book} />)}
    </table>
  </div>
);

const mapStateToProps = state => ({
  booksData: state.books,
});

BookList.propTypes = {
  booksData: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps)(BookList);
