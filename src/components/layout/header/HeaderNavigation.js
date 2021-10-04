import {Link} from "react-router-dom";
import {Navbar,Nav,Container, Image} from 'react-bootstrap'
import logo from '../../../assets/images/logo/logo.png'
const HeaderNavigation=()=>{
    return(<>
            <Navbar collapseOnSelect expand="lg" bg="white" variant="dark">
            <Container>
            <Navbar.Brand href="/">
                <Image src={logo} width={150} height={50}/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                
                </Nav>

                <Nav className="me-auto">
                <Nav><Link to="/about" className="nav-link">About</Link></Nav>   
                <Nav><Link to="/doctors" className="nav-link">Doctors</Link></Nav>
                <Nav><Link to="/services" className="nav-link">Services</Link></Nav>
                <Nav><Link to="/services"className="nav-link">Lab Test</Link></Nav>
                <Nav><Link to="/contact-us"className="nav-link">Contact Us</Link></Nav>

                </Nav>

                <Nav>
                <Nav.Link href="#deets"><i class="fas fa-search"></i></Nav.Link>
                <Nav.Link href=""><i class="fal fa-notes-medical"></i></Nav.Link>
                <Nav.Link eventKey={2} href="#memes">
                <i class="fas fa-user"></i>
                </Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
            </Navbar>
</>);
}
export default HeaderNavigation;