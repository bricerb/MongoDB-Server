const express = require('express');
const router = express.Router();

// Home Endpoints
router.get('/', (req,res) => {
    res.render('home');
})

// Content Endpoint
router.get('/yitcontent', (req,res) => {
    res.render('yit');
});

module.exports = router;
