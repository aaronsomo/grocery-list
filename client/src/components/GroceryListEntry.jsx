import React from 'react'

const GroceryListEntry = (props) => (

  //   <div className="groceries">
  //     <li>
  //       <span> frozen pizza </span><span> 5 </span>
  //     </li>
  //     <li>
  //       <span> noosa yogurt </span><span> 10 </span>
  //     </li>
  //     <li>
  //       <span> wine </span><span> 2 </span>
  //     </li>
  //     <li>
  //       <span> iced coffe </span><span> 1 </span>
  //     </li>
  //     <li>
  //       <span> a </span><span> 1 </span>
  //     </li>
  //     <li>
  //       <span> pizza </span><span> 1 </span>
  //     </li>
  // </div>
  <div className="groceries">
      <div>ITEM: {props.item.item} QTY: {props.item.quantity}
        <button onClick={() => {console.log(props.item.id); props.deleteGrocery(props.item.id)}}>X</button>
      </div>
      {/* <div className="quantity">{props.item.quantity}</div> */}
  </div>
)

export default GroceryListEntry;