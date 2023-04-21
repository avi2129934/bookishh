import React, { useEffect } from 'react';
import shineh from '../effect/shineh';
import './about.css';

export default function About() {
  useEffect(shineh,[])
  return (
    <div className='about-container'>
      <h3>Just a guy who codes for FUN</h3>
      <h1>CONTACT ME</h1>
      <p>at</p>
      <h2 id='my-email'>avi2129934@gmail.com</h2>
    </div>
  )
}
