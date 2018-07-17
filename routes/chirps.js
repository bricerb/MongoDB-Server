// Import Modules
const express = require('express');
const router = express.Router();

// Chirp Repo
const chirps = require('../models/Chirps');

// MVC Endpoints
router.get('/', (req,res) => {
    chirps.find({})
    .then((data) => {
        res.render('chirps', {chirps: data});
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

// RESTful endpoints

router.get('/all', (req,res) => {
    chirps.find({})
    .then((data) => {
        res.send({'data': data});
    })
})

router.post('/new', (req,res) => {
    let newPost = {
        title: req.body.title,
        post: req.body.post,
        comment: req.body.comment,
        author: req.body.author,
    }

    chirps.create(newPost)
    .then((data) => {
        res.send({status: 'Successfully created'});
    })
});

router.put('/update/:id', (req,res) => {
    let obj = req.body;
    chirps.update({_id: req.params.id}, req.body)
    .then((data) => {
        var json = {
            data: data
        }
        res.send(json);
    })
});

router.delete('/delete/:id', (req,res) => {
    let id = req.params.id;
    chirps.deleteOne({'_id': id})
    .then(() => {
        res.send({status: 'Successfully deleted'});
    })
});



module.exports = router;
