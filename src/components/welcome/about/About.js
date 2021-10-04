import about from '../../../assets/images/about.png'
import React,{useState} from 'react'
import ceo from '../../../assets/images/ceo.jpg'
import signature from '../../../assets/images/signature.png'
import ModalVideo from 'react-modal-video';
import v1 from '../../../assets/video/v1.mp4'
const About=()=>{
  const [isOpen, setOpen] = useState(false)


     return(<>
          <div class="row">
              <div class="col-lg-12 col-xl-6 mb-lg-40">
                <div class="about-img z-index-1 pr-30 pr-lg--0">
                  <img class="img-fullwidth" src={about} alt=""/>
                    <div class="box-hover-effect tm-sc-video-popup tm-sc-video-popup-css-button video-link mfp-iframe">
                      <div class="effect-wrapper d-flex align-items-center">
                        <div class="animated-css-play-button"><span class="play-icon"><i class="fa fa-play"></i></span></div>
                        <a class="hover-link" data-lightbox-gallery="youtube-video"onClick={()=>setOpen(true)} href="#" title=""></a>
                      </div>
                    </div>
                </div>
              </div>
              <div class="col-lg-12 col-xl-6">
              <h2 class="mt-0 mb-40">Welcome to Our Medyseva Healthcare Center</h2>
              <p class="">There are many variations of Why People Choose Our Clinic passages of Lorem Ipsum available but the majority have suffered alteration in some form by injected There are many Lorem Ipsum available are many variations of pass ages of lorem ipsum but majority have suffered majority People Choose Our Clinic passages available</p>
                <div class="row g-0">
                  <div class="col-md-6">
                    <div class="tm-sc-unordered-list list-style1 mt-20 mb-20">
                      <ul class="list-unstyled">
                        <li> Affordable Prices For All</li>
                        <li> Anytime Free Consultation</li>
                        <li> 24/7 Emergency Service</li>
                        <li> Trusted Medical Treatment</li>
                      </ul>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="tm-sc-unordered-list list-style1 mb-20 mt-20">
                      <ul class="list-unstyled">
                        <li> Offer a wide range of care</li>
                        <li> Trusted Medical Treatment</li>
                        <li> Get Free Consultation Anytime</li>
                        <li> 24/7 Emergency Service</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="row mt-30">
                  <div class="col-lg-5 col-sm-6">
                    <a href="page-about.html" class="btn btn-theme-colored1 mb-sm-40">Discover More</a>
                  </div>
                  <div class="col-lg-7 col-sm-6">
                    <div class="medics-text">
                      <div class="thumb">
                        <img src={ceo} alt="Image"/>
                      </div>
                      <div class="signature">
                        <img src={signature} alt="Image"/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

           
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="HMXimm-ydLo" onClose={() => setOpen(false)} />


            </>)
}
export default About;