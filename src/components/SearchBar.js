import React from 'react'
import logJSONData from '../getbook';
import './SearchBar.css'

export default function searchbar(props) {
  const handleclick = async ()=>{
    const name = document.getElementById('bookname').value;
    const bookdata = await logJSONData(name);
    props.setdata(bookdata);
  }
  return (
    <div className='search-type-box'>
        <i className="fa-solid fa-magnifying-glass"></i>
        <input type = 'text' id='bookname' placeholder='Enter Book Title' onKeyDown={(event)=>{
          if(event.key==='Enter'){
            handleclick();
          }
        }}></input>
        <button onClick={handleclick}>GO</button>
    </div>
  )
}
