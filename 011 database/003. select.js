var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "demo"
});

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM tbl_category", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});