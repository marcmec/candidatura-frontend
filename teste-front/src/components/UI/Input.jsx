import SearchIcon from '@material-ui/icons/Search';
import ThemeProvider from '@material-ui/styles/ThemeProvider'
import {createMuiTheme} from '@material-ui/core/styles'
import { IconButton, InputBase, Paper } from '@material-ui/core';

const myTheme = createMuiTheme({
    palette:{
        primary:{
            main:'#ffffff'
        },
    }

});

export default function InputSearch(props){
    return (
        
        <ThemeProvider theme={myTheme}>
        <Paper >
        <InputBase
          placeholder="id, title, author, year..."
          inputProps={{ 'aria-label': 'search google maps' }}
        />
        <IconButton type="submit" aria-label="search">
          <SearchIcon />
        </IconButton>
        </Paper>
        </ThemeProvider>

    )
}