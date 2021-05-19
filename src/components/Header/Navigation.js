import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { IndexLinkContainer, LinkContainer } from 'react-router-bootstrap';


const Navigation = () => {
    return (
        <Navbar collapseOnSelect bg="light" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <IndexLinkContainer to="/">
                        <Nav.Link>Home</Nav.Link>
                    </IndexLinkContainer>
                    <LinkContainer to="/recipes">
                        <Nav.Link>Recipes</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/add-new-recipe">
                        <Nav.Link>Add New Recipe</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/about">
                        <Nav.Link>About</Nav.Link>
                    </LinkContainer>
                </Nav >
            </Navbar.Collapse >
        </Navbar >
    );
};

export default Navigation;