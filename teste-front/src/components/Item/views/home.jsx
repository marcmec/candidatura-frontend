import Form from '../../UI/Form'
import Header from '../../UI/header/Header'
import './home.css'
export default function HomeScreen(){

    return (
        
      <div>
        <div className='header'>
        <Header/>
        </div>
        <section>
        <h2>Realize uma pesquisa diferenciada.</h2>
        <div className='form-search'>
            <Form/>
            </div>
        </section>
        </div>
    )
}
