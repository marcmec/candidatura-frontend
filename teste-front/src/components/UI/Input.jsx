import SearchIcon from '@material-ui/icons/Search';
import { IconButton} from '@material-ui/core';
import './input.css'
export default function InputSearch(props){
    return (
        <div className='divinput'>
        <input
          placeholder="id, title, author, year..."
        />
        <IconButton color='#ffffff' type="submit" aria-label="search">
          <SearchIcon />
        </IconButton>
        </div>

    )
}