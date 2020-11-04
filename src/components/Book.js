import React from 'react';
import PropTypes from 'prop-types';

const Book = ({ book, handleRemoveBook }) => {
  const percentage = Math.floor(Math.random() * (100 - 1)) / 100;
  const value = Math.round(percentage * 100);

  return (
    <div className="p-3">
      <div className="data-card mx-auto d-flex flex-column p-3 bg-white">
        <h6 className="text-muted">{book.category}</h6>
        <div className="d-flex flex-row w-100">
          <h2 className="title-font mr-5 mt-1">{book.title}</h2>
          <div className="w-75 mt-3 progress">
            <div className="progress-bar" role="progressbar" style={{ flex: percentage }}>
              {value}
              %
            </div>
          </div>
        </div>
        <h5 className="font-weight-lighter text-primary">
          Book Id:
          {book.id}
        </h5>
        <p>
          <span className="font-weight-lighter text-primary btn btn-link">Comments</span>
          <span className="text-muted font-weight-lighter h4">|</span>
          <span className="font-weight-lighter text-primary  btn btn-link">Edit</span>
          <button className="btn btn-primary float-right" type="submit" onClick={() => handleRemoveBook(book.id)}> Remove Book </button>
        </p>
      </div>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
  handleRemoveBook: PropTypes.func.isRequired,
};

export default Book;
