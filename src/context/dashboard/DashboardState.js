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
  const getGoods = async () => {
    try {
      const res = await axios.get('/api/admin');
      dispatch({
        type: GET_GOODS,
        payload: res.data,
      });
    } catch (error) {
      dispatch({
        type: GOODS_ERROR,
        payload: error.response.msg,
      });
    }
  };

  // add shipments
  const addGoods = async (shipment) => {
    const config = {
      Headers: {
        'Content-Type': 'application/json',
      },
    };

    try {
      console.log('send post', shipment);
      const res = await axios.post('/api/admin', shipment, config);

      dispatch({
        type: ADD_GOODS,
        payload: res.data,
      });
    } catch (error) {
      dispatch({ type: GOODS_ERROR, payload: error.response.msg });
    }
  };

  //delete shipment
  const deleteGoods = async (id) => {
    console.log(id);
    try {
      await axios.delete(`/api/admin/${id}`);
      dispatch({ type: DELETE_GOODS, payload: id });
    } catch (error) {
      dispatch({ type: GOODS_ERROR, payload: error.response.msg });
    }
  };

  //update shipment
  const updateGoods = async (shipment) => {
    const config = {
      Headers: {
        'Content-Type': 'application/json',
      },
    };

    console.log(shipment);
    try {
      const res = await axios.put(
        `/api/admin/${shipment._id}`,
        shipment,
        config
      );
      dispatch({ type: UPDATE_GOODS, payload: res.data });
    } catch (error) {
      dispatch({ type: GOODS_ERROR, payload: error.response.msg });
    }
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
