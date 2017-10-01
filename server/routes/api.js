const express = require('express');
const router = express.Router();

const axios = require('axios');
const API = 'https://jsonplaceholder.typicode.com';

// GET API LISTENING

router.get('/', (req, res) => {
  res.send('API Works ! nice :)')
});

// get all posts
router.get('/posts', (req, res) => {
  axios.get(`${API}/posts`)
  .then(posts => {
    res.status(200).json(posts.data);
  })
  .catch(error => {
    res.status(500).send(error)
  });
});

module.exports = router;
