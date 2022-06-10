import {
  ADD_GOODS,
  GET_GOODS,
  CURRENT_GOODS,
  CLEAR_FILTER,
  GOODS_ERROR,
  DELETE_GOODS,
  UPDATE_GOODS,
  FILTER_GOODS,
  CLEAR_CURRENT,
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case ADD_GOODS:
      return {
        ...state,
        goods: [...state.goods, action.payload],
      };
    case DELETE_GOODS:
      return {
        ...state,
        goods: state.goods.filter((item) => item.id !== action.payload),
      };
    case CURRENT_GOODS:
      return {
        ...state,
        current: action.payload,
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null,
      };
    case UPDATE_GOODS:
      return {
        ...state,
        goods: state.goods.map((item) =>
          item.id === action.payload.id ? action.payload : item
        ),
      };
    default:
      return state;
  }
};
