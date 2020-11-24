import SearchIcon from '@material-ui/icons/Search';
import { IconButton} from '@material-ui/core';
import './input.css'
import { useState } from 'react';
import data from '../../assets/data.json'


export default function InputSearch(props){
  const [item,setItem]= useState('')
  const handleChange = event =>{
    setItem(event.target.value)
  }

  function returnData(){
    const getItem= []
     data.forEach(data =>{
          return getItem.push(data._id)})
          
      
    return console.log(getItem)
     }



    return (
        <div className='divinput'>
        <input
        type='text'
        value={item}
        onChange={handleChange}
          placeholder="id, title, author, year..."
        />
        <IconButton  color='primary' type="submit" aria-label="search" onClick={returnData} >
          <SearchIcon color='primary'/>
        </IconButton>
        </div>

    )
}