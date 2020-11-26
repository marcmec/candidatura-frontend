import './input.css'


export default function InputSearch(props){
    return (
        <div className='divinput'>
        <input
        type='text'
        value={props.item}
        onChange={props.handleChange}
          placeholder="i.e. , id, title, author, year..."
        />
        </div>

    )
}