import SearchIcon from '@material-ui/icons/Search';
import { IconButton} from '@material-ui/core';
import './input.css'
import { useEffect, useState } from 'react';
import data from '../../assets/data.json'


export default function InputSearch(props){
  const [item,setItem]= useState('')
  const [searchResults, setSearchResults] = useState([]);
  const handleChange = event =>{
    setItem(event.target.value)
  }
  const row = []
  data.forEach( data => row.push(data._id, data.title,data.year,data.doi,data.author,data.FIELD6));

  
  useEffect(() => {
    if(item.length>0){ 
    const results = row.filter(person =>
      person.toLowerCase().includes(item)
    );
    setSearchResults(results);
    }
  }, [item]);

  
    return (
        <div className='divinput'>
        <input
        type='text'
        value={item}
        onChange={handleChange}
          placeholder="id, title, author, year..."
        />
        <IconButton  color='primary' type="submit" aria-label="search" >
          <SearchIcon color='primary'/>
        </IconButton>
        <table>
          <tbody>
   {searchResults.map(item =>( <tr> <td>{item}</td><td>details</td></tr>))}
          </tbody>
        </table>
        </div>

    )
}