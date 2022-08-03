import './App.css'
import React, { useState } from "react";
import FunctionalComponent from "./FunctionalComponent";
import ClassComponent from "./ClassComponent";

function App() {

const [InputData, setInputData] = useState('jens')                // state toevoegen aan component 

function handleInput (e) {                                        // functie om input events te handelen 
setInputData(e.target.value)
}
                                                                  // console.log(InputData)

  return (

    <div className="app">                                         {/* div met een beetje styling */}
      <h3>React Class & Functional Components</h3>                {/* titel */}
 <input type="text" onChange={handleInput} value={InputData}/>    {/* input met eventhandler en standaardwaarde */}
      <FunctionalComponent />
      <ClassComponent />
    </div>

  );

}

export default App;
