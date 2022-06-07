const express = require('express');
const router = express.Router();

// @route   GET api/client
// @desc    get tracking info
// @access  public
router.get('/', (req, res) => {
  res.send('admin user gotten');
});

// @route   POST api/client
// @desc    auth user & get token
// @access  public
router.post('/', (req, res) => {
  res.send('login and autenticate');
});

module.exports = router;
