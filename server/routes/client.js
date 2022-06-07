const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');

const Admin = require('../models/Admin');

// @route   GET api/client
// @desc    get tracking info
// @access  public
router.get('/', (req, res) => {
  res.send('tracking info gotten');
});

// @route   POST api/client
// @desc    add admin
// @access  public
router.post(
  '/',
  [
    check('name', 'name is required').not().isEmpty(),
    check('email', 'Please enter a valid email').isEmail(),
    check('password', 'Please include a valid password').isLength({ min: 6 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { name, email, password } = req.body;

    try {
      let admin = await Admin.findOne({ email });
      if (admin) {
        return res.status(400).json({ masg: 'admin already exist' });
      }
      admin = new Admin({
        name,
        email,
        password,
      });

      const salt = await bcrypt.genSalt(10);

      admin.password = await bcrypt.hash(password, salt);

      await admin.save();

      const payload = {
        admin: {
          id: admin.id,
        },
      };

      await jwt.sign(
        payload,
        config.get('jwtSecret'),
        {
          expiresIn: 36000,
        },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (error) {
      console.error(error.message);
      res.status(500).send('server error');
    }
  }
);

module.exports = router;
