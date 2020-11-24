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
            <table>
                <tbody className='myTable'>
                <tr><th>id</th><th>title</th>
                <th className='year1' >year</th><th>doi</th><th>author</th>
            <th>field6</th><th>View</th></tr>
            {row}</tbody>
            </table>
            </div>
            
    )
}
