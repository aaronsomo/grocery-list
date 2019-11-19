import React from 'react'
import GroceryListEntry from './GroceryListEntry.jsx'

const GroceryList = (props) => (
  <div className="list">
    {props.groceries.map((item, index) => (
      <GroceryListEntry item={item} key={index} index={index} deleteGrocery={props.deleteGrocery}/>
    ))}
  </div>
)

export default GroceryList;