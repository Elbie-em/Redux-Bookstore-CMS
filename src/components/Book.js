import React from 'react';
import PropTypes from 'prop-types';


const Book = ({ book, handleRemoveBook }) => {
  const percentage = Math.floor(Math.random() * (100 - 1)) / 100;
  const value = Math.round(percentage * 100);

  return (
    <div className="p-3">
      <div className="row data-card mt-5 mb-3 mx-auto">
        <div className="col-md-6 p-3">
          <h6 className="text-muted">{book.category}</h6>
          <h2 className="title-font mr-5 mt-1">{book.title}</h2>
          <h5 className="font-weight-lighter text-primary">Book Id: {book.id}</h5>
          <p>
            <span className="font-weight-lighter text-primary">Comments</span>
            <span className="font-weight-lighter h4">|</span>
            <span className="font-weight-lighter text-primary">Edit</span>
            <span className="font-weight-lighter h4">|</span>
            <span className="font-weight-lighter text-primary" onClick={() => handleRemoveBook(book.id)}> Remove Book </span>
          </p>
        </div>
        <div className="row col-md-6">
          <div className="row col-md-6 p-4">
            <div className="col-md-8">
              <div className="c100 p50">
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                </div>
              </div>
            </div>
            <div className="col-md-4 mt-3">
              <h3>{value}%</h3>
              <h6>Completed</h6>
            </div>
          </div>
          <div className="col-md-6 p-4">
            <h6 className="ml-5 text-muted font-weight-light">CURRENT CHAPTER</h6>
            <h6 className="ml-5 mt-3 font-weight-light">Chapter 19</h6>
            <button className="ml-5 mt-3 btn btn-primary font-weight-light">Update Progress</button>
          </div>
        </div>
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
