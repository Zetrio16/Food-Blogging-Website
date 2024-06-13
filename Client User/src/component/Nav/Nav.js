import React from 'react';
import './Nav.css';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Nav = () => {

    const navigate = useNavigate();

    const handleLogoutBtn = () => {
        localStorage.removeItem('token')
        navigate("/auth/login")
    }

    return (
        <nav>
            <div className='icon-nav'>
            <img className='nav-logo' src="https://previews.123rf.com/images/antoshkaforever/antoshkaforever1907/antoshkaforever190700022/128020523-food-blog-food-logo-icon-sign-background-and-element-for-business-design-for-social-networks.jpg" alt='logo'></img>
                <h1 className='food-blog-h1'>FOOD RECIPES</h1>
            </div>
            <ul className='nav-menu'>
                <li><NavLink to={'/'}>Home</NavLink></li>
                <li><NavLink to={'/recipes'}>Recipes</NavLink></li>
                <li><NavLink to={'/about'}>About</NavLink></li>
                <li><NavLink to={'/contact'}>Contact</NavLink></li>
                <li className='logoutBtn'><NavLink to={'/myFavourites'} style={{color:"white"}}>My Favourites</NavLink></li>
                <li><button onClick={handleLogoutBtn} className='logoutBtn' style={{background:"#2d3436"}}>Logout</button></li>
            </ul>
        </nav>
    );
}

export default Nav;