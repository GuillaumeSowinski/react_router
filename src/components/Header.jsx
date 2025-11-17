import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router";
import "../Styles/header.css"

function Header() {
    return (
        <header>
            <Navbar bg="light">
                <Container as="nav">
                    <Navbar.Toggle aria-controls="navbar" />
                    <Navbar.Collapse id="navbar">
                        <Nav className="ms-auto">
                            <Nav.Link as={NavLink} to="/">
                                Accueil
                            </Nav.Link>
                            <Nav.Link as={NavLink} to="/categorie/vetements">
                                Vêtements
                            </Nav.Link>
                            <Nav.Link as={NavLink} to="/categorie/chaussures">
                                Chaussures
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}

export default Header;
