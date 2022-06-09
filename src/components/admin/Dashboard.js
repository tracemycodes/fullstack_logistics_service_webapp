import React, { useState } from 'react';
import { DivContainer } from '../../styles/styles';

const Dashboard = () => {
  const [orderData, setOrderData] = useState({
    product: '',
    price: '',
    weight: '',
    shipmentFrom: '',
    shipmentTo: '',
    presentLocation: '',
    orderTime: '',
    arrival: '',
    deliveryStatus: '',
  });

  const handleOnChange = (e) => {
    e.preventDefault();
    setOrderData({ ...orderData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <DivContainer>
        <form>
          <div>
            <label htmlFor='product'>Goods</label>
            <input
              type='text'
              name='product'
              id='product'
              onChange={handleOnChange}
            />
          </div>
          <div>
            <label htmlFor='price'>Estimated Worth</label>
            <input
              type='text'
              name='price'
              id='price'
              onChange={handleOnChange}
            />
          </div>
          <div>
            <label htmlFor='weight'>Weight of shipment</label>
            <input
              type='text'
              name='weight'
              id='weight'
              onChange={handleOnChange}
            />
          </div>
          <div>
            <label htmlFor='shipmentFrom'>Shipment From</label>
            <input
              type='text'
              name='shipmentFrom'
              id='shipmentFrom'
              onChange={handleOnChange}
            />
          </div>
          <div>
            <label htmlFor='shipmentTo'>Shipment To</label>
            <input
              type='text'
              name='shipmentTo'
              id='shipmentTo'
              onChange={handleOnChange}
            />
          </div>
          <div>
            <label htmlFor='presentLocation'>Current Location</label>
            <input
              type='text'
              name='presentLocation'
              id='presentLocation'
              onChange={handleOnChange}
            />
          </div>
          <div>
            <label htmlFor='orderTime'>Date Of Shipment</label>
            <input
              type='date'
              name='orderTime'
              id='orderTime'
              onChange={handleOnChange}
            />
          </div>
          <div>
            <label htmlFor='arrival'>Estimated Arrival</label>
            <input
              type='date'
              name='arrival'
              id='arrival'
              onChange={handleOnChange}
            />
          </div>
          <div>
            <label htmlFor='deliveryStatus'>Delivery Status</label>
            <input
              type='text'
              name='deliveryStatus'
              id='deliveryStatus'
              onChange={handleOnChange}
            />
          </div>
          <input type='submit' value='Add Shipment' />
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
              <th>Arrival Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1 ......</th>
              <td>gold</td>
              <td>$50</td>
              <td>7tons</td>
              <td>lagos</td>
              <td>accra</td>
              <td>togo</td>
              <td>7th oct</td>
              <td>17th nov</td>
              <td>pending</td>
              <td>
                <button>update</button>
              </td>
              <td>
                <button>delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </DivContainer>
    </>
  );
};

export default Dashboard;
