require("dotenv").config();
var mysql = require('mysql');

var sqlConnection = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  multipleStatements: true
});

sqlConnection.connect((err) => {
  if (!err) {
    console.log("Connected to DB");
  } else {
    console.log(err)
    console.log("Connection Failed!");
  }
});

module.exports = sqlConnection;