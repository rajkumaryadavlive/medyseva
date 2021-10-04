import {Col, Container, Row} from 'react-bootstrap'
import HeaderNavigation from './HeaderNavigation';
const Header=()=>{
    return(<>
          <header className="header-container">
             <Container fluid className="header-strip">
                <Row>
                  <Col md={6}>
                    <Row>
                      <Col md={4}><a href="" className="phone-link">
                        <i className="fas fa-phone"></i> <span className="phone">7999169022</span></a></Col>
                      <Col md={6}>
                      <a href="#" className="link-email"><i className="fas fa-envelope-open"></i>contact@medcare.com</a>
                      </Col>

                    </Row>
                  </Col>
                  <Col md={6} className="text-end">
                     <Row>
                       <Col md={4} className="text-end">
                      
                       </Col>
                       <Col md={6} className="text-end">
                       <a href="https://twitter.com/medyseva" className="social-link"><i class="fab fa-twitter"></i>Twitter</a>
                       <a href="https://www.facebook.com/Medyseva/" className="social-link">
                       <i class="fab fa-facebook"></i>Facebook</a>
                       <a href="https://www.instagram.com/medy.seva/?hl=en" className="social-link">
                       <i class="fab fa-youtube"></i>Youtube</a>
                       </Col>
                       <Col md={2} className="text-end">
                       
                       </Col>
                     </Row>
                  </Col>    
                </Row> 
             </Container> 
            <Container fluid>
              <HeaderNavigation />
            </Container>
          </header>
          </>)
}
export default Header;