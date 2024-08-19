import './main.css'

const Header = () => {
    return(
        <header className="header">
            <a href="#home" className="logo">Anthony
            <span> Maia Dolberth</span></a>

            <i className="bx bx-menu" id="menu-icon"></i>

            <nav className="navbar">
                <a href="#home" className="active">Home</a>
                <a href="#education">Educação</a>
                <a href="#services">Services</a> 
                <a href="#testimonials">Testimonials</a>
                <a href="#contact">Contato</a>
            </nav>
        </header>
    )
}

export default Header;