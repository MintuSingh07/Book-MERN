import React from 'react'
import BannerCard from '../components/BannerCard'

import "./pages_css/Home.css"


const Home = () => {
  return (
    <>
    {/* Banner */}
      <div className="bannersec">
        <div className="text">
        <h1 style={{ color: "white", fontWeight: "bolder", margin: "5rem" }}><span style={{ color: "#5BFD0F" }}>BUY</span> AND <span style={{ color: "#FF0000" }}>SELL</span> <br /> YOUR BOOKS AT A <br /> BEST PRICE !</h1>
        <p style={{width: "50%", marginLeft: "5rem", marginTop: "-4rem"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis ratione mollitia minima dicta eveniet, error magnam qui nemo quisquam veniam?</p>
        </div>
        <div className="trending-books--text">
        <BannerCard />
        <h3>TRENDING BOOKS</h3>
        </div>
      </div>
    
    {/* Best Selling Books */}
      <div className="best-seller--books">
        <h1>BEST SELLER BOOKS</h1>
        <div id="best-books">
          <div className="books"></div>
          <div className="books"></div>
          <div className="books"></div>
        </div>
      </div>
    
    {/* FIND YOUR FAVORITE BOOKS HERE! */}
    <div id="favorite-books">
      <img src="frontend\public\images\bookcover.png" alt="" />
      <div className="book-list--active-user">
        <h1>FIND YOUR FAVORITE <br /><span style={{color: "#1D93FF"}}> BOOKS HERE! </span></h1>
        <div className="book-list--active-user-num">
          <div className='info' id="book-list">
            <h4>700+ <br /> Book Listed</h4>
          </div>
          <div className='info' id="active-user">
            <h4>550+ <br /> Active Users</h4>
          </div>
          <div className='info' id="book-sell">
            <h4>1100+ <br /> Book Sell/Month</h4>
          </div>
        </div>
        <button><a href="#books"></a>Explore More</button>
      </div>
    </div>

    {/* NATIONAL BOOK AWARD */}
    <div id="national-book-award">
      <h1>2023 National Books <br /> Award for Fiction shortlist</h1>
    </div>

    {/* OTHER BOOKS */}
    <div className="best-seller--books">
        <h1>OTHER BOOKS</h1>
        <div id="best-books">
          <div className="books"></div>
          <div className="books"></div>
          <div className="books"></div>
        </div>
    </div>
    </>
  )
}

export default Home
