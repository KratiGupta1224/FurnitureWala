import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import Register from '../../Components/Authentication/Register'
import Login from '../../Components/Authentication/Login'
import FurnitureOffers from '../../Components/FurnitureOffers/furnitureoffers'
import TrendingProducts from '../../Components/TrendingProducts/trendingproduct'
import Newcollection from '../../Components/NewCollection/Newcollection'
import WhyFurnitureWala from '../../Components/Whyfurniturewala/Whyfurniturewala'
import Realdesigncomponents from '../../Components/RealdesignComponents/Realdesigncomponents'

const Home = () => {
  return (
    <>
    <Navbar/>
    <FurnitureOffers/>
    <TrendingProducts/>
    {/* <Realdesigncomponents/> */}
    <WhyFurnitureWala/>
    <Newcollection/>
    <Footer/>
    </>
    
  )
}

export default Home
