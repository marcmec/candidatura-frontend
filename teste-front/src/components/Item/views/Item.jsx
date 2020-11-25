import React, {  useEffect, useState } from 'react'
import data from '../../../assets/data.json'
import InputSearch from '../../UI/Input'
import './item.css'


export default function Item(props) {
    const [item,setItem]= useState('')
    let row = []
    const handleChange = event =>{
      event.preventDefault();
      setItem(event.target.value)
    }


    if(item.length>0){
    row  = data.filter((data) =>{

        return (data._id.match(item) || data.title.match(item) || data.year.match(item)|| data.doi.match(item)|| data.author.match(item)
        || data.FIELD6.match(item));
      });
    }
  
  
    return (
        <div>
           <InputSearch item={item} handleChange={handleChange}/>
           <table className='tableHeader'>
               <thead>
           <tr><th>id</th><th>title</th><th>year</th><th>doi</th>
              <th>author</th><th>field6</th></tr>
              </thead>
              </table>
            <div className='scroll-table'>
            <table className='principalTable'>
            {row.map((item, index) => {
            return <tbody key={index}>
           
              <tr>
                <td>{item._id}</td>
                <td>{item.title}</td>
                <td>{item.year}</td>
                <td>{item.doi}</td>
                <td>{item.author}</td>
                <td>{item.FIELD6}</td>
                
               </tr>
               
           </tbody>})} 
            </table>
            </div>
            </div>
    )
}
