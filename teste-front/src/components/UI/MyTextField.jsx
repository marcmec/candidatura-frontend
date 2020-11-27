import React from 'react'
import { TextField } from '@material-ui/core'


export default function MyTextField(props) {
    return (
        <TextField 
        margin="dense"
        name={props.name}
        label={props.id}
        value={props.value}
        type="string"
        onChange={props.onChange}
        fullWidth
      />
    )
}
