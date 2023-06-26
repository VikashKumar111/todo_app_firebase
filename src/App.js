
import { useEffect, useState } from 'react';
import Todo from './Todo';
import { Button, FormControl, Input, InputLabel } from '@mui/material';
import './App.css';
import { db } from './firebase';





function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    db.collection('todos').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => doc.data().todo))
    })
  }, []);
  
  const addTodo = (event) => {
    event.preventDefault();
    // console.log('i m coding');
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
