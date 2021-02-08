require('dotenv').config()

const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())

const mysql      = require('mysql');
const connection = mysql.createConnection({
  socketPath  : process.env.SOCKET_PATH,
  user        : process.env.USER_NAME,
  password    : process.env.PASSWORD,
  database    : process.env.DATABASE
});

const port = process.env.PORT || 3000

app.listen(port, () => {
  console.log('Now listening on port: ' + port);
})

app.get('/users', (req, res) => {
connection.connect();
connection.query('SELECT * from users', function (error, results, fields) {
  if (error) throw error;
  res.send(results);
});
connection.end();
})