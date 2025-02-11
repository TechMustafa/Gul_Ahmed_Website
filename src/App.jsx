import React, { useEffect, useState } from 'react'
import './App.css'
import HomeSlider from './component/HomeSlider';
import LawnSide from './component/LawnSide';
import CollectionSide from './component/CollectionSide';
import HomeIdea from './component/HomeIdea';
import Accessories from './component/Accessories';
import NewCollection from './component/NewCollection';
import Feature from './component/Feature';
import Footer from './component/Footer';
import Navbar from './component/Navbar';
import axios from 'axios';

function App() {
  const [homeData, setHomeData] = useState(null);

  useEffect(() => {
    const fetchHomeData = async () => {
      try {
        const response = await axios.get("https://node-practice-ten.vercel.app/auth/home");
        setHomeData(response.data.data);  // Store API response in state
        console.log("first", response.data.data);  // Store API response in state
      } catch (err) {
        console.log(err.message);
      }
    };

    fetchHomeData();
  }, []);



  return (
    <>
      {homeData &&
        <>
          <Navbar />
          <HomeSlider data={homeData?.banners} mobileBanners={homeData?.mobileBanners} />
          <LawnSide data={homeData?.lawnData} />
          <CollectionSide data={homeData?.collectionData} />
          <HomeIdea data={homeData?.homeIdea} />
          <Accessories data={homeData?.accessorieData} />
          <NewCollection data={homeData?.newCollection} />
          <Feature data={homeData?.support} />
          <Footer />
        </>
      }
    </>
  )
}

export default App
