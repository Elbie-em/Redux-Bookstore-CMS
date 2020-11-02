import React from 'react';
import PropTypes from 'prop-types';

const CategoryFilter = ({filterBooks}) => {

  const categories = ["All", "Action", "Biography", "History", "Horror", "Kids", "Learning", "Sci-Fi"];

  return (
    <select type='text' id="category" name="category" onChange={filterBooks}>
          {categories.map(category => <option key={category}  value={category} > {category} </option>)}
    </select>
  );
}

CategoryFilter.propTypes = {
  filterBooks: PropTypes.func.isRequired,
};


export default CategoryFilter;