const express = require('express');
const breweryRouter = express.Router();
const Brewery = require('../models/brewery');

breweryRouter.get('/:brewery_id', (req, res) => {
    Brewery.findById(req.params.brewery_id, (err, brewery) => {
        if (err) {
            res.status(400).send(err);
        }
        else {
            res.json(brewery)
        }
    })
})

breweryRouter.put('/:brewery_id', (req, res) => {
    Brewery.findById(req.params.brewery_id, (err, brewery) => {
        if (err) {
            res.send(err)
        }
       
        brewery.name = req.body.name
        brewery.address = req.body.address;
        brewery.favorite = req.body.favorite;
 
        brewery.save((err, document) => {
            if (err) {
                res.status(400).send(err)
            }
            else {
                res.status(200).json(`Brewery posted!\n${document}`)
            }
        })
    })
 })

 breweryRouter.delete('/:brewery_id', (req, res) => {
    Brewery.deleteOne({
        _id: req.params.brewery_id
    }, (err) => {
        if (err) {
            res.send(err)
        }
        else {
            res.send('You successfully deleted brewery: ' + req.params.brewery_id)
        }
    })
 })

breweryRouter.get('/', (req, res) => {
    Brewery.find((err, breweries) => {
        if (err) {
            res.status(400).send(err);
        }
        else {
            res.json(breweries)
        }
    })
})

breweryRouter.post('/', (req, res) => {
    let brewery = new Brewery();
    brewery.name = req.body.name;
    brewery.address = req.body.address;
    brewery.favorite = req.body.favorite;
    brewery.save((err, document) => {
        if (err) {
            res.status(400).send(err);
        }
        else {
            res.status(200).send(`Saved your object: ${document}`)
        }
    });
})

breweryRouter.use('/', (req, res) => {
    res.send('Brewery router is working!')
});

module.exports = breweryRouter;