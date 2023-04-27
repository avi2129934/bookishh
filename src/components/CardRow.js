import React from 'react'
import './CardRow.css'
import BookCard from './BookCard'
import { useState } from 'react';

export default function CardRow(props) {
    const heading = props.heading
    const data = props.props
    const n = data.length
    const [i,seti] = useState([1,2]);
    const [bookdata,setdata] = useState([data[i[0]],data[i[1]]]);
    const handleClickright = ()=>{
        const newi = i.map((val)=>{
        return (val+1)%n;
        })
        seti(newi);
        setdata([data[i[0]],data[i[1]]]);
    }
    const handleClickleft = ()=>{
        const newi = i.map((val)=>{
        return (val-1+n)%n;
        })
        seti(newi);
        setdata([data[i[0]],data[i[1]]]);
    }
  return (
    <div className='react-comp'>
        <div className='card-row-container'>
            <div className='cardrow-bg'>
                <h2 className='card-row-heading'>{heading}</h2>
                <div className='book-card-row'>
                    <div id = "nav-arrow"><button className='btn btn-dark' onClick={handleClickleft}><i class="fa-solid fa-arrow-left"></i></button></div>
                        {bookdata.map((props,index)=>{
                        return <BookCard data={props} id={index}/>
                        })}
                    <div id = "nav-arrow"><button className='btn btn-dark' onClick={handleClickright}><i class="fa-solid fa-arrow-right"></i></button></div>
                </div>
            </div>
        </div>
    </div>
  )
}
