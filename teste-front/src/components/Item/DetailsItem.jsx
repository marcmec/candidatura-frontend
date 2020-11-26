import React from 'react'
import MyTextField from '../UI/MyTextField'
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Modal, TextField } from '@material-ui/core'

export default function DetailsItem(props) {
    return (
        <Dialog  open={props.showDialogForm} onClose={props.handleCloseDialog} aria-labelledby="form-dialog-title">
        <DialogContent>
          
          <DialogContentText>
            Edit columms in : <br/>{props.showItem}
          </DialogContentText>
          {props.textfield}
          {props.textfield1}
          {props.textfield2}
          {props.textfield3}
          {props.textfield4}
          {props.textfield5}

        </DialogContent>
        <DialogActions>
          <Button onClick={props.handleCloseDialog} color="primary">
            Save Edit
          </Button>
          <Button onClick={props.handleCloseDialog} color="primary">
            Close
          </Button>
          
        </DialogActions>
      </Dialog>
    )
}
