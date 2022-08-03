import React, { useState } from "react";

function FunctionalComponent() {
  const [InputData, setInputData] = useState('')
  
  function handleInput (e) { 
  setInputData(e.target.value)
  };

  // console.log(InputData)
  return (

    <div className="app">

    
    <h2>FunctionalComponent!</h2>
    </div>
  )
}

export default FunctionalComponent