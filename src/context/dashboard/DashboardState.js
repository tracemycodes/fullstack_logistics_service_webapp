import React, { useReducer } from 'react';
import axios from 'axios';
import DashboardContext from './dashboardContext';
import DashboardReducer from './dashboardReducer';

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

const DashboardState = (props) => {
  const initialState = {
    goods: [],
    current: null,
    filtered: null,
    error: null,
  };

  const [state, dispatch] = useReducer(DashboardReducer, initialState);

  //get goods from database
  const getGoods = () => {};

  // add shipments
  const addGoods = (shipment) => {
    dispatch({
      type: ADD_GOODS,
      payload: shipment,
    });
  };

  //delete shipment
  const deleteGoods = (id) => {
    console.log('object');
    dispatch({
      type: DELETE_GOODS,
      payload: id,
    });
  };

  //update shipment
  const updateGoods = (shipment) => {
    dispatch({
      type: UPDATE_GOODS,
      payload: shipment,
    });
  };

  //clear current shipment
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

  //set current shipment for update
  const setCurrent = (product) => {
    dispatch({
      type: CURRENT_GOODS,
      payload: product,
    });
  };

  // Filter Contacts
  const filterContact = () => {};

  //Clear Filter
  const clearFilter = () => {};

  return (
    <DashboardContext.Provider
      value={{
        goods: state.goods,
        current: state.current,
        filtered: state.filtered,
        error: state.error,
        addGoods,
        getGoods,
        deleteGoods,
        updateGoods,
        setCurrent,
        filterContact,
        clearFilter,
        clearCurrent,
      }}
    >
      {props.children}
    </DashboardContext.Provider>
  );
};

export default DashboardState;
