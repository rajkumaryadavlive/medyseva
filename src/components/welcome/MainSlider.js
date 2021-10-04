import React from "react";
import Slider from "react-slick";
import Slide from "./Slide";
import banner1 from '../../assets/images/banners/banner2.jpg';
import banner3 from '../../assets/images/banners/banner3.jpg';

const MainSlider=()=>{
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
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
                <Slider {...settings}>
                  <Slide img={banner1} />  
                  <Slide img={banner3} />  
                  <Slide img={banner1} />  

                </Slider>
            </>)
}
export default MainSlider;