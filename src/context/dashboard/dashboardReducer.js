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
    case GET_GOODS:
      return {
        ...state,
        goods: action.payload,
        loading: false,
      };
    case ADD_GOODS:
      return {
        ...state,
        goods: [...state.goods, action.payload],
        loading: false,
      };
    case DELETE_GOODS:
      return {
        ...state,
        goods: state.goods.filter((item) => item._id !== action.payload),
        loading: false,
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
          item._id === action.payload._id ? action.payload : item
        ),
        loading: false,
      };
    case GOODS_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
