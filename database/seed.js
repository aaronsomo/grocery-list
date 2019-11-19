const db = require('./index.js');

const seed = [
  {
    item: 'apple',
    quantity: 5
  },
  {
    item: 'banana',
    quantity: 5
  },
  {
    item: 'carrot',
    quantity: 5
  },
  {
    item: 'danish roll',
    quantity: 10
  },
  {
    item: 'eggs',
    quantity: 5
  }

];

seed.forEach((item) => {
  db.query(`INSERT INTO list (item, quantity) VALUES ("${item.item}", "${item.quantity}");`)
})