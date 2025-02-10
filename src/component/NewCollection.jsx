import React from 'react'
import { Heading } from './Heading'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";



const NewCollection = ({data}) => {
    const PrevArrow = ({ onClick }) => (
        <div className="absolute left-2 px-2 py-5 top-1/2 transform -translate-y-1/2 cursor-pointer text-black bg-[#F0F1EF] z-10" onClick={onClick}>
            <IoIosArrowBack size={22} />
        </div>
    );

    const NextArrow = ({ onClick }) => (
        <div className="absolute right-2 px-2 py-5 top-1/2 transform -translate-y-1/2 cursor-pointer text-black bg-[#F0F1EF] z-10" onClick={onClick}>
            <IoIosArrowForward size={22} />
        </div>
    );

    const settings = {
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 5000,
        // nextArrow: <NextArrow />,
        // prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    // infinite: true,
                    // dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    // const slidesData = [
    //     { id: 1, text: "CHIKAN KARI", image: "https://www.gulahmedshop.com/media/magefan_blog/Blog_Cover_Summer_Lawn.jpg", link: "https://example.com/1" },
    //     { id: 1, text: "CO-ORD SETS", image: "https://www.gulahmedshop.com/media/magefan_blog/gulahmed-ideas-dolmen-clifton.jpg", link: "https://example.com/1" },
    //     { id: 2, text: "THROWS", image: "https://www.gulahmedshop.com/media/magefan_blog/Blog_Banner2.jpg", link: "https://example.com/2" },
    //     { id: 3, text: "CUSHIONS COVERS", image: "https://www.gulahmedshop.com/media/magefan_blog/Blog-Cover-2.jpg", link: "https://example.com/3" }
    // ];

    return (
        <div className='relative'>
            <Heading text="ALL THAT’S NEW" description="VIEW ALL BLOGS" />
            <div className="slider-container mx-auto w-[72%]">
                <Slider {...settings}>
                    {data?.map((item, index) => (
                        <div key={index} className="cursor-pointer group px-5">
                            <div className="flex flex-col items-center">
                                <img
                                    className="w-[100%] px-2 h-[100%] md:w-[100%] md:h-[25vh] flex items-center justify-center"
                                    src={item?.image}
                                    alt="Ellipse"
                                />
                            </div>
                            <h4 className="flex items-center justify-center gap-1 py-4 text-[#282828] text-sm md:text-[15px] text-center 
              group-hover:text-red-600 transition-colors duration-300">
                                {item?.text}
                                <span className='mb-[2px] flex items-center'>
                                    <IoIosArrowForward />
                                </span>
                            </h4>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default NewCollection