import React from 'react'
import {Outlet,Link} from 'react-router-dom'
import './layout.css'

export default function Layout() {
  const linkStyle = {
    textDecoration: 'none',
    color: 'white',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    borderRadius: '5px',
    transition: 'all 0.3s ease',
    margin: '0 0.5rem',
  };

    
  return (
    <div className='layout-container'>
        <div className='topbar'>
            <div><Link to='./' style={linkStyle}><span>Home</span></Link></div>
            <div><Link to='explore' style={linkStyle}><span>Explore</span></Link></div>
            <div><Link to='search' style={linkStyle}><span>Search</span></Link></div>
            <div><Link to='about' style={linkStyle}><span>About</span></Link></div>
        </div>
      <Outlet/>
    </div>
  )
}
