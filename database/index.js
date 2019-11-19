const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'student',
  password: 'student',
  database: 'grocerylist'
});

db.connect((err) => {
  if (err) {
    console.log(err)
  } else {
    console.log(`you're in the mix with aaron somo`)
  }
});

module.exports = db;