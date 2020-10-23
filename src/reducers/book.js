import { CREATE_BOOK, REMOVE_BOOK} from '../actions/actionTypes';

const book_a = {
  id: Math.floor(Math.random() * 100) + 1,
  title: 'Divergent',
  category: 'Action',
};

const book_b = {
  id: Math.floor(Math.random() * 100) + 1,
  title: 'Maze Runner',
  category: 'Action',
};

const book_c = {
  id: Math.floor(Math.random() * 100) + 1,
  title: 'Enders Game',
  category: 'Sci-Fi',
};

const initialState = [book_a,book_b,book_c];

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