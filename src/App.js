
import { useState } from 'react';
import Todo from './Todo';
import { Button, FormControl, Input, InputLabel } from '@mui/material';
import './App.css';


function App() {
  const [todos, setTodos] = useState(['Take dogs for a walk','Take the rubbish out', 'Vikas wants to livestrem today']);
  const [input, setInput] = useState('');
  console.log(input);
  const addTodo = (event) => {
    event.preventDefault();
    console.log('i m coding');
    setTodos([...todos, input]);
    setInput('');
    console.log(todos);
  }
  return (
    <div className="App">
      <h1>Hello clever programmer</h1>
      <form>
        {/* <input value={input} onChange={event => setInput(event.target.value)} /> */}

        <FormControl>
          <InputLabel> Write a Todo</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)}/>
        </FormControl>
        <Button disabled={!input} type='submit' onClick={addTodo} variant="contained">Add Todo</Button>
      {/* <button type='submit' onClick={addTodo}>Add Todo</button> */}
      </form>
      
      
      <ul>
        {todos.map(todo => (
          <Todo text={todo} />
          // <li>{todo}</li>
        ))}
        
      </ul>
    </div>
  );
}

export default App;
