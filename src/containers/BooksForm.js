import React, { useState } from 'react';

const BooksForm = () => {
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

export default BooksForm;
