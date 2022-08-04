import React, { useState } from "react";

function FunctionalComponent() {

  const [InputData, setInputData] = useState(''); 

  function handleInput(e) {                                              
    setInputData(e.target.value)
 };
  
                                                                // console.log(InputData)         

  return (
      <div className="app">
<input value={InputData} type="text" onChange={handleInput} />

  <h2>Hello Functional Component {InputData}!</h2>

</div>

)};

export default FunctionalComponent;




 
