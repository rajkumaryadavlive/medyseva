import React from "react";
import { Row } from "react-bootstrap";
import Slider from "react-slick";
import c1 from '../../../assets/images/speciality/icon1.png'
import c2 from '../../../assets/images/speciality/icon2.png'
import c3 from '../../../assets/images/speciality/icon3.png'
import Speciality from "./Speciality";
const SpecialitySlider=()=>{
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll:1,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };
      return(<>
                <Row>
                <Slider {...settings}>
                   <Speciality iconImage={c1} />
                    <Speciality iconImage={c2} />  
                    <Speciality iconImage={c3} />
                    <Speciality iconImage={c1} />
                    <Speciality iconImage={c2} />  
                    <Speciality iconImage={c3} />
                </Slider>
                </Row>
            </>)
}
export default SpecialitySlider;