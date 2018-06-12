var mysql = require('mysql');
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1972",
  database: "customers"
});

con.connect(function(err){
  console.log("hello1");
  if(err) throw err;
  con.query("SELECT * FROM customer", function(err,result,fields){
    console.log("helo2");
    if(err) throw err;
    console.log(result);
  });
});
