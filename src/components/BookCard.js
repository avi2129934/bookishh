import React from 'react'
import './BookCard.css'
import Rating from './Rating'


export default function BookCard(props) {
    const data = props.data;
    // const id = props.id;
    if(data==={}){
        return (<div className='emptycard' style={{height:'300px',width:'200px'}}></div>)
    }
  return (
    <div>
        <div className='cardbody'>
            <img src= {data.cover} alt='cover' className='book-cover'></img>
            <div className='details'>
                <div className='void'></div>
                <h3>
                    {data.name}
                </h3>
                <Rating props={data.rating} color={'yellow'}/>
                <p className = 'tags'>{data.genre.map((tag)=>{
                    return (<label className='badge bg-primary'>{tag}</label>)
                })}</p>
                <div className='mid-div'>
                    <p id= 'author'>Author <span>{data.author}</span></p>
                    <span className='badge bg-light' id='price'>${data.price}</span>
                </div>
                <div className='buybutton'>
                    <button className='btn btn-warning'><i class="fa-solid fa-cart-shopping fa-sm"></i></button>
                    <button className='btn btn-danger btn-sm'>Buy Now</button>
                </div>
            </div>
        </div>
    </div>
  )
}
