import React, { useEffect, useState} from 'react'
import dataJson from '../../../assets/data.json'
import InputSearch from '../../UI/Input'
import './item.css'
import BootStrapTable from 'react-bootstrap-table-next'
import DetailsItem from '../DetailsItem'
import MyTextField from '../../UI/MyTextField'


export default function Item(props) {
  const [item,setItem]= useState('')
  const [getJson,setJson]= useState([{_id:'',title:'',doi:'', year:'', author:'', FIELD6:''}])
  const [showDialogForm,setDialog]=useState(false)
  const [updateJson,setUpdate]= useState(dataJson)


useEffect(()=>{
  if(item.length>0 && !showDialogForm ){
    setUpdate(dataJson.filter((data) =>{
      return (data._id.match(item) || data.title.match(item) || data.year.match(item)|| 
      data.doi.match(item)|| data.author.match(item)|| data.FIELD6.match(item));
    }) )
    }
},[item])

  console.log(getJson)
  const handleUpdate = event=> {   
    event.preventDefault();
    setUpdate(event.target.value)
  }

  const handleChange = event =>{
    event.preventDefault();
    setItem(event.target.value)
  }
  const handleOpenDialog = ()=> setDialog(true)
  const handleCloseDialog = ()=> setDialog(false)

  const changeStyleSort =(backgroundColor,sortOrder)=>  (
    sortOrder==='asc' ? {
      backgroundColor: 'turquoise'} : {backgroundColor: '#031973'} )

  const columms =[

    {dataField: '_id',text:'id', sort:true,headerSortingStyle: changeStyleSort},
    {dataField: 'title',text:'title', sort:true,headerSortingStyle: changeStyleSort},
    {dataField: 'doi',text:'doi', sort:true,headerSortingStyle: changeStyleSort},
    {dataField: 'year',text:'year', sort:true,headerSortingStyle: changeStyleSort},
    {dataField: 'author',text:'author', sort:true,headerSortingStyle: changeStyleSort},
    {dataField: 'FIELD6',text:'FIELD6', sort:true,headerSortingStyle: changeStyleSort}
  ]

  const showItemRow = {
    onClick: (index,rowItem) =>{
    setDialog(handleOpenDialog)
    setJson(rowItem)

    }
  }
  function editItem (edit){
    handleCloseDialog()
    const newData = updateJson.map(json =>

       json._id === getJson._id ? setUpdate({...json, edit}) :  json
    )
    setUpdate(newData)
    
  }

  return (
    <div >
      <InputSearch item={item} handleChange={handleChange}/>
      <div className='scroll-table'>
      <BootStrapTable
      key={getJson}
      keyField='id'
      data={updateJson}
      columns={columms}
      rowEvents={showItemRow}
      
      />
      </div> 
      
      <DetailsItem  
      showDialogForm={showDialogForm}
      handleEdit={editItem}  
      handleCloseDialog={handleCloseDialog} 
      showItem={getJson._id}
      
      textfield1={<MyTextField id={'title'} value={getJson.title}onChange={handleUpdate}/>}
      textfield2={<MyTextField id={'doi'} value={getJson.doi}onChange={handleUpdate}/>}
      textfield3={<MyTextField id={'year'} value={getJson.year}onChange={handleUpdate}/>}
      textfield4={<MyTextField id={'author'} value={getJson.author}onChange={handleUpdate}/>}
      textfield5={<MyTextField id={'field6'} value={updateJson.FIELD6} name={'FIELD6'}onChange={handleUpdate}/>}
      
      />
      
    </div>
  )
}
