import React from 'react'
// import App from './App.jsx'

class AddForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: '',
      quantity: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    }, console.log(event.target.value));
  }

  handleSubmit(event) {
    // alert('A name was submitted: ' + this.state.value);
    this.props.add(this.state.item, this.state.quantity);
    console.log(this.state.item, this.state.quantity);
    // event.preventDefault();
  }

  render() {
    return (
      <div>
        <form>
            Item: <input name="item" type="text" value={this.state.item} onChange={(e) => this.handleChange(e)} /> <br></br>
            Quantity: <input name="quantity" type="text" value={this.state.quantity} onChange={(e) => this.handleChange(e)} />
          {/* <input type="submit" value="Submit" /> */}
          <div><button onClick={() => this.handleSubmit()}>Add</button></div>
        </form>
      </div>
    );
  }
}

export default AddForm;