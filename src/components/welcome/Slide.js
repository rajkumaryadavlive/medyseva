import React,{useState} from 'react';
import {Col,Card} from'react-bootstrap';
import VideoPlay from './VideoPlay';
const  Slide=({img})=>{
  const [isOpen, setOpen] = useState(false)
     return (<>
               <Col md={12}>
               <Card className="bg-dark text-white main-slider-card">
                    <Card.Img src={img}  className="main-slider-image" alt="Card image" />
                    <Card.ImgOverlay>
                       <div className="overlay-text">
                       <Card.Title className="main-slide-card-title">Providing Best<br/>Medical Care</Card.Title>
                        <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                        </Card.Text>
                        <Card.Text>Last updated 3 mins ago</Card.Text>
                       
                        <ul class="features-list list-unstyled mb-0 d-flex flex-wrap">
                        
                        <li className="feature-item">
                        <div className="feature__icon">
                          <i className="fas fa-heartbeat"></i>
                        </div>
                        <h2 className="feature__title">Examination</h2>
                        </li>
                        
                       
                        <li className="feature-item">
                        <div className="feature__icon">
                        <i className="fas fa-heartbeat"></i>
                        </div>
                        <h2 className="feature__title">Cardiogram</h2>
                        </li>
                        <li className="feature-item">
                        <div className="feature__icon">
                          <i className="fas fa-heartbeat"></i>
                        </div>
                        <h2 className="feature__title">Blood Pressure</h2>
                        </li>
                      </ul>
                       </div>
                       
                       <a id="play-video" onClick={()=>setOpen(true)} class="video-play-button" href="#">
                         <span></span>
                        </a>

                        <VideoPlay isOpen={isOpen} setOpen={setOpen} />

                    </Card.ImgOverlay>
             </Card>
               </Col>
             </>
             );
}
export default Slide;