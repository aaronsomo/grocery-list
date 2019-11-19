const dbHelpers = require('../database/dbHelpers.js');

module.exports = {
  getAll: (req, res) => {
    // console.log()
    dbHelpers.getAll(req, (err, results) => {
      if (err) {
        res.status(404).send(`dbHelpers couldn't grab anything`)
      } else {
        // console.log(results)
        res.status(200).send(results)
      }
    })
  },

  postOne: (req, res) => {
    dbHelpers.postOne(req, (err, results) => {
      if (err) {
        res.status(404).send(`dbHelpers couldn't post anything`)
      } else {
        res.status(200).send(`you've added ${req.body.item}!!`)
      }
    })
  },

  deleteOne: (req, res) => {
    dbHelpers.deleteOne(req, (err, results) => {
      if (err) {
        res.status(404).send(`you don't want to delete that from the list`)
      } else {
        res.status(200).send(`you've deleted something from your list`)
      }
    })
  }
}