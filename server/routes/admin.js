const express = require('express');
const router = express.Router();

// @route   GET api/admin
// @desc    get tracking info
// @access  private
router.get('/', (req, res) => {
  res.send('admin user info gotten');
});

// @route   POST api/admin
// @desc    add new shipment
// @access  private
router.post('/', (req, res) => {
  res.send('add new shipment');
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
