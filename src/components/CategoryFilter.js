import React from 'react';

const CategoryFilter = () => {

  const categories = ["All", "Action", "Biography", "History", "Horror", "Kids", "Learning", "Sci-Fi"];

  return (
    <select id="category" name="category" >
          {categories.map(category => <option key={category}  value={category} > {category} </option>)}
    </select>
  );
}

export default CategoryFilter;