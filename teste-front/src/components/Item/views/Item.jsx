import React, { useState } from 'react'
import dataJson from '../../../assets/data.json'
import InputSearch from '../../UI/Input'
import './item.css'


export default function Item(props) {
    const [item,setItem]= useState('')
    const[can,setCan]=useState(false)
    const [statusSort,setSort]= useState({ field:'', direction:''})
    let rowItem = []
    const handleChange = event =>{
      event.preventDefault();
      setItem(event.target.value)
    }


  if(item.length>0 && can ===false){
    rowItem  = dataJson.filter((data) =>{

        return (data._id.match(item) || data.title.match(item) || data.year.match(item)|| 
        data.doi.match(item)|| data.author.match(item)|| data.FIELD6.match(item));
      });
    }

  if((statusSort.direction==='asc' ||statusSort.direction==='desc') && item.length>0 && 
    statusSort.direction !== '' && can===true ){

      rowItem = dataJson.sort(
        (a,b) => 
          a[statusSort.field] > b[statusSort.field] ? 1 : -1
      )    
  }

const onSort= (columm) =>{ 
      if(can===false && item.length>0){
      setCan(true);
      statusSort.direction === 'desc' ? setSort({field:columm, direction:'asc'}) : 
      setSort({field:columm, direction:'desc'})
    }else if(can===true){
      setCan(false);
    }
  }
  return (
        <div>
           <InputSearch item={item} handleChange={handleChange}/>
            <div className='scroll-table'>
            <table className='principalTable'>
            <thead>
           <tr><th>id <button onClick={() =>onSort('_id')}/></th><th>title <button onClick={() =>onSort('title')}/>
           </th><th>year <button onClick={() =>onSort('year')}/></th>
           <th >doi <button onClick={() =>onSort('doi')}/></th>
              <th>author <button onClick={() =>onSort('author')}/></th><th>field6 <button onClick={() =>onSort('FIELD6')}/></th></tr>
              </thead>
            {rowItem.map((item, index) => {
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
