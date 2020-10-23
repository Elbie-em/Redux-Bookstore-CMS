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

const initialState = [bookA, bookB, bookC];

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
