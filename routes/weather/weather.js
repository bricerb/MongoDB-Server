const express = require('express');
const router = express.Router();
const cityData = require('./city.list.min.json');

// Home Endpoints
router.get('/', (req,res) => {
    res.send();
})

module.exports = router;
