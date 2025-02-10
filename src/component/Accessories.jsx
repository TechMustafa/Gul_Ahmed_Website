import React from 'react'
import { Heading } from './Heading'
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";



const Accessories = ({data}) => {
    // const slidesData = [
    //     { id: 1, text: "BAGS", image: "https://www.gulahmedshop.com/media/wysiwyg/2025/01_home_page/01_carousel/01_08/bags.png", link: "https://example.com/1" },
    //     { id: 1, text: "WOMEN SHOES", image: "https://www.gulahmedshop.com/media/wysiwyg/2025/01_home_page/01_carousel/01_08/women_shoes.png", link: "https://example.com/1" },
    //     { id: 2, text: "SCENTED CANDLES", image: "https://www.gulahmedshop.com/media/wysiwyg/2025/01_home_page/01_carousel/01_08/scented_candles.png", link: "https://example.com/2" },
    //     { id: 3, text: "fRAGANCES", image: "https://www.gulahmedshop.com/media/wysiwyg/2025/01_home_page/01_carousel/01_08/fragrances.png", link: "https://example.com/3" },
    //     { id: 3, text: "MEN'S SHOES", image: "https://www.gulahmedshop.com/media/wysiwyg/2025/01_home_page/01_carousel/01_08/men_shoes.png", link: "https://example.com/3" },
    //     { id: 1, text: "JEWELRY", image: "https://www.gulahmedshop.com/media/wysiwyg/2025/01_home_page/01_carousel/01_08/jewelry.png", link: "https://example.com/1" },
    // ];

    return (
        <div>
            <Heading text="ACCESSORIES FOR YOU" description="THIS IS WHAT YOU CAME HERE FOR." />
            <div className="d-flex justify-bteween">
                {data?.map((item, index) => (
                    <div key={index} className="cursor-pointer group">
                        <div className="flex flex-col items-center w-[32vh] h-[30vh] ">
                            <img
                                className="w-[100%] h-[100%] md:w-[100%] md:h-[100%] flex items-center justify-center"
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
            </div>
        </div>
    )
}

export default Accessories