function NavBar() {
    return (
        <div className="navbar">
            <div>
                <i className="fas fa-bars"></i>
            </div>
            <div href="#home" className="item">
                Home
            </div>
            <div href="#home" className="item">
                About
            </div>
            <div href="#home" className="item">
                Work
            </div>
            <div href="#home" className="item">
                Blog
            </div>
            <div href="#home" className="item">
                Contact
            </div>
        </div>
    );
}

export default NavBar;
