import React, { useState } from 'react';
import { createBook } from '../actions'

const BooksForm = ({ createBook }) => {
  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];

  const [book, setBook] = useState({
    title:'',
    category: 'Action'
  });

  const handleChange = ({target}) => {
    setNewBook(state => ({
      ...state,
      [target.name]: target.value,
    }));
  }

  const handleSubmit = event => {
    createBook(newBook);
    setNewBook({ title: '', category: 'Action' });
    event.preventDefault();
  };

  return (
    <form>
      <input type="text" placeholder="Book Title Here" />
      <select>
        {categories.map(category => (
          <option key={categories.indexOf(category)} value={category}>
            {' '}
            {category}
            {' '}
          </option>
        ))}
      </select>
      <button type="submit" value="Submit">
        Submit
      </button>
    </form>
  );
};

const mapDispatchToProps = dispatch => ({
  createBook: book => { dispatch(createBook(book)); },
});


export default BooksForm;
