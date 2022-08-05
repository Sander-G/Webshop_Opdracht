import { useState } from "react";
import FunctionalComponent from "./Comps/FunctionalComponent_opdr2";
import ClassComponent from "./Comps/ClassComponent_opdr2";
import './App.css'

function App() {

  const [inputData, setInputData] = useState('Jens');                      // state toevoegen aan component met default waarde
                                                                            // = vergelijkbaar met state object declaratie in class based component //
                                                                            

  return (

    <div className="app">                                                 {/* div met een beetje styling */}
      <h3>Opdracht Shared State</h3>                                      {/* titel */}

      <ClassComponent inputData={inputData} setInputData={setInputData}/>              {/* call class component en pass input naar component */}
      <FunctionalComponent inputData={inputData} setInputData={setInputData}/>         {/* call functional component en pass input naar component */}
    </div>

  );

}

export default App;
