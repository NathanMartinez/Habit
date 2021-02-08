require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const mysql = require('mysql');

app.use(cors())

const port = process.env.PORT || 3000

const connection = mysql.createConnection({
  socketPath  : process.env.SOCKET_PATH,
  user        : process.env.USER_NAME,
  password    : process.env.PASSWORD,
  database    : process.env.DATABASE
});

app.listen(port, () => {
  console.log('Now listening on port: ' + port);
})

function CloseDBConnection() {
  connection.end();
}

// Make the initial connection to the DB
connection.connect();

app.get('/users', (req, res) => {
connection.query('SELECT * from users', function (error, results, fields) {
  if (error) throw error;
  res.send(results);
});
})

// Close the connection when we are done. We may want to learn mor about this
