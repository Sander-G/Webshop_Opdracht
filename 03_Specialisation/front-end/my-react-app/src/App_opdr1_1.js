import './App.css'
import React, { useState } from "react";
import FunctionalComponent from "./Comps/FunctionalComponent_opdr1_1";
import ClassComponent from "./Comps/ClassComponent_opdr1_1";

function App() {

  const [InputData, setInputData] = useState('Jens');                       // state toevoegen aan component 
                                                                            // = vergelijkbaar met state object declaratie in class based component //
  function handleInput(e) {                                                 // functie om input events te handelen 
    setInputData(e.target.value)
  }
  // console.log(InputData)

  return (

    <div className="app">                                                 {/* div met een beetje styling */}
      <h3>React Class & Functional Components</h3>                        {/* titel */}
      <input type="text" onChange={handleInput} value={InputData} />      {/* input met eventhandler en standaardwaarde */}
      <FunctionalComponent input={InputData} />                           {/* call functional component en pass input naar component */}
      <ClassComponent input={InputData} />                                {/* call class component en pass input naar component */}
    </div>

  );

}

export default App;
