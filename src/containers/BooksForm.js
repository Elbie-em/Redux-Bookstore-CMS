import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createBook } from '../actions'

const BooksForm = ({ createBook }) => {
  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

  const [book, setBook] = useState({
    title:'',
    category: 'Action'
  });

  const handleChange = ({target}) => {
    setBook(state => ({
      ...state,
      [target.name]: target.value,
      id: Math.floor(Math.random() * 100) + 1,
    }));
  }

  const handleSubmit = event => {
    event.preventDefault();
    createBook(book);
    setBook({ title: '', category: 'Action' });
  };

  return (
    <form>
      <input type="text" id='title' name='title' placeholder="Book Title Here" onChange={handleChange} value={book.title}/>
      <select type="text" id="category" name="category" onChange={handleChange} value={book.category} required>
        {categories.map(category => (
          <option key={categories.indexOf(category)} value={category}>
            {' '}
            {category}
            {' '}
          </option>
        ))}
      </select>
      <button type="submit" value="Submit" onClick={handleSubmit}>
        Submit
      </button>
    </form>
  );
};

const mapDispatchToProps = dispatch => ({
  createBook: book => { dispatch(createBook(book)); },
});


export default connect(null,mapDispatchToProps)(BooksForm);
