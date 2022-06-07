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
router.put('/:id', auth, async (req, res) => {
  const id = req.params.id;
  const updatedData = req.body;
  const options = { new: true };

  try {
    let shipment = await Shipment.findById(id);

    if (!shipment) {
      return res.status(404).json({ msg: 'Shipment not found' });
    }

    // if (shipment.admin.toString() !== req.admin.id) {
    //   return res.status(401).json({ msg: 'Not authorized' });
    // }

    const result = await Shipment.findByIdAndUpdate(id, updatedData, options);
    res.json(result);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

// @route   DELETE api/admin/:id
// @desc    delete a particular shipment
// @access  private
router.delete('/:id', auth, async (req, res) => {
  const id = req.params.id;

  try {
    let shipment = await Shipment.findById(id);

    if (!shipment) {
      return res.status(404).json({ msg: 'Shipment not found' });
    }

    // if (shipment.admin.toString() !== req.admin.id) {
    //   return res.status(401).json({ msg: 'Not authorized' });
    // }

    await Shipment.findByIdAndRemove(id);
    res.json({ msg: 'Contact deleted' });
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
