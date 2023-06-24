import { List, ListItem, ListItemText } from '@mui/material'
import React from 'react'
import './Todo.css';


const Todo = (props) => {
  return (
          <List className='todo__list'>
          <ListItem>
              <ListItemText primary={props.text} secondary="dummy text"/>
            </ListItem>  
          </List>
    )
}

export default Todo