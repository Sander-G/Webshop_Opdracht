import React, { Component } from 'react'

export default class ClassComponent extends Component {
  
  constructor () {
    super();

    this.state = {
      input: "Jens"
    };
  };
  

  render() {
const handleInput = (e) => {
  this.setState({ input: e.target.value });
                                                                  // console.log(e.target.value)   
};

    return (
      <div className="app">
<input type="text" onChange={handleInput} />

        <h2>Hello Class Component {this.state.input}!</h2>  
      </div>
    );
  }
};
