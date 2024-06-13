
import React ,{useState}from "react";
import './../styles/App.css';

const App = () => {
  const [counter, setCounter] = useState(0)
  const handelClick = ()=>{
    setCounter(counter+1);
  }
  return (
    <div>
        <h2>Button clicked {counter} times</h2>
        <button onClick={handelClick}>Click me</button>
    </div>
  )
}

export default App
