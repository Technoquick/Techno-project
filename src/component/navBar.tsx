function NavBar() {
    return ( 
        <nav className="navbar">
            <div className="logo">Technoquick Solution</div>
            <div className="nav-link">
                <a href="#home">Home</a>
                <a href="#home">Service</a>
                <a href="#home">Packages</a>
                <a href="#home">About</a>
                <a href="#home">Contact</a>
            </div>

            <button className="nav-button">Get Free Quote</button>
        </nav>
     );
}

export default NavBar;