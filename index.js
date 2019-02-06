//DEPENDENCIES
const express = require('express');
const app = express();
const beerRouter =  require('./routes/beerRouter');
const mongoose = require('mongoose');
//USES
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//////////////////////////////////////////

app.use('/api/beers', beerRouter);



// app.use('/verb', (req, res) => {
//   const method = req.method;
//   res.send(method);
// });

app.use('/', (req, res) => {
  res.send('Hello Bishes!');
});


//////////////////////////////////////////

    mongoose.connect('mongodb://localhost:27017/beers', { useNewUrlParser: true })
    mongoose.connection.on('connected', () => {
       console.log('Connected to "beers" database');
    })
    mongoose.connection.on('error', (err) => {
       console.log(`Got an error!:\n${err}`);
    })

const port = process.env.PORT || 4444;

app.listen(port);
console.log(`Listening on ${port}`);