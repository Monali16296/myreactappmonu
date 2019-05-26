const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const app = express();
app.use(require("body-parser").json()); //needed for getting body otherwise data won't be passed
//app.use(bodyParser.urlencoded({ extended: false }));
//app.use(express.static(__dirname));

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'student'
});

connection.connect();
  
app.post('/user/new', function(req, res) {
  var sql = "INSERT INTO aaa VALUES ('"+req.body.name2+"')";

  connection.query(sql, function(error, results) {
    results = {
      success: 1
    };
    res.send(JSON.stringify(results));
  });
});

var PORT = 3000
app.listen(PORT, function() {
  console.log('Development Express server running at localhost:' + PORT)
})