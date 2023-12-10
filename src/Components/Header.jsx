import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
    const [isNavActive, setIsNavActive] = useState(false);

    const toggleMenu = () => {
        setIsNavActive(prevState => !prevState);
    };

    useEffect(() => {
        const handleScroll = () => {
            const nav = document.querySelector('nav');
            console.log('Return');
            nav.classList.toggle('sticky', window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);

        // return () => {
            
        //     window.removeEventListener('scroll', handleScroll);
        // };
    }, []);

    return (
        <header>
            <nav>
                <div className="logo">
                    <h1>Hashim<span>'s</span> Portfolio</h1>
                </div>
                <div className={`menu-toggle ${isNavActive ? 'active' : ''}`} id="mobile-menu" onClick={toggleMenu}>
                    <span className={`dark ${isNavActive ? 'active' : ''}`}></span>
                    <span className={isNavActive ? 'active' : ''}></span>
                    <span className={isNavActive ? 'active' : ''}></span>
                </div>
                <div className={`links ${isNavActive ? 'active' : ''}`} id="nav-list">
                    <ul>
                        <li><a href="#box1">About</a></li>
                        <li><a href="#">Skills & Experience</a></li>
                        <li><a href="#">Projects</a></li>
                        <li><a href="#">Contact me</a></li>
                    </ul>
                </div>
            </nav>
            <div className="box1">
                <div className="content">
                    <h2>Hello! It's Me</h2>
                    <h1><span>Muhammad Hashim</span></h1>
                    <h3>
                        I am a Coding Artist with Development Skills
                    </h3>
                    <div className="socialicons">
                        <a href="https://github.com/MuhammadHashim06" target='_blank_' rel="noopener noreferrer">
                            <img src={require('./Socialicon/github.png')} alt="Github Icon" />
                        </a>
                        <a href="https://www.linkedin.com/in/muhammad-hashim-6055b222b/" target='_blank_' rel="noopener noreferrer">
                            <img src={require('./Socialicon/linkedin.png')} alt="LinkedIn Icon" />
                        </a>
                        <a href="https://www.instagram.com/hashim_x06/" target='_blank_' rel="noopener noreferrer">
                            <img src={require('./Socialicon/Instagram.png')} alt="Instagram Icon" />
                        </a>
                        <a href="https://www.facebook.com/profile.php?id=100012406600331&mibextid=ZbWKwL" target='_blank_' rel="noopener noreferrer">
                            <img src={require('./Socialicon/facebook.png')} alt="Facebook Icon" />
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
