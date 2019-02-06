const express = require('express');
const beerRouter = express.Router();

//Routes
beerRouter.get('/', (req, res) => {
  res.send('* a bunch of beers');
});

beerRouter.post('/', (req, res) => {
  console.log(req.body);
  res.send(`Saved your ${req.body.name} to the DB!`)
});



//CATCH ALL
beerRouter.use('/', (req, res) => {
  res.send('Beer router is working');
});



module.exports = beerRouter;