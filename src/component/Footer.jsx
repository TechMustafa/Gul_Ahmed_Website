import React from 'react'
import { Heading } from './Heading'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { Link } from 'react-router-dom';



const Footer = () => {

    return (
        <div className='bg-[#E8E6E7] py-10 uppercase'>
            <div className="w-[90%] d-flex justify-bteween pt-15">
            <div className="flex flex-col gap-2 w-full sm:w-[48%] md:w-[23%] lg:w-[12%]">
                    <h2 className='text-[#282828] font-poppins font-[600] sm:'>ABOUT GULAHMED</h2>
                    <Link className='footer_link' to="#" >About Us</Link>
                    <Link className='footer_link' to="#" >Company</Link>
                    <Link className='footer_link' to="#" >Careers</Link>
                    <Link className='footer_link' to="#" >Store Locator</Link>
                    <Link className='footer_link' to="#" >Blog</Link>
                </div>
                <div className="flex flex-col gap-2 w-full sm:w-[48%] md:w-[23%] lg:w-[12%]">
                    <h2 className='text-[#282828] font-poppins font-[600]'>MY ACCOUNT</h2>
                    <Link className='footer_link' to="#" >Login</Link>
                    <Link className='footer_link' to="#" >Create Account</Link>
                    <Link className='footer_link' to="#" >Account Info</Link>
                    <Link className='footer_link' to="#" >Order History</Link>
                    <Link className='footer_link' to="#" >Order Status</Link>
                </div>
                <div className="flex flex-col gap-2 w-full sm:w-[48%] md:w-[23%] lg:w-[12%]">
                    <h2 className='text-[#282828] font-poppins font-[600]'>CUSTOMER CARE</h2>
                    <Link className='footer_link' to="#" >About Us</Link>
                    <Link className='footer_link' to="#" >Careers</Link>
                    <Link className='footer_link' to="#" >Store Locator</Link>
                    <Link className='footer_link' to="#" >Blog</Link>
                    <Link className='footer_link' to="#" >About Us</Link>
                    <Link className='footer_link' to="#" >Careers</Link>
                    <Link className='footer_link' to="#" >Store Locator</Link>
                    <Link className='footer_link' to="#" >Blog</Link>
                    <Link className='footer_link' to="#" >Store Locator</Link>
                    <Link className='footer_link' to="#" >Blog</Link>
                </div>
                <div className="flex flex-col gap-2 w-full sm:w-[48%] md:w-[23%] lg:w-[12%]">
                    <h2 className='text-[#282828] font-poppins font-[600]'>FIND US ON</h2>
                    <Link className='footer_link' to="#" >About Us</Link>
                    <Link className='footer_link' to="#" >Blog</Link>
                    <Link className='footer_link' to="#" >Careers</Link>
                    <Link className='footer_link' to="#" >Store Locator</Link>
                    <Link className='footer_link' to="#" >Blog</Link>
                    <Link className='footer_link' to="#" >About Us</Link>
                    <Link className='footer_link' to="#" >Careers</Link>
                </div>
                <div className="flex flex-col gap-3 w-full sm:w-[80%] md:w-[50%] lg:w-[25%]">
                    <h2 className="text-[#282828] font-poppins font-semibold mb-2">
                        SIGN UP FOR UPDATES
                    </h2>
                    <p className="lowercase text-[12px] text-[#282828] mb-2 py-4">
                    By entering your email address below, you consent to receiving our newsletter with access to our latest collections, events and initiatives. more details on this are provided in our Privacy Policy.
                    </p>
                    <input
                        type="email"
                        className="bg-white border-black border-[2px] w-full p-2 text-sm border border-gray-400 rounded-md mb-2"
                        placeholder="Enter Email"
                    />
                    <input
                        type="text"
                        className="bg-white border-black border-[2px] w-full p-2 text-sm border border-gray-400 rounded-md mb-4"
                        placeholder="WhatsApp Number"
                    />
                    <h2 className=" mt-4 text-[#282828] font-poppins font-semibold">
                        FOR CORPORATE INQUIRIES
                    </h2>
                    <Link className="footer_link lowercase text-[#007BFF]" to="#">
                        corporate@ideas.com.pk
                    </Link>
                </div>
            </div>
            <div className='px-[10vh] pt-6'>
                <img src="https://www.gulahmedshop.com/media/pwa/images/pay-icons.png" alt="" />
            </div>
        </div>
    )
}

export default Footer