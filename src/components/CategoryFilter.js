import React from 'react';

const CategoryFilter = ({filterBooks}) => {

  const categories = ["All", "Action", "Biography", "History", "Horror", "Kids", "Learning", "Sci-Fi"];

  return (
    <select type='text' id="category" name="category" onChange={filterBooks}>
          {categories.map(category => <option key={category}  value={category} > {category} </option>)}
    </select>
  );
}

export default CategoryFilter;