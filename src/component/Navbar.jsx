import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoSearch, IoPersonOutline, IoBagOutline, IoClose } from "react-icons/io5";
import { FaTruck } from "react-icons/fa";
import { MdCardGiftcard } from "react-icons/md";
import { TbBook } from "react-icons/tb";
import { IoEarthOutline } from "react-icons/io5";
import { BsUpcScan } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";

const Navbar = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(null);
    const [mobileLinks, setMobileLinks] = useState([
        { name: "LAWN 25", link: "/" },
        { name: "Sale", link: "/sale" },
        { name: "SALT", link: "/lawn" },
        { name: "Women", link: "/women" },
        { name: "Men", link: "/men" },
        { name: "LOGIN", link: "/login" },
        { name: "BAGS", link: "/bags" },
        { name: "Contact Us", link: "/contact" },
    ]);

    return (
        <>
            <nav className="hidden lg:block bg-white border-b border-gray-200 shadow-sm fixed top-0 left-0 w-full z-50">
                <p className="text-center py-[8px] text-white bg-black italic">
                    Discover Summer Lawn 2025! Shop Our Vibrant Lawn Collection In-stores & Online.
                </p>
                <div className="flex justify-between items-center px-6 py-5">
                    {/* Left Icons */}
                    <div className="flex items-center gap-6 text-gray-600 text-sm py-1">
                        <Link to="#" className="flex flex-col items-center">
                            <img src="/nav_1.png" alt="Ideas" className="h-9" />
                            <span className="text-xs mt-1">IDEAS REWARDS</span>
                        </Link>
                        <Link to="#" className="flex flex-col items-center">
                            <img src="/nav_3.png" alt="Ideas" className="h-9" />
                            <span className="text-xs mt-1">LOOKBOOK</span>
                        </Link>
                        <Link to="#" className="flex flex-col items-center">
                            <img src="/nav_2.png" alt="Store" className="h-9" />
                            <span className="text-xs mt-1">STORE</span>
                        </Link>
                    </div>

                    {/* Logo */}
                    <div>
                        <Link to="/">
                            <img src="https://www.gulahmedshop.com/media/logo/stores/1/logo.svg" alt="Ideas" className="h-12" />
                        </Link>
                    </div>

                    {/* Right Icons */}
                    <div className="flex items-center gap-4 text-gray-600">
                        <IoSearch size={22} className="cursor-pointer" />
                        <img className="h-6 cursor-pointer" src="https://www.gulahmedshop.com/media/wysiwyg/icon/2025/02_track_order_icon.png" alt="truck" />
                        <IoPersonOutline size={22} className="cursor-pointer" />
                        <div className="relative">
                            <IoBagOutline size={22} className="cursor-pointer" />
                            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                                0
                            </span>
                        </div>
                        <img
                            src="https://e7.pngegg.com/pngimages/705/871/png-clipart-flag-of-pakistan-national-flag-flag-of-argentina-state-bank-of-pakistan-flag-miscellaneous-flag.png"
                            alt="PK"
                            className="h-6"
                        />
                    </div>
                </div>
                <div className="flex justify-center py-4 space-x-12 text-gray-800 text-sm uppercase font-medium">
                    <div
                        className="relative group"
                        onMouseEnter={() => setIsDropdownOpen("Lawn")}
                        onMouseLeave={() => setIsDropdownOpen(null)}
                    >
                        <Link to="#" >LAWN 25</Link>
                        {isDropdownOpen === "Lawn" && (
                            <div className="absolute left-0 top-10 bg-white shadow-lg border border-gray-200 p-6 w-[700px] flex">
                                <div className="w-1/3">
                                    <img
                                        src="https://www.gulahmedshop.com/media/custommegamenu_menu/0/6/06_unstitched.jpg"
                                        alt="Lawn Collection"
                                        className="w-full h-auto rounded-lg"
                                    />
                                </div>
                                <div className="w-2/3 pl-6">
                                    <h3 className="text-gray-700 font-semibold border-b pb-2">LAWN COLLECTION</h3>
                                    <ul className="text-gray-600 space-y-2 mt-3">
                                        <li><Link to="#">CHUNRI</Link></li>
                                        <li><Link to="#">THE JOY OF SUMMER</Link></li>
                                        <li><Link to="#">TRIBUTE TO MOTHERS</Link></li>
                                        <li><Link to="#">CHIKANKARI</Link></li>
                                        <li><Link to="#">PREMIUM LUXURY</Link></li>
                                        <li><Link to="#">SPRING COLLECTION</Link></li>
                                    </ul>
                                </div>
                            </div>
                        )}
                    </div>

                    <div
                        className="relative group"
                        onMouseEnter={() => setIsDropdownOpen("Winter")}
                        onMouseLeave={() => setIsDropdownOpen(null)}
                    >
                        <Link to="#" >WINTER COLLECTIONS</Link>
                        {isDropdownOpen === "Winter" && (
                            <div className="absolute left-0 top-10 bg-white shadow-lg border border-gray-200 p-6 w-[700px] flex">
                                <div className="w-1/3">
                                    <img
                                        src="https://www.gulahmedshop.com/media/custommegamenu_menu/3/0/300x450_image.jpg"
                                        alt="Winter Collection"
                                        className="w-full h-auto rounded-lg"
                                    />
                                </div>
                                <div className="w-2/3 pl-6">
                                    <h3 className="text-gray-700 font-semibold border-b pb-2">WINTER COLLECTION</h3>
                                    <ul className="text-gray-600 space-y-2 mt-3">
                                        <li><Link to="#">WINTER 2024</Link></li>
                                        <li><Link to="#">WOOL COLLECTION</Link></li>
                                        <li><Link to="#">WOOL COLLECTION</Link></li>
                                        <li><Link to="#">WOOL COLLECTION</Link></li>
                                        <li><Link to="#">WOOL COLLECTION</Link></li>
                                        <li><Link to="#">WOOL COLLECTION</Link></li>
                                        <li><Link to="#">WOOL COLLECTION</Link></li>
                                        <li><Link to="#">PREMIUM LINEN</Link></li>
                                    </ul>
                                </div>
                            </div>
                        )}
                    </div>

                    <div
                        className="relative group"
                        onMouseEnter={() => setIsDropdownOpen("Capsule")}
                        onMouseLeave={() => setIsDropdownOpen(null)}
                    >
                        <Link to="#" >CAPSULE COLLECTIONS</Link>
                        {isDropdownOpen === "Capsule" && (
                            <div className="absolute left-0 top-10 bg-white shadow-lg border border-gray-200 p-6 w-[700px] flex">
                                <div className="w-1/3">
                                    <img
                                        src="https://www.gulahmedshop.com/media/custommegamenu_menu/0/3/03_pret.jpg"
                                        alt="Capsule Collection"
                                        className="w-full h-auto rounded-lg"
                                    />
                                </div>
                                <div className="w-2/3 pl-6">
                                    <h3 className="text-gray-700 font-semibold border-b pb-2">CAPSULE COLLECTIONS</h3>
                                    <ul className="text-gray-600 space-y-2 mt-3">
                                        <li><Link to="#">LA SOIE SILK</Link></li>
                                        <li><Link to="#">MID SUMMER LUXE</Link></li>
                                        <li><Link to="#">MID SUMMER LUXE</Link></li>
                                        <li><Link to="#">MID SUMMER LUXE</Link></li>
                                        <li><Link to="#">MID SUMMER LUXE</Link></li>
                                        <li><Link to="#">MID SUMMER LUXE</Link></li>
                                        <li><Link to="#">MID SUMMER LUXE</Link></li>
                                        <li><Link to="#">AARANI COLLECTION</Link></li>
                                    </ul>
                                </div>
                            </div>
                        )}
                    </div>

                    <div
                        className="relative group"
                        onMouseEnter={() => setIsDropdownOpen("Festive")}
                        onMouseLeave={() => setIsDropdownOpen(null)}
                    >
                        <Link to="#" >FESTIVE COLLECTIONS</Link>
                        {isDropdownOpen === "Festive" && (
                            <div className="absolute left-0 top-10 bg-white shadow-lg border border-gray-200 p-6 w-[700px] flex">
                                <div className="w-1/3">
                                    <img
                                        src="https://www.gulahmedshop.com/media/custommegamenu_menu/0/4/04_salt.jpg"
                                        alt="Festive Collection"
                                        className="w-full h-auto rounded-lg"
                                    />
                                </div>
                                <div className="w-2/3 pl-6">
                                    <h3 className="text-gray-700 font-semibold border-b pb-2">FESTIVE COLLECTIONS</h3>
                                    <ul className="text-gray-600 space-y-2 mt-3">
                                        <li><Link to="#">EID UL ADHA COLLECTION</Link></li>
                                        <li><Link to="#">EID COLLECTION 2024</Link></li>
                                        <li><Link to="#">EID COLLECTION 2024</Link></li>
                                        <li><Link to="#">EID COLLECTION 2024</Link></li>
                                        <li><Link to="#">EID COLLECTION 2024</Link></li>
                                        <li><Link to="#">EID COLLECTION 2024</Link></li>
                                    </ul>
                                </div>
                            </div>
                        )}
                    </div>

                    <div
                        className="relative group"
                        onMouseEnter={() => setIsDropdownOpen("MENS")}
                        onMouseLeave={() => setIsDropdownOpen(null)}
                    >
                        <Link to="#" >MENS</Link>
                        {isDropdownOpen === "MENS" && (
                            <div className="absolute left-0 top-10 bg-white shadow-lg border border-gray-200 p-6 w-[700px] flex">
                                <div className="w-1/3">
                                    <img
                                        src="https://www.gulahmedshop.com/media/custommegamenu_menu/0/2/02_men.jpg"
                                        alt="Festive Collection"
                                        className="w-full h-auto rounded-lg"
                                    />
                                </div>
                                <div className="w-2/3 pl-6">
                                    <h3 className="text-gray-700 font-semibold border-b pb-2">MENS </h3>
                                    <ul className="text-gray-600 space-y-2 mt-3">
                                        <li><Link to="#">EID UL ADHA</Link></li>
                                        <li><Link to="#">EID COLLECT</Link></li>
                                        <li><Link to="#">EID COLLECT</Link></li>
                                        <li><Link to="#">EID COLLECT</Link></li>
                                        <li><Link to="#">EID </Link></li>
                                        <li><Link to="#">EID </Link></li>
                                    </ul>
                                </div>
                            </div>
                        )}
                    </div>



                </div>
            </nav>
            <nav className="block lg:hidden bg-white shadow-md fixed top-0 left-0 w-full z-50">
                <div className="flex justify-between p-4 items-center">
                    {/* Hamburger Button */}
                    <button onClick={() => setSidebarOpen(true)} className="text-2xl">&#9776;</button>

                    {/* Country Flag */}
                    <div>
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/3/32/Flag_of_Pakistan.svg"
                            alt="PK"
                            className="h-8"
                        />
                    </div>

                    {/* Logo */}
                    <div>
                        <Link to="/">
                            <img src="https://www.gulahmedshop.com/media/logo/stores/1/logo.svg" alt="Ideas" className="h-6" />
                        </Link>
                    </div>

                    {/* Icons */}
                    <div className="flex items-center gap-4 text-gray-600">
                        <img className="h-6 cursor-pointer" src="https://www.gulahmedshop.com/media/wysiwyg/icon/2025/02_track_order_icon.png" alt="truck" />
                        <div className="relative">
                            <IoBagOutline size={22} className="cursor-pointer" />
                            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                                0
                            </span>
                        </div>
                    </div>
                </div>

                {/* Search Bar */}
                <div className="w-full px-4 my-2 relative">
                    <div className="absolute left-6 top-1/2 transform -translate-y-1/2 text-gray-400">
                        <IoSearch size={18} />
                    </div>
                    <div className="absolute right-6 top-1/2 transform -translate-y-1/2 text-gray-400">
                        <BsUpcScan className="cursor-pointer" size={20} />
                    </div>
                    <input
                        type="text"
                        placeholder="Search..."
                        className="shadow-lg w-full border pl-10 pr-3 py-2 rounded-md focus:outline-none"
                    />
                </div>
            </nav>
            <div className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg transform ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} transition-transform duration-300 ease-in-out z-50`}>
                <div className="flex justify-between items-center p-4 border-b">
                    <h2 className="text-lg font-bold">SHOP</h2>
                    <button onClick={() => setSidebarOpen(false)} className="text-xl"><IoClose /></button>
                </div>
                <ul className="p-4 space-y-4">
                    {mobileLinks?.map((item, index) => (
                        <li key={index}>
                            <Link to={item.link} className="flex justify-between items-center text-gray-700 hover:text-gray-900">
                                <span>{item.name}</span>
                                <IoIosArrowForward />
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40"
                    onClick={() => setSidebarOpen(false)}
                ></div>
            )}
        </>

    );
};

export default Navbar;
