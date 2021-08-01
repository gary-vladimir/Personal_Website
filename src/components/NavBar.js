import React from 'react';

function NavBar() {
    return (
        <div className="navbar">
            <div
                className="burger"
                onClick={() => {
                    console.log('user pressed menu');
                }}
            >
                <i className="fas fa-bars"></i>
            </div>
            <div href="#home" className="item">
                Home
            </div>
            <div href="#about" className="item">
                About
            </div>
            <div href="#work" className="item">
                Work
            </div>
            <div href="#blog" className="item">
                Blog
            </div>
            <div href="#contact" className="item">
                Contact
            </div>
        </div>
    );
}

export default NavBar;
