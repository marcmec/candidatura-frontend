import React from 'react'
import { TextField } from '@material-ui/core'


export default function MyTextField(props) {
    return (
        <TextField
        autoFocus
        margin="dense"
        id="name"
        label={props.id}
        value={props.item}
        type="email"
        fullWidth
      />
    )
}
