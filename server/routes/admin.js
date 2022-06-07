const express = require('express');
const router = express.Router();
const config = require('config');
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');

const Admin = require('../models/Admin');
const Shipment = require('../models/Shipment');

// @route   GET api/admin
// @desc    get tracking info
// @access  private
router.get('/', auth, async (req, res) => {
  try {
    const shipments = await Shipment.find({ admin: req.admin.id }).sort({
      orderTime: -1,
    });
    res.json(shipments);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server error');
  }
});

// @route   POST api/admin
// @desc    add new shipment
// @access  private
router.post('/', auth, async (req, res) => {
  const {
    orderId,
    orderTime,
    product,
    date,
    deliveryStatus,
    arrival,
    price,
    shipmentFrom,
    shipmentTo,
    presentLocation,
  } = req.body;

  try {
    const newShipments = new Shipment({
      admin: req.admin.id,
      orderId,
      orderTime,
      product,
      date,
      deliveryStatus,
      arrival,
      price,
      shipmentFrom,
      shipmentTo,
      presentLocation,
    });

    const shipments = await newShipments.save();

    res.json(shipments);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

// @route   PUT api/admin/:id
// @desc    update a particular shipment
// @access  private
router.put('/:id', (req, res) => {
  res.send('update shipment');
});

// @route   DELETE api/admin/:id
// @desc    delete a particular shipment
// @access  private
router.delete('/:id', (req, res) => {
  res.send('delete shipment');
});

module.exports = router;
