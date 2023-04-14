import React from 'react'
import {Outlet,Link} from 'react-router-dom'
import './layout.css'

export default function Layout() {
    const linkstyle = {
        textDecoration:'none',
        color:'black'
    }
  return (
    <div className='layout-container'>
        <div className='topbar'>
            <div><Link to='/' style={linkstyle}><span>Home</span></Link></div>
            <div><Link to='explore' style={linkstyle}><span>Explore</span></Link></div>
            <div><Link to='search' style={linkstyle}><span>Search</span></Link></div>
            <div><Link to='about' style={linkstyle}><span>About</span></Link></div>
        </div>
      <Outlet/>
    </div>
  )
}
