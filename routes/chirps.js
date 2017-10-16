// Import Modules
const express = require('express');
const router = express.Router();

// Chirp Repo
const chirps = require('../models/Chirps');

// Chirps Endpoints
router.get('/', (req,res) => {
    chirps.find({})
    .then((data) => {
        res.render('chirps', {chirps: data});
    })
});

router.post('/new', (req,res) => {
    let newPost = {
        title: req.body.title,
        post: req.body.post,
        comment: req.body.comment,
        author: req.body.author,
    }

    chirps.create(newPost)
    .then((data) => {
        res.send('Success');
    })
});

router.post('/update/:id', (req,res) => {
    let obj = req.body;
    chirps.update({_id: req.params.id}, req.body)
    .then((data) => {
        res.redirect('/chirps');
    })
});

router.post('/delete/:id', (req,res) => {
    let id = req.params.id;
    chirps.deleteOne({'_id': id})
    .then(() => {
        res.redirect('/chirps');
    })
});

router.get("/delete/all", (req,res) => {
    chirps.remove({},() => {
        res.redirect('/chirps');
    });
});

module.exports = router;
