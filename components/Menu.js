import MyApp from 'next';

import { Nav, Navbar, NavDropdown } from 'react-bootstrap'

const Menu = () => {
    return (
        <div>
            <Navbar bg="" expand="lg">
                <Navbar.Brand href="/">
                    <h1>Logo</h1>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link title="Página Inicial" href="/">Home</Nav.Link>
                        <Nav.Link title="Quem Somos" href="/about">About Us</Nav.Link>
                        <Nav.Link title="Fale conosco" href="/contact">Contact</Nav.Link>
                        <NavDropdown title="Social" id="basic-nav-dropdown">
                            <NavDropdown.Item href="https://protonmail.com/" title="Proton" target="_blank">Proton</NavDropdown.Item>
                            <NavDropdown.Item href="https://www.deepl.com/translator" title="Deepl" target="_blank">Deepl</NavDropdown.Item>
                            <NavDropdown.Item href="http://duckduckgo.com/" title="DuckDuckGo" target="_blank">DuckDuckGo</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default Menu