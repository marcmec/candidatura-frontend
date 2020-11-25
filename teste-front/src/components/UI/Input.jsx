import SearchIcon from '@material-ui/icons/Search';
import { IconButton} from '@material-ui/core';
import './input.css'


export default function InputSearch(props){
    return (
        <div className='divinput'>
        <input
        type='text'
        value={props.item}
        onChange={props.handleChange}
          placeholder="id, title, author, year..."
        />
        <IconButton  color='primary'aria-label="search" >
          <SearchIcon color='primary'/>
        </IconButton>
        </div>

    )
}