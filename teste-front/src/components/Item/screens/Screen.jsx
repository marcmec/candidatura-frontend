import ThemeProvider from '@material-ui/styles/ThemeProvider'
import {createMuiTheme} from '@material-ui/core/styles'
import Form from '../../UI/Form'
import './screen.css'
import imgStatic from '../../../assets/body-search.jpg'

const myTheme = createMuiTheme({
    palette:{
        primary:{
            main:'#031973'
        }
    }

})

export default function HomeScreen(){

    return (
    <div>
        <img src={imgStatic} className='ilustra_img'/>
        <Form/>     
    </div>
    

    )
}
