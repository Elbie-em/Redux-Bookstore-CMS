const CREATE_BOOK= 'CREATE_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

export const createBook = () => {
  return {
    type: CREATE_BOOK,
  }
}

export const removeBook = () => {
  return {
    type: REMOVE_BOOK,
  }
}