import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router";

function Header() {
    return (
        <header>
            <Navbar>
                <Container as="nav">
                    <Navbar.Toggle aria-controls="navbar" />
                    <Navbar.Collapse id="navbar">
                        <Nav className="ms-auto">
                            <Nav.Link as={Link} to="/">
                                Accueil
                            </Nav.Link>
                            <Nav.Link as={Link} to="/categorie/vetements">
                                Vêtements
                            </Nav.Link>
                            <Nav.Link as={Link} to="/categorie/chaussures">
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
