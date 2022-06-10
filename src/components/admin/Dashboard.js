import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../../context/auth/authContext';
import DashboardContext from '../../context/dashboard/dashboardContext';
import { DivContainer } from '../../styles/styles';
import ProductInfo from './ProductInfo';

const Dashboard = () => {
  const authContext = useContext(AuthContext);
  const dashboardContext = useContext(DashboardContext);
  const { goods, addGoods, current, updateGoods, clearCurrent } =
    dashboardContext;

  useEffect(() => {
    authContext.loadAdmin();
    if (current !== null) {
      setOrderData(current);
    } else {
      setOrderData({
        product: '',
        price: '',
        weight: '',
        shipmentFrom: '',
        shipmentTo: '',
        presentLocation: '',
        orderTime: '',
        arrival: '',
        status: '',
        lat: '',
        lon: '',
      });
    }
    //eslint-disable-next-line
  }, [current]);

  const [orderData, setOrderData] = useState({
    product: '',
    price: '',
    weight: '',
    shipmentFrom: '',
    shipmentTo: '',
    presentLocation: '',
    orderTime: '',
    arrival: '',
    status: '',
    lat: '',
    lon: '',
  });

  const {
    product,
    price,
    weight,
    shipmentFrom,
    shipmentTo,
    presentLocation,
    orderTime,
    arrival,
    status,
    lat,
    lon,
  } = orderData;

  const handleOnChange = (e) => {
    e.preventDefault();
    setOrderData({ ...orderData, [e.target.name]: e.target.value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (current === null) {
      addGoods(orderData);
    } else {
      updateGoods(orderData);
    }
    handleClear();
    console.log(orderData);
  };

  const handleClear = () => {
    clearCurrent();
  };

  return (
    <>
      <DivContainer>
        <form onSubmit={handleOnSubmit}>
          <div>
            <label htmlFor='product'>Goods</label>
            <input
              type='text'
              name='product'
              id='product'
              value={product}
              onChange={handleOnChange}
            />
          </div>
          <div>
            <label htmlFor='price'>Estimated Worth</label>
            <input
              type='text'
              name='price'
              id='price'
              value={price}
              onChange={handleOnChange}
            />
          </div>
          <div>
            <label htmlFor='weight'>Weight of shipment</label>
            <input
              type='text'
              name='weight'
              id='weight'
              value={weight}
              onChange={handleOnChange}
            />
          </div>
          <div>
            <label htmlFor='shipmentFrom'>Shipment From</label>
            <input
              type='text'
              name='shipmentFrom'
              id='shipmentFrom'
              value={shipmentFrom}
              onChange={handleOnChange}
            />
          </div>
          <div>
            <label htmlFor='shipmentTo'>Shipment To</label>
            <input
              type='text'
              name='shipmentTo'
              id='shipmentTo'
              value={shipmentTo}
              onChange={handleOnChange}
            />
          </div>
          <div>
            <label htmlFor='presentLocation'>Current Location</label>
            <input
              type='text'
              name='presentLocation'
              id='presentLocation'
              value={presentLocation}
              onChange={handleOnChange}
            />
          </div>
          <div>
            <label htmlFor='lat'>Lat</label>
            <input
              type='text'
              name='lat'
              id='lat'
              value={lat}
              onChange={handleOnChange}
            />
            <label htmlFor='lon'>Lon</label>
            <input
              type='text'
              name='lon'
              id='lon'
              value={lon}
              onChange={handleOnChange}
            />
          </div>
          <div>
            <label htmlFor='orderTime'>Date Of Shipment</label>
            <input
              type='date'
              name='orderTime'
              id='orderTime'
              value={orderTime}
              onChange={handleOnChange}
            />
          </div>
          <div>
            <label htmlFor='arrival'>Estimated Arrival</label>
            <input
              type='date'
              name='arrival'
              id='arrival'
              value={arrival}
              onChange={handleOnChange}
            />
          </div>
          <div>
            <label htmlFor='status'>Delivery Status</label>
            <input
              type='text'
              name='status'
              id='status'
              value={status}
              onChange={handleOnChange}
            />
          </div>
          <input
            type='submit'
            value={current ? 'Update Shipment' : 'Add Shipment'}
          />
          {current && (
            <div>
              <button onClick={handleClear}>Clear</button>
            </div>
          )}
        </form>
        <div className='search-bar'>
          <form>
            <input type='text' name='filter' id='filter' />
            <button>add shipment</button>
          </form>
        </div>

        <table>
          <thead>
            <tr>
              <th></th>
              <th>Goods</th>
              <th>Price</th>
              <th>Weight</th>
              <th>From</th>
              <th>Destination</th>
              <th>Location</th>
              <th>Date Logged</th>
              <th>Estimated Arrival</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {goods.map((item) => (
              <ProductInfo item={item} key={item.id} />
            ))}
          </tbody>
        </table>
      </DivContainer>
    </>
  );
};

export default Dashboard;
