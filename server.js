const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const app = express();
app.use(require("body-parser").json()); //needed for getting body otherwise data won't be passed
//app.use(bodyParser.urlencoded({ extended: false }));
//app.use(express.static(__dirname));

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'student'
});

connection.connect();

app.post('/user/new', function (req, res) {
  var sql = "INSERT INTO aaa (name, msg, city, number_guest) VALUES ('" + req.body.name2 + "', '" + req.body.msg + "', '" + req.body.city + "', '" + req.body.numberOfGuests + "')";

  connection.query(sql, function (error, results) {
    results = {
      success: 1
    };
    res.send(JSON.stringify(results));
  });
});

app.post('/user/login', function (req, res) {
  var name = req.body.name;
  var password = req.body.password;
  var sql = "SELECT * FROM aaa WHERE name='" + name + "' AND password='" + password + "'";

  connection.query(sql, function (error, results, fields) {
    if (results.length > 0) {
      res.send({
        "success": "1",
        "code": 200,
        "user": results
      });
    } else {
      res.send({
        "success": "0",
        "code": 403
      });
    }
  });
});

var PORT = 3000
app.listen(PORT, function () {
  console.log('Development Express server running at localhost:' + PORT)
})