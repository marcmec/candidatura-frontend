import React, { useState } from 'react'
import dataJson from '../../../assets/data.json'
import InputSearch from '../../UI/Input'
import './item.css'
import BootStrapTable from 'react-bootstrap-table-next'
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Modal, TextField } from '@material-ui/core'




export default function Item(props) {
  const [item,setItem]= useState('')
  const [showItem,setShowItem]= useState([])
  const [showDialogForm,setDialog]=useState(false)
  const handleChange = event =>{
    event.preventDefault();
    setItem(event.target.value)
  }
  const handleOpenDialog = ()=> setDialog(true)
  const handleCloseDialog = ()=> setDialog(false)

  let myDataJson= []
  
  if(item.length>0){
  myDataJson   = dataJson.filter((data) =>{
    return (data._id.match(item) || data.title.match(item) || data.year.match(item)|| 
    data.doi.match(item)|| data.author.match(item)|| data.FIELD6.match(item)); 
  });

}
  const changeStyleSort = { backgroundColor: 'turquoise' };

  const columms =[

    {dataField: '_id',text:'id', sort:true,headerSortingStyle: changeStyleSort},
    {dataField: 'title',text:'title', sort:true,headerSortingStyle: changeStyleSort},
    {dataField: 'doi',text:'doi', sort:true,headerSortingStyle: changeStyleSort},
    {dataField: 'year',text:'year', sort:true,headerSortingStyle: changeStyleSort},
    {dataField: 'author',text:'author', sort:true,headerSortingStyle: changeStyleSort},
    {dataField: 'FIELD6',text:'FIELD6', sort:true,headerSortingStyle: changeStyleSort}
  ]

//add router here 
  const showItemRow = {
    onClick: (index,rowItem) =>{
    console.log(showItem)
    setDialog(handleOpenDialog)
    setShowItem(rowItem)
    }
  }
  return (
    <div>
      <InputSearch item={item} handleChange={handleChange}/>
      <div className='scroll-table'>
      <BootStrapTable
      keyField='id'
      data={myDataJson}
      columns={columms}
      rowEvents={showItemRow}
      
      />
      </div>
      <Dialog  open={showDialogForm} onClose={handleCloseDialog} aria-labelledby="form-dialog-title">
        <DialogContent>
          
          <DialogContentText>
            Edit columms in : <br/>{showItem.title}
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="id"
            value={showItem._id}
            type="email"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            label="title"
            value={showItem.title}
            type="email"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            label="doi"
            value={showItem.doi}
            type="email"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            label="year"
            value={showItem.year}
            type="email"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            label="author"
            value={showItem.author}
            type="email"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            label="FIELD6"
            value={showItem.FIELD6}
            type="email"
            fullWidth
          />

        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary">
            Save Edit
          </Button>
          <Button onClick={handleCloseDialog} color="primary">
            Close
          </Button>
          
        </DialogActions>
      </Dialog>
    </div>
  )
}