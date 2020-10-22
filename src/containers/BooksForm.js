import React from 'react'

const BooksForm = () => {
  const categories = ["Action", "Biography", "History", "Horror", "Kids", "Learning", "Sci-Fi"];
  return (
    <form>
        <input type="text" placeholder="Book Title Here"></input>
        <select >
          {categories.map(category => <option value={category} > {category} </option>  )}
        </select>
        <button type="submit" value="Submit" >
          Submit
        </button>
    </form>
  )
}

export default BooksForm
