import './App.css'
import React, { useState } from "react";
import FunctionalComponent from "./Comps/FunctionalComponent_opdr2";
import ClassComponent from "./Comps/ClassComponent_opdr2";

function App() {

  const [InputData, setInputData] = useState('');                       // state toevoegen aan component 
                                                                            // = vergelijkbaar met state object declaratie in class based component //
                                                                            

  return (

    <div className="app">                                                 {/* div met een beetje styling */}
      <h3>Opdracht Shared State</h3>                                      {/* titel */}

      <FunctionalComponent input={InputData} setInput={setInputData}/>                           {/* call functional component en pass input naar component */}
      <ClassComponent input={InputData} setInput={setInputData}/>   
                                                                                             {/* call class component en pass input naar component */}
    </div>

  );

}

export default App;
