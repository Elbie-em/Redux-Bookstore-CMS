import { CREATE_BOOK, REMOVE_BOOK } from './actionTypes';

export const createBook = data => ({
  type: CREATE_BOOK,
  payload: data,
});

export const removeBook = data => ({
  type: REMOVE_BOOK,
  payload: data,
});
