import React, { useState } from 'react'
import dataJson from '../../../assets/data.json'
import InputSearch from '../../UI/Input'
import './item.css'
import BootStrapTable from 'react-bootstrap-table-next'
import DetailsItem from '../DetailsItem'
import MyTextField from '../../UI/MyTextField'




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
      <DetailsItem showDialogForm={showDialogForm} handleCloseDialog={handleCloseDialog} showItem={showItem.title}
      
      textfield={<MyTextField id={'id'} item={showItem._id}/>}
      textfield1={<MyTextField id={'title'} item={showItem.title}/>}
      textfield2={<MyTextField id={'doi'} item={showItem.doi}/>}
      textfield3={<MyTextField id={'year'} item={showItem.yeaer}/>}
      textfield4={<MyTextField id={'author'} item={showItem.author}/>}
      textfield5={<MyTextField id={'field6'} item={showItem.FIELD6}/>}


      />
      
    </div>
  )
}