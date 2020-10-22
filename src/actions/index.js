import { CREATE_BOOK, REMOVE_BOOK} from './actionTypes';

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