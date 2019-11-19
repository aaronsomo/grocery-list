const db = require('./index.js');

module.exports = {
  getAll: (req, callback) => {
    db.query(`SELECT * FROM list;`, (err, results) => {
      if (err) {
        callback(err)
      } else {
        callback(null, results)
      }
    })
  },

  postOne: (req, callback) => {
    // console.log(req.body);
    db.query(`INSERT INTO list (item, quantity) VALUES ("${req.body.item}", "${req.body.quantity}");`, (err, results) => {
      if (err) {
        callback(err)
      } else {
        callback(null, results)
      }
    })
  },

  deleteOne: (req, callback) => {
    console.log(req.params)
    db.query(`DELETE FROM list WHERE id = "${req.params.id}";`, (err, results) => {
      if (err) {
        callback(err)
      } else {
        callback(null, results)
      }
    })
  }
}