import React from "react";
import { Container,Row,Col, Card } from "react-bootstrap";
import MainSlider from "./MainSlider";
import SpecialitySlider from "./speciality/SpecialitySlider";
import About from "./about/About";
import Blog from "./blog";


const Welcome=()=>{
   return(<>
            <Container fluid className="slider-container">
                 <Row>
                     <MainSlider />
                 </Row>
            </Container> 
            <Container fluid className="strip-container">
              <Row>
                  <Col md={6}>
                      <Card className="strip-card">
                          <Card.Title>
                          <i className="far fa-clock strip-icon"></i><span className="strip-icon-text">Consult Online</span>
                          </Card.Title>
                          <Card.Text>
                          Please check below for our working hours throughout the week excluding national holidays.
                          </Card.Text>
                      </Card>
                  </Col>
                  <Col md={6}>
                  <Card className="strip-card">
                          <Card.Title>
                          <i class="far fa-heart-rate  strip-icon"></i><span className="strip-icon-text">Book Lab Test</span>
                          </Card.Title>
                          <Card.Text>
                          Please check below for our working hours throughout the week excluding national holidays.
                          </Card.Text>
                      </Card>
                  </Col>
              </Row>
            </Container>   
            <Container className="about-section">
                <About />
            </Container>
            <Container   className="speciality-container">
                <h1>Specialities</h1>
                 <SpecialitySlider />
            </Container>
            <Container fluid>
               <Blog />
            </Container>
          </>
          );
}
export default Welcome;