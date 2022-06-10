import React, { useContext } from 'react';
import DashboardContext from '../../context/dashboard/dashboardContext';

const ProductInfo = ({ item }) => {
  const dashboardContext = useContext(DashboardContext);
  const { deleteGoods, setCurrent } = dashboardContext;
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
    _id,
  } = item;

  const handleOnClick = () => {
    console.log(item);
    deleteGoods(_id);
  };

  return (
    <>
      <tr>
        <th>{_id}</th>
        <td>{product}</td>
        <td>{price}</td>
        <td>{weight}</td>
        <td>{shipmentFrom}</td>
        <td>{shipmentTo}</td>
        <td>{presentLocation}</td>
        <td>{orderTime}</td>
        <td>{arrival}</td>
        <td>{status}</td>
        <td>
          <button onClick={() => setCurrent(item)}>update</button>
        </td>
        <td>
          <button onClick={handleOnClick}>delete</button>
        </td>
      </tr>
    </>
  );
};

export default ProductInfo;
