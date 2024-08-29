import React, { Component } from 'react';

class ItemList extends Component {
  // Initialize state if needed
  constructor(props) {
    super(props);
    this.state = {
      items: ['Apple', 'Banana', 'Cherry', 'Date']
    };
  }

  render() {
    return (
      <div>
        <h1>My Fruit List</h1>
        <ul>
          {this.state.items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ItemList;
