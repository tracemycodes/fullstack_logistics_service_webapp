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
} from '../types';

const DashboardState = (props) => {
  const initialState = {
    goods: [
      {
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
  const addGoods = () => {};

  //delete shipment
  const deleteGoods = () => {};

  //update shipment
  const updateGoods = () => {};

  //set current shipment for update
  const setCurrent = () => {};

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
      }}
    >
      {props.children}
    </DashboardContext.Provider>
  );
};

export default DashboardState;
