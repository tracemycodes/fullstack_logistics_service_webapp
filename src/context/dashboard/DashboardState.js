import React, { useReducer } from 'react';
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
    goods: [
      {
        id: '01',
        product: 'lamp',
        price: '$46',
        weight: '10kg',
        shipmentFrom: 'owerri',
        shipmentTo: 'lagos',
        presentLocation: 'ondo',
        orderTime: '4th jun 2013',
        arrival: '12th may 2013',
        status: 'pending',
      },
      {
        id: '02',
        product: 'lamp',
        price: '$46',
        weight: '10kg',
        shipmentFrom: 'owerri',
        shipmentTo: 'lagos',
        presentLocation: 'ondo',
        orderTime: '4th jun 2013',
        arrival: '12th may 2013',
        status: 'pending',
      },
      {
        id: '03',
        product: 'lamp',
        price: '$46',
        weight: '10kg',
        shipmentFrom: 'owerri',
        shipmentTo: 'lagos',
        presentLocation: 'ondo',
        orderTime: '4th jun 2013',
        arrival: '12th may 2013',
        status: 'pending',
      },
      {
        id: '04',
        product: 'lamp',
        price: '$46',
        weight: '10kg',
        shipmentFrom: 'owerri',
        shipmentTo: 'lagos',
        presentLocation: 'ondo',
        orderTime: '4th jun 2013',
        arrival: '12th may 2013',
        status: 'pending',
      },
    ],
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
