import React from 'react'
import { Heading } from './Heading'
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const Feature = ({data}) => {

    // const slidesData = [
    //     { id: 1, text: "SUPPORT 24/7", image: "https://www.gulahmedshop.com/media/wysiwyg/icon/2025/01_support_24_7.png", description: "Contact us 24 hours a day, 7 days a week" },
    //     { id: 1, width:"18vh", text: "TRACK YOUR ORDER", image: "https://www.gulahmedshop.com/media/wysiwyg/icon/2025/02_track_order_icon.png", description: "Click for the quick update on your order" },
    //     { id: 2, text: "RETURN & EXCHANGES", image: "https://www.gulahmedshop.com/media/wysiwyg/icon/2025/03_return_and_exchange.png", description: "Please view the return and exchange policy" }
    // ];

    return (
        <div className="d-flex justify-bteween py-[12vh]">
            {data.map((item, index) => (
                <div key={index} className="cursor-pointer">
                    <div className="flex flex-col text-center w-[40vh] h-[20vh] ">
                        <img
                            className={`mx-auto flex items-center justify-center ${item.text == "TRACK YOUR ORDER" ? `mt-[8px] w-[18vh] h-[7vh] ` : " w-[9vh] h-[8vh]"}`}
                            src={item?.image}
                            alt="feature"
                        />
                        <h4 className=" pt-3  text-[#282828] font-bold text-sm md:text-[15px] text-center">
                            {item?.text}
                        </h4>
                        <p className='text-center text-[#282828] text-[14px] font-poppins'>{item?.description}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Feature