import React, { useState } from 'react'
import dataJson from '../../../assets/data.json'
import InputSearch from '../../UI/Input'
import './item.css'
import BootStrapTable from 'react-bootstrap-table-next'
import { Modal } from '@material-ui/core'




export default function Item(props) {
  const [item,setItem]= useState('')
  const [showItem,setShowItem]= useState([])
  const handleChange = event =>{
    event.preventDefault();
    setItem(event.target.value)
  }
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
    </div>
  )
}