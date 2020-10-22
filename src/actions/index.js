const CREATE_BOOK= 'CREATE_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

export const createBook = (data) => {
  return {
    type: CREATE_BOOK,
    payload: data,
  }
}

export const removeBook = (data) => {
  return {
    type: REMOVE_BOOK,
    payload: data,
  }
}