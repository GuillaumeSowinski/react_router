import { Navbar, Nav, Container } from "react-bootstrap";
import { NavLink } from "react-router";
import "../assets/styles/header.css"
import { useMatch } from 'react-router';

function Header() {
    const match = useMatch('/categorie/:name');
    return (
        <header>
            {match ? (
                <h2>Catégorie : {match.params.name}</h2>
            ) : (
                <h2>Bienvenue sur le site</h2>
            )}
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
