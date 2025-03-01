import { useState } from 'react'
import Hero from './Component/Hero/Hero'
import Services from './Component/Services/Services'
import Banner from './Component/Banner/Banner'
import Subcribe from './Component/Subcribe/Subcribe'
import BannerComunity from './Component/Banner/BannerComunity'
import Footer from './Component/Footer/Footer'
// import './App.css'

function App() {

  return (
    <>
      <main className='overflow-x-hidden bg-white text-dark'>
        <Hero/>
        <Services/>
        <Banner/>
        <Subcribe/>
        <BannerComunity/>
        <Footer/>
      </main>
    </>
  )
}

export default App
