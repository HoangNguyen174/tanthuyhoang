import React from 'react';
import './NavBar.style.css';
import { Link } from 'react-router-dom';
import Logo from '../../../assets/img/TTH_Logo_Horizontal.jpg';

export const NavBar = () => {
    return (
        <div className="navbar-container">
            <div className="navbar-wrapper">
                <div className="logo">
                    <img src={Logo}/>
                </div>
                <div className="navbar">
                    <ul>
                        <li><Link to="/"> Homes </Link></li>
                        <li><Link to="/about"> About </Link></li> 
                        <li><Link to="/services"> Services </Link></li> 
                        <li><Link to="/equipments"> Equipments </Link></li>
                        <li><Link to="/projects"> Projects </Link></li>                                               
                        <li><Link to="/contacts"> Contacts </Link></li>                                                                                                                                                                
                        <li><Link to="/news"> News & Events </Link></li>                                                                                                                                          
                    </ul>
                </div>
            </div>
        </div>
    );
}
