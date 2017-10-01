const express = require('express');
const router = express.Router();
const axios = require('axios');

// GET API LISTENING

router.get('/',(req,res) => {
  res.send('API Works ! nice :)')
});

module.exports = router;
