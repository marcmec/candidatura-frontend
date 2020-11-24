import React, { createElement } from 'react'
import data from '../../../assets/data.json'
import ButtonDetail from '../../UI/ButtonDetail'
import './item.css'


export default function Item(props) {
    const row =[]

    data.forEach(data =>{

        return row.push(createElement('tr',null,<td className='id'>{data._id}</td>, 
                <td className='title'>{data.title}</td>,<td className='year'>{data.year}</td>,
                <td className='doi'>{data.doi}</td>, <td className='author'>{data.author}</td>,
                <td className='field6'>{data.FIELD6}</td>,<td className='btn'><ButtonDetail/></td>));
    });

    return (
            <div className='scroll-table'>
            <table >
                <tbody className='myTable'>
                <tr><td>id</td><td>title</td>
                <td>year</td><td>doi</td><td>author</td>
            <td>field6</td><td>View</td></tr></tbody>
            <tbody>{row}</tbody>
            </table>
            </div>
            
    )
}
