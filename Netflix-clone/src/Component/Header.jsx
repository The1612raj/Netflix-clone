import React from 'react'
import './Header.scss'
import { Link } from 'react-router-dom'
import { IoSearchSharp } from "react-icons/io5";
const Header = () => {
  return (
    <>
    <nav className="header">
        <img src="https://cdn-icons-png.flaticon.com/512/5977/5977590.png" alt="" className='logo' />
       <div className='nav-component'>
       <Link to="/tvshows">Tv Shows</Link>
       <Link to="/movies">Movies</Link>
       <Link to="/recentlyadded">Recently added</Link>
       <Link to="/mylist">My List</Link>

       </div>
       <IoSearchSharp className='search-icon'  />
       
    </nav>
    
    
    </>
  )
}

export default Header