import React from 'react'
import { Heading } from './Heading'

// const collections = [
//     { id: 1, img: "https://www.gulahmedshop.com/media/wysiwyg/2025/01_home_page/00_grid/02_04/dhoop_kinaare_wb.jpg", title: "DHOOP KINARAY" },
//     { id: 3, img: "https://www.gulahmedshop.com/media/wysiwyg/2025/01_home_page/00_grid/02_04/mother_collection_wb.jpg", title: "MOTHER COLLECTION" },
// ];
// const collections2 = [
//     { id: 2, img: "https://www.gulahmedshop.com/media/wysiwyg/2025/01_home_page/00_grid/02_04/floral_collection_wb.jpg", title: "FLORAL WORLD" },
//     { id: 4, img: "https://www.gulahmedshop.com/media/wysiwyg/2025/01_home_page/00_grid/02_04/premium_collection_wb.jpg", title: "PREMIUM COLLECTION" },
// ];

// const collections3 = [
//     { id: 5, img: "https://www.gulahmedshop.com/media/wysiwyg/2025/01_home_page/00_grid/02_04/chunri_collection_wb.jpg", title: "CHUNRI COLLECTION" },
// ];


const LawnSide = ({data}) => {
    return (
        <div className='lawn-section'>
            <Heading text="LAWN 2025" />
            <div className='d-flex '>
                <div className="collection-container">
                    {data?.collections?.map((item) => (
                        <div key={item.id} className="collection-item">
                            <img src={item.img} alt={item.title} />
                        </div>
                    ))}
                </div>
                <div className="collection-container2">
                    {data?.collections2?.map((item) => (
                        <div key={item.id} className="collection-item2">
                            <img src={item.img} alt={item.title} />
                        </div>
                    ))}
                </div>
                <div className="collection-container3">
                    <div key={data?.collections3[0].id} className="collection-item3">
                        <img src={data?.collections3[0].img} alt={data?.collections3[0].title} />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default LawnSide