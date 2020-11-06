import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createBook } from '../actions';

const BooksForm = ({ createBook }) => {
  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

  const [book, setBook] = useState({
    title: '',
    category: 'Action',
  });

  const handleChange = ({ target }) => {
    setBook(state => ({
      ...state,
      [target.name]: target.value,
      id: Math.floor(Math.random() * 100) + 1,
    }));
  };

  const handleSubmit = event => {
    event.preventDefault();
    createBook(book);
    setBook({ title: '', category: 'Action' });
  };

  return (
    <div className="form-area mx-auto mb-5">
      <h3 className="main-font text-muted font-weight-bold">ADD NEW BOOK</h3>
      <form className="mt-2">
        <input className="form-el book-title main-font" type="text" id="title" name="title" placeholder="Book title" onChange={handleChange} value={book.title} />
        <select className="form-el book-category main-font" type="text" id="category" name="category" onChange={handleChange} value={book.category} required>
          {categories.map(category => (
            <option key={categories.indexOf(category)} value={category}>
              {' '}
              {category}
              {' '}
            </option>
          ))}
        </select>
        <button className="form-btn card-el-font font-weight-bold text-white" type="submit" value="Submit" onClick={handleSubmit}>ADD BOOK</button>
      </form>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  createBook: book => { dispatch(createBook(book)); },
});

BooksForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(BooksForm);
