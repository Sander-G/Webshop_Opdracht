import { Container, Nav, Navbar as NavbarBS } from "react-bootstrap"
import { NavLink } from "react-router-dom"  
// imported bootstrap navbar 
export function Navbar () {
    return (
    <NavbarBS className="bg-white shadow-sm mb-3">
        <Container >
            <Nav className="me-auto">
                <Nav.Link to="/" as={NavLink}>
                Home
                </Nav.Link>
                <Nav.Link to="/Store" as={NavLink}>
                Store
                </Nav.Link>
            </Nav>
            <button style>
              
            </button>
        </Container>
    </NavbarBS>



    )
};




