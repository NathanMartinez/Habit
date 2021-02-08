const express = require('express')
const app = express()

const mysql      = require('mysql');
const connection = mysql.createConnection({
  socketPath  : '/Applications/MAMP/tmp/mysql/mysql.sock',
  user     : 'root',
  password : 'root',
  database : 'Habit'
});

const port = 3000

app.listen(port, () => {
  console.log('Now listening on port: ' + port);
})
 
// connection.connect();
//  // Get all users
// connection.query('SELECT * from users', function (error, results, fields) {
//   if (error) throw error;
//   console.log(results);
// });

// // Add new user
// connection.query(`INSERT INTO users (firstname, lastname, email, username, passcode)
// VALUES ('Nate', 'Martinez', 'natedzmtz@yahoo.com', 'NateDzMtz', '1234')`, function (error, results, fields) {
//   if (error) throw error;
//   console.log(results, fields);
// });
// connection.end();