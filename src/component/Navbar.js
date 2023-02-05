import React, { Fragment } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import search from '../assets/search.png'
import chat from '../assets/chat.png'
import home from '../assets/home.png'
import user from '../assets/user.png'


export default function Navbar() {
  return (
    <Fragment>
        <nav className="navbar">
            <div className="links">
                <Link to='/dashboard' className="navbar-brand"><img alt="home" src={home}></img></Link>
                <Link to="/search" className="navbar-brand"><img alt="nav" src={search}></img></Link>
                <Link to="/add"><button className="newplant">+</button></Link>
                <Link to="/chat"className="navbar-brand"><img alt="chat" src={chat}></img></Link>
                <Link to="/profile" className="navbar-brand"><img alt="user" src={user}></img></Link>
            </div>
            <div className="blackbar">
            </div>
            
        </nav>
  
    </Fragment>
      
  )
}
