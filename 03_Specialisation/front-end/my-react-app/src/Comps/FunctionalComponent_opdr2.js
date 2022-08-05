import React, { Component } from "react";

function FunctionalComponent(props) {

  return (


    <div className="app">
      <h2>Hello Functional Component {props.inputData}!</h2>

      <input onChange={(event) => props.setInputData(event.target.value)} />


    </div>

  )
};

export default FunctionalComponent;





