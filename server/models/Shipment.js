const mongoose = require('mongoose');

const ShipmentSchema = mongoose.Schema({
  admin: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'admin',
  },
  orderId: {
    type: String,
    required: true,
    unique: true,
  },
  orderTime: {
    type: String,
    required: true,
  },
  product: {
    type: Object,
    required: true,
  },
  date: {
    type: Date,
    required: Date.now,
  },
  deliveryStatus: {
    type: String,
    required: true,
  },
  arrival: {
    type: String,
    required: true,
  },
  price: {
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
});

module.exports = mongoose.model('shipment', ShipmentSchema);
