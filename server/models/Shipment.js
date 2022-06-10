const mongoose = require('mongoose');

const ShipmentSchema = mongoose.Schema({
  product: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  weight: {
    type: String,
    required: true,
  },
  shipmentFrom: {
    type: String,
    required: true,
  },
  shipmentTo: {
    type: String,
    required: true,
  },
  presentLocation: {
    type: String,
    required: true,
  },
  orderTime: {
    type: Date,
    required: true,
  },
  arrival: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  Lat: {
    type: String,
    required: true,
  },
  Lon: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: Date.now,
  },
  admin: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'admin',
  },
});

module.exports = mongoose.model('shipment', ShipmentSchema);
