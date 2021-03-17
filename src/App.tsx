import './App.css';
import {useState} from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Counter</h1>
      <h3 id="count">{count}</h3>
      <button onClick={(() => setCount(count + 1))}>Click me to Increment</button>
      <button onClick={(() => setCount(count - 1))}>Click me to Decrement</button>
      <button onClick={(() => setCount(0))}>Click me to Reset</button>
    </div>
  );
}

export default App;
