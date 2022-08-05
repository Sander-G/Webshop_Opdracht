import { useState } from "react";
import './App.css'

function App() {

  const [names, setNames] = useState([])

  function handleInput() {
    let input = document.querySelector('input');


    setNames(prevState => {
      let state = [...prevState];
      state.unshift({                     //unshift ipv push om nieuwe item als eerste in array op te nemen ipv laatste
        value: input.value,
        id: Math.random()
      });
      
      return state;
    });
  }
// console.log(names)
 

return (
    <div className="app">                                                 {/* div met een beetje styling */}
      <h3>Opdracht 3 - Lists & Keys</h3>                                      {/* titel */}
        <input />
        <button onClick={handleInput}>Submit Name</button>
            {names.map((name, index) => {
              return <ListItem text={name.value} key={name.id}/>
  
            })}
            </div>
  );

          }

          const ListItem = ({text}) => {
            return (
              <div>
                <p>{text}</p>
              </div>
            )
          }
export default App;
