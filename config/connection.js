// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Require mysql
var mysql = require("mysql");

// Set up our connection information
if (process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL)
}else{
connection = mysql.createConnection({
  host: "wm63be5w8m7gs25a.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "	d6a25uzgxr9m8faj",
  password: "xma9ffucsgrspz0w",
  database: "ug5xa9xrq5oiij54"
});
};
// Connect to the database
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection
module.exports = connection;


// // *********************************************************************************
// // CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// // *********************************************************************************
// // Require mysql
// var mysql = require("mysql");
// // Set up our connection information
// var connection = mysql.createConnection({
//   host: "localhost",
//   port: 3306,
//   user: "root",
//   password: "sqlpassword",
//   database: "code_huntersdb"
// });
// // Connect to the database
// connection.connect(function(err) {
//   if (err) {
//     console.error("error connecting: " + err.stack);
//     return;
//   }
//   console.log("connected as id " + connection.threadId);
// });
// // Export connection
// module.exports = connection;
