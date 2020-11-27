import React from 'react'
import SaveRoundedIcon from '@material-ui/icons/SaveRounded';
import CancelRoundedIcon from '@material-ui/icons/CancelRounded';
import { Dialog, DialogActions, DialogContent, DialogContentText, IconButton} from '@material-ui/core'

export default function DetailsItem(props) {
    return (
        <Dialog  open={props.showDialogForm} onClose={props.handleCloseDialog} aria-labelledby="form-dialog-title">
        <DialogContent>
          
          <p>
            Edit columms in : <br/>{props.showItem}
          </p>
          {props.textfield}
          {props.textfield1}
          {props.textfield2}
          {props.textfield3}
          {props.textfield4}
          {props.textfield5}

        </DialogContent>
        <DialogActions>
          <IconButton color='primary' onClick={props.handleEdit}>
            <SaveRoundedIcon></SaveRoundedIcon>
          </IconButton>
          <IconButton onClick={props.handleCloseDialog} color="primary">
            <CancelRoundedIcon></CancelRoundedIcon>
          </IconButton>
          
          
        </DialogActions>
      </Dialog>
    )
}
