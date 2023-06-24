import { List, ListItem, ListItemText } from '@mui/material'
import React from 'react'

const Todo = (props) => {
  return (
          <List>
          <ListItem>
              <ListItemText primary={props.text} secondary="dummy text"/>
            </ListItem>  
          </List>
    )
}

export default Todo