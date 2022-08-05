import React, { Component } from 'react'

export default class ClassComponent extends Component {
  
  constructor(props) {
    super(props)
   }


  render() {
    return (
      <div className="app">
          <h2>Hello Class Component {this.props.inputData}!</h2>  
          
          <input value={this.props.inputData} onChange={(event) => {this.props.setInputData(event.target.value)}} />
      </div>
    )
  }
};
