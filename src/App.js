
import { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState(['Take dogs for a walk','Take the rubbish out', 'Vikas wants to livestrem today']);
  const [input, setInput] = useState('');
  console.log(input);
  const addTodo = (event) => {
    console.log('i m coding');
    setTodos([...todos, input]);
  }
  return (
    <div className="App">
      <h1>Hello clever programmer</h1>
      <input value={input} onChange={event => setInput(event.target.value)} />
      <button onClick={addTodo}>Add Todo</button>
      
      <ul>
        {todos.map(todo => (
          <li>{todo}</li>
        ))}
        
      </ul>
    </div>
  );
}

export default App;
