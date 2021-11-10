const express = require('express');
const app = express();

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
const configRoutes = require('./routes');
//var cors = require("cors");

app.use(express.json());

configRoutes(app);

// const corsOpts = {
//     origin: '*',
  
//     methods: [
//       'GET',
//       'POST',
//     ],
  
//     allowedHeaders: [
//       'Content-Type',
//     ],
//   };
  
//   app.use(cors(corsOpts));


app.listen(5000, () => {
  console.log("We've now got a server!");
  console.log('Your routes will be running on http://localhost:5000');
});