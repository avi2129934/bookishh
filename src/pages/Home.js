import React from 'react'
import './home.css'

export default function Home() {
  return (
    <div id="home-div">
        <div className="front">
            <div className="text-box">
                <h1 className="front-heading">ONE PLACE FOR ALL YOUR CRAVING FOR <span className="book-span">Books</span></h1>
                <p className="front-desc">
                    Discover your next great read at Bookishh. From bestsellers to hidden gems, we've got the books you won't want to put down. Explore our curated selection of titles, read insightful reviews, and join the conversation with fellow book lovers. It's time to fall in love with reading all over again.
                </p>
                <a href="/bookishh#/explore" className="btn" id='explore-btn'>Explore Now</a>
            </div>
        </div>
    </div>
  )
}
