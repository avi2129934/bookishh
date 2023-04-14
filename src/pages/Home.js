import React from 'react'
import CardRow from '../components/CardRow'
import './home.css'
import frontbglg from '../images/front-lg.jpg'
import frontbgsm from '../images/front-sm.jpg'

export default function Home() {
  return (
    <div id = 'home-div'>
        <div className='front'>
            <div className='text-box'>
                <h1 className='front-heading'> ONE PLACE FOR ALL YOUR CRAVING FOR <span id='books-span'>Books</span></h1>
                <p className='front-desc'>
                    Discover your next great read at Bookishh. From bestsellers to hidden gems, we've got the books you won't want to put down. Explore our curated selection of titles, read insightful reviews, and join the conversation with fellow book lovers. It's time to fall in love with reading all over again.
                </p>
            </div>
        </div>
        {/* <div className='home-content-container' style={{scale:'0.6'}}>
            <CardRow data={data.weekly_best_seller}/>
        </div> */}
    </div>
  )
}
