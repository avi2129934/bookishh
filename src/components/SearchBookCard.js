import React from 'react'
import Rating from './Rating';
import './SearchBookCard.css'


export default function SearchBookCard({data}) {

  // const data = props[0];
  let url = 'https://cdn-icons-png.flaticon.com/128/837/837172.png';
  let imgurl = data && data.imageLinks? data.imageLinks && data.imageLinks.thumbnail:url;

  const isBlock = ()=>{
    if(data && data.saleInfo.saleability==='FOR_SALE') return false;
    else return true;
  }
  return (
    <div className='result-card'>
      <div className='coverimage'><img src={imgurl}/></div>
      <div className='result-card-info'>
        <span className='result-card-header'>{data? data.title:'Book Name'}</span>
        <span className='result-card-author'>{data && data.authors? data.authors.map((author)=>{
          return author;
        }):'Author Not Available'}</span>
        <span className='result-card-ratings'><Rating props={data? data.averageRating:4.2}/></span>
        <span className='result-card-price'>{!isBlock()?'₹'+data.saleInfo.listPrice.amount:<span className='price-na' style={{margin:'0px'}}>Not For Sale</span>}</span>
        <button id = 'res-card-atc' className='btn btn-warning' disabled={isBlock()}><i className="fa-sharp fa-solid fa-cart-plus fa-lg"></i></button>
        <button id = 'res-card-bnow' className='btn btn-danger'disabled={isBlock()}>BUY NOW</button>
      </div>
    </div>
  )
}
