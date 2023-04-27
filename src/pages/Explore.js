import React from 'react'
import CardRow from '../components/CardRow'
import './explore.css'
import genrecollage from '../images/explore-bg.png'

const data={
    weekly_best_seller : [
        {
            name: 'If He Had Been with Me',
            author: 'Laura Nowlin',
            price: 8.99,
            genre: ['Fiction','Romance'],
            rating: 4.0,
            cover: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/41m6p4QOnRL._SX331_BO1,204,203,200_.jpg'
        },
        {
            name: 'The Silent Patient',
            author: 'Alex Michaelides',
            price: 6.79,
            genre: ['Thriller','Mystery','Crime'],
            rating: 4.2,
            cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1668782119i/40097951.jpg"
        },
        {
            name: 'The Shining',
            author: 'Stephan King',
            price: 10.99,
            genre: ['Horror','Thriller'],
            rating: 4.6,
            cover: 'https://m.media-amazon.com/images/M/MV5BZWFlYmY2MGEtZjVkYS00YzU4LTg0YjQtYzY1ZGE3NTA5NGQxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg'
        },
        {
            name: 'Gone Girl',
            author: 'Gillian Flynn',
            price: 5.99,
            genre: ['Novel','Thriller'],
            rating: 4.3,
            cover: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/71Q0+4VG1YL.jpg'
        },
        {
            name: 'The Girl on the Train',
            author: 'Paula Hawkins',
            price: 8.99,
            genre: ['Thriller','Mystery','Suspense'],
            rating: 4.0,
            cover: 'https://www.bookgeeks.in/wp-content/uploads/2017/03/The-Girl-On-The-Train-by-Paula-Hawkins-1200x1859.jpg'
        },
        {
            name: 'The Girl with the Dragon Tattoo',
            author: 'Stleg Larsson',
            price: 8.99,
            genre: ['Thriler','Crime'],
            rating: 4.4,
            cover: 'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/81UOA8fDGaL.jpg'
        }
    ]
}

export default function Explore() {
  return (
    <div className='explore-background'>
        <div className='margin-div'></div>
        <div className='explore-main-container'>
            <div className='explore-front'>
                <div className='explore-text'>
                    Looking for a thrilling mystery or a heartwarming romance? Check out our latest picks in the fiction section. If you're more interested in non-fiction, we have a range of titles covering everything from science and history to memoirs and self-help.
                </div>
                <div className='explore-img'><img src={genrecollage} alt='background'></img></div>
            </div>
            <div className='trending-section'>
                <div className='row-container'><CardRow props={data.weekly_best_seller} heading='Weekly Best Sellers'/></div>
                <div className='row-container'><CardRow props={data.weekly_best_seller} heading='Monthly Best Sellers'/></div>
                <div className='row-container'><CardRow props={data.weekly_best_seller} heading='Top Thrillers'/></div>
                <div className='row-container'><CardRow props={data.weekly_best_seller} heading='Top Fiction'/></div>
            </div>
        </div>
    </div>
  )
}
