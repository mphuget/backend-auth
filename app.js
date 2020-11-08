const express = require('express');

//to access form data
let bodyParser = require('body-parser');

//used to reduce response body
let compression = require('compression');

//to access server directories
let path = require('path');

//to access the database stored in MongoDB
let mongoose = require('mongoose');

let cors = require('cors');

const app = express();

//connects to the MongoDB database
mongoose.connect('mongodb://localhost:27017/auth', (err)=> {

  if (err) {

    throw err;

  }
  else {

    console.log("Connected to the database");

  }

});

//compress response body for better performance
app.use(compression());

//disable headers indicating pages are coming from an Express server
app.disable('x-powered-by');

//used to fetch the data from forms on HTTP POST
app.use(bodyParser.urlencoded({

  extended : true

}));

app.use(bodyParser.json());

app.use(cors());

app.get('/', (req, res) => {
  res.send('Homepage');
});

app.get("/about", (req, res) => {
  res.send("About");
})

let routes = require("./routes");

app.use(routes);

app.listen(4000);
console.log('App server running on port 4000');
