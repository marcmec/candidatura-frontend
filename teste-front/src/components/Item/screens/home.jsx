import Form from '../../UI/Form'

import Header from '../../UI/Header'
import Tabela from '../Tabela'
import './screenhome.css'

export default function HomeScreen(){

    return (
      <div>
        <div className='header'>
        <Header/>
        </div>
        <section>
        <h1>Realize uma pesquisa diferenciada.</h1>
            <div className='form-search'>
            <Form/>
            </div>
            <Tabela/>
        </section>

 

        </div>

    )
}
