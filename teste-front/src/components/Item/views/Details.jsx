import React from 'react'

export default function Details(props) {
    return (
        <form onSubmit={props.submit}>
            <h2>Edit Item</h2>
            <input value={props.valueId}></input>
            <input value={props.valueTitle}></input>
            <input value={props.valueDoi}></input>
            <input value={props.valueYear}></input>
            <input value={props.valueAuthor}></input>
            <input value={props.valueField6}></input>
           </form>

  )
}
