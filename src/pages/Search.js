import React from 'react'
import { useState } from 'react';
import SearchBookCard from '../components/SearchBookCard';
import SearchBar from '../components/SearchBar'
import './search.css'

export default function Search() {
  const [data,setdata] = useState([]);
  return (
    <div className='search-background'>
      <div className='margin-div'></div>
      <div className='search-bar'><SearchBar setdata={setdata}/></div>
      <div className='search-result-container'>
          <div className='search-results'>
            {data.map((props)=>{
              return <SearchBookCard data={props}/>
            })}
          </div>
        </div>
    </div>
  )
}
