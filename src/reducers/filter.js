import { CHANGE_FILTER } from '../actions/actionTypes';

const filterReducer = (state = '', action) => {
  switch (action.type) {
    case CHANGE_FILTER:
      return (action.payload === 'All' ? '' : action.payload);
    default:
      return state;
  }
};

export default filterReducer;