import { Image } from "antd";
import React from "react"
import Slider from "react-slick";

const SliderComponent = ({arrImages}) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2500
      };
    return(
        <div>
            <Slider {...settings}>
                {arrImages.map((image)=>{
                    return(
                        <Image src={image} alt = "slider" preview={false} width="100%"/>
                    )
                })} 

            </Slider>
        </div>
    )
}
export default SliderComponent