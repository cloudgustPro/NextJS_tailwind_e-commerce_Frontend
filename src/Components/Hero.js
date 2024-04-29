"use client"
import React from 'react'
import Slider from 'react-slick'
import Slide from './Slide'

const Hero = () => {

    let settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    PauseOnHover: true,
    slidesToShow: 1,
    slidesToScroll: 1,
        
    }

    const SlideData = [
        {
            id:0,
            img: "/1.jpg",
            title: "laptop",
            mainTitle:"computer",
            price: "$350"
        },

        {
            id:1,
            img: "/2.jpg",
            title: "laptop",
            mainTitle:"computer",
            price: "$250"
        },

        {
            id:2,
            img: "/3.jpg",
            title: "laptop",
            mainTitle:"computer",
            price: "$550",
        },
    ];
  return (
    <div>
      <div>
        <Slider {...settings}>
            {SlideData.map((item)=>{
                return (
                <Slide
                    key={item.id}
                    img={item.img}
                    title={item.title}
                    mainTitle={item.mainTitle}
                    price={item.price}

                />
                );
            })}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
