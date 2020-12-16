import React from "react";
import "./App.css";
import { TextField } from "./components/TextField";
import { Counter } from "./components/Counter";

function App() {
  return (
    <div className="App">
      <TextField
        message="It's a message"
        styles={{ background: "#f9f9" }}
        person={{ age: 23, name: "Arif" }}
      />
      <Counter>
        {(count, setCount) => (
          <div>
            {count}
            <button onClick={() => setCount(count + 1)}>Increment</button>
          </div>
        )}
      </Counter>
    </div>
  );
}

export default App;
