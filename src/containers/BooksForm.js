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
    <div class="p-5 w-100">
      <form className="form-inline border p-2 d-flex align-items-center">
        <div className="form-group mb-2">
         <label for="title" className="h4 ml-5 mr-2">Book Title</label>
         <input className="form-control" type="text" id="title" name="title" placeholder="Book Title Here" onChange={handleChange} value={book.title} />
        </div>
        <div className= "form-group mb-2">
        <label for="category" className="h4 ml-5 mr-2">Choose Category</label>
        <select className="form-control" type="text" id="category" name="category" onChange={handleChange} value={book.category} required>
        {categories.map(category => (
          <option key={categories.indexOf(category)} value={category}>
            {' '}
            {category}
            {' '}
          </option>
        ))}
      </select>
        </div>
      <button className="btn btn-primary mb-2  ml-5 mr-2 w-25" type="submit" value="Submit" onClick={handleSubmit}>
        ADD BOOK
      </button>
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
