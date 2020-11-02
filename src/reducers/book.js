import { CREATE_BOOK, REMOVE_BOOK } from '../actions/actionTypes';

const bookA = {
  id: Math.floor(Math.random() * 100) + 1,
  title: 'Divergent',
  category: 'Action',
};

const bookB = {
  id: Math.floor(Math.random() * 100) + 1,
  title: 'Maze Runner',
  category: 'Action',
};

const bookC = {
  id: Math.floor(Math.random() * 100) + 1,
  title: 'Enders Game',
  category: 'Sci-Fi',
};

const bookD = {
  id: Math.floor(Math.random() * 100) + 1,
  title: 'Harry Potter',
  category: 'Sci-Fi',
};

const bookE = {
  id: Math.floor(Math.random() * 100) + 1,
  title: 'Bicos House',
  category: 'Horror',
};

const bookF = {
  id: Math.floor(Math.random() * 100) + 1,
  title: 'Timeless',
  category: 'Biography',
};

const initialState = [bookA, bookB, bookC,bookD,bookE,bookF];

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return [
        ...state, action.payload,
      ];
    case REMOVE_BOOK:
      return state.filter(book => book.id !== action.payload);
    default:
      return state;
  }
};

export default booksReducer;
