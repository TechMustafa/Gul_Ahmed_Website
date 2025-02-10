import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function HomeSlider({data,mobileBanners}) {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    // const slidesData = [
    //     { id: 1, img: "/banner.jpg.png", link: "https://example.com/1" },
    //     { id: 2, img: "/banner2.png", link: "https://example.com/2" },
    //     { id: 3, img: "/banner3.png", link: "https://example.com/3" },
    // ];

    // const mobileSlides = [
    //     { id: 1, img: "/mobile_banner.png", link: "https://example.com/1" },
    //     { id: 2, img: "/mobile_banner2.png", link: "https://example.com/2" },
    //     { id: 3, img: "/mobile_banner3.png", link: "https://example.com/3" },
    // ];

    return (
        <>
            <div className=" hidden lg:block slider-container webbanner mt-49 sm:h-[80vh]">
                <Slider {...settings}>
                    {data.map((item) => (
                        <div key={item.id} style={{ height: "100%" }}>
                            <section className="flex relative w-full">
                                <div className="md:w-[100%] overflow-hidden bg-cover bg-no-repeat bg-center bg-gray-950 w-full hero-bg">
                                    <img
                                        src={item?.img}
                                        alt="Banner"
                                        className="bannerimage w-full sm:h-[80vh] object-cover"
                                    />
                                </div>
                            </section>
                        </div>
                    ))}
                </Slider>
            </div>

            <div className="block lg:hidden slider-container webbanner mt-30  h-[88vh]">
                <Slider {...settings}>
                    {mobileBanners.map((item) => (
                        <div key={item.id} style={{ height: "100%" }}>
                            <section className="flex relative w-full">
                                <div className="w-[100%] overflow-hidden bg-cover bg-no-repeat bg-center bg-gray-950 w-full hero-bg">
                                    <img
                                        src={item?.img}
                                        alt="Banner"
                                        className="bannerimage w-full h-[88vh] object-cove"
                                    />
                                </div>
                            </section>
                        </div>
                    ))}
                </Slider>
            </div>
        </>
    );
}

export default HomeSlider;
