const express = require('express');
const router = express.Router();

// @route   GET api/client
// @desc    get tracking info
// @access  public
router.get('/', (req, res) => {
  res.send('tracking info gotten');
});

module.exports = router;
