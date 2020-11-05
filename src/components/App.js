import React from 'react';
import '../styles/styles.css';
import '../styles/circle.css';
import BooksList from '../containers/BookList';
import BooksForm from '../containers/BooksForm';

const App = () => (
  <div className="App">
    <BooksList />
    <BooksForm />
  </div>
);

export default App;
