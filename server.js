require('dotenv').config();
const express = require("express");
const getFBInfo = require("fb-downloader");
const cors = require('cors');

var app = express();
const port = process.env.PORT || 3000;
app.use(cors());
app.use((req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      next();
    });
app.use(cors());
app.get('/api/:sufix', function(req, res) {
    let d = req.params.sufix;
     let a = "https://www.facebook.com/watch?v=" + d;
  getFBInfo(a).then(result => {
  result["success"] = "true";
  res.json(result);
}   ).catch(error => console.log("Error:", error));
  
  });

  app.listen(port, function() {
    console.log(`Listening on port ${port}`);
  });
