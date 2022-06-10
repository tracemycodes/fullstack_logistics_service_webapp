const mongoose = require('mongoose');

const ShipmentSchema = mongoose.Schema({
  admin: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'admin',
  },
  product: {
    type: String,
    // required: true,
  },
  price: {
    type: String,
    // required: true,
  },
  weight: {
    type: String,
    // required: true,
  },
  shipmentFrom: {
    type: String,
    // required: true,
  },
  shipmentTo: {
    type: String,
    // required: true,
  },
  presentLocation: {
    type: String,
    // required: true,
  },
  orderTime: {
    type: String,
    // required: true,
  },
  arrival: {
    type: String,
    // required: true,
  },
  status: {
    type: String,
    // required: true,
  },
  lat: {
    type: String,
    // required: true,
  },
  lon: {
    type: String,
    // required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('shipment', ShipmentSchema);
