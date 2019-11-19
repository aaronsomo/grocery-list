import React from 'react'
import axios from 'axios'
import GroceryListEntry from './GroceryListEntry.jsx'
import GroceryList from './GroceryList.jsx'
import AddForm from './AddForm.jsx'

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      item: [],
      quantity: ''
    }

    this.getGroceries = this.getGroceries.bind(this)
    this.addGroceries = this.addGroceries.bind(this)
    this.deleteGrocery = this.deleteGrocery.bind(this)
  }

  getGroceries() {
    axios.get('/grocerylist')
      .then((response) => {
        this.setState({
          item: response.data
        })
      })
      .catch((err) => console.log(`couldn't fetch anything`, err))
  }

  addGroceries(item, quantity) {
    axios.post('/grocerylist', {
      item: item,
      quantity: quantity
    })
      .then((response) => {
        this.getGroceries();
      })
      .catch((err) => console.log(`couldn't add anything`, err))
  }

  deleteGrocery(id) {
    axios.delete(`/grocerylist/${id}`)
      .then(() => {
        this.getGroceries()
      })
      .catch((err) => console.log(`you didn't delete anything`, err))
  }

  componentDidMount() {
    this.getGroceries();
  }

  render() {
    return(
      <div className="body"> GROCERIES BB
        <img src="grocery-bags.png"/>
        <div className="heading">
          <AddForm add={this.addGroceries}/>
          <GroceryList groceries={this.state.item} deleteGrocery={this.deleteGrocery}/>
        </div>
      </div>
    )
  }

}


export default App;

// class App extends React.Component  {
//   constructor(props) {
//     super(props);


//   }

//   render() {
//     return(
//       <div>
//         <img src="grocery-bags.png"/>
//         <h1>Grocery List</h1>
//         <form>
//           <label> Item <input name="item" value=""/> </label>
//           <label> Qunatity <input name="quantity" value=""/> </label>
//           <button>Add Grocery</button>
//         </form>
//
//         <ul class="groceries">
//           <li>
//             <span> frozen pizza </span>
//             <span> 5 </span>
//           </li>
//           <li>
//             <span> noosa yogurt </span>
//             <span> 10 </span>
//           </li>
//           <li>
//             <span> wine </span>
//             <span> 2 </span>
//           </li>
//           <li>
//             <span> iced coffe </span>
//             <span> 1 </span>
//           </li>
//           <li>
//             <span> a </span>
//             <span> 1 </span>
//           </li>
//           <li>
//             <span> pizza </span>
//             <span> 1 </span>
//           </li>
//         </ul>
//       </div>
//     )
//   }
// }
