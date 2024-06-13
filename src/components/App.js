
import React ,{useState}from "react";
import './../styles/App.css';

const App = () => {
  const [counter, setCounter] = useState(0)
  const handelClick = ()=>{
    setCounter(counter+1);
  }
  return (
    <div>
        <p>Button clicked {counter} times</p>
        <button onClick={handelClick}>Click me</button>
    </div>
  )
}

export default App
