import React from 'react';
import PropTypes from 'prop-types';


const Book = ({ book, handleRemoveBook }) => {
  const percentage = Math.floor(Math.random() * (100 - 1)) / 100;
  const value = Math.round(percentage * 100);

  
  const c_value = Math.round((Math.floor(Math.random() * (100 - 1)) / 100)* 100);

  return (
    <div className="p-3">
      <div className="row data-card mt-5 mb-3 mx-auto bg-white">
        <div className="col-md-6 p-3">
          <h6 className="text-muted">{book.category}</h6>
          <h2 className="title-font card-el-font mr-5 mt-1">{book.title}</h2>
          <h5 className="card-el-font font-weight-lighter text-primary">Book Id: {book.id}</h5>
          <p>
            <span className="card-el-font data-card-link font-weight-lighter text-primary">Comments</span>
            <span className="text-muted font-weight-lighter h4 mr-3 ml-3">|</span>
            <span className="card-el-font data-card-link font-weight-lighter text-primary">Edit</span>
            <span className="text-muted font-weight-lighter h4 mr-3 ml-3">|</span>
            <span className="card-el-font data-card-link font-weight-lighter text-primary" onClick={() => handleRemoveBook(book.id)}> Remove Book </span>
          </p>
        </div>
        <div className="row col-md-6">
          <div className="row col-md-6 p-4">
            <div className="col-md-8">
              <div className={`c100 p${value}`}>
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                </div>
              </div>
            </div>
            <div className="col-md-4 mt-3">
              <h2 className="main-font font-weight-bold">{value}%</h2>
              <h6 className="font-weight-light main-font">Completed</h6>
            </div>
          </div>
          <div className="col-md-6 p-4">
            <h6 className="card-el-font ml-5 text-muted font-weight-light">CURRENT CHAPTER</h6>
  <h6 className="card-el-font ml-5 mt-3 font-weight-light">Chapter {c_value}</h6>
            <button className="ml-5 mt-3 btn btn-primary font-weight-light card-el-font">UPDATE PROGRESS</button>
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
