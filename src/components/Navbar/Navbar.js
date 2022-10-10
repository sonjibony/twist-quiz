import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
const Navbar = () => {
    return (
        <div className='nav-container'>
          
<div className='nav-name'>
<h2>Twist</h2>  
        <img className='logo' src={"https://cdn-icons-png.flaticon.com/512/3407/3407024.png"} alt=""></img> 
</div>
<nav className='nav'>
    <Link to ='/'>Home</Link>
    <Link to ='/statistics'>Statistics</Link>
    <Link to ='/blog'>Blog</Link>
</nav>
</div>
    );
};

export default Navbar;