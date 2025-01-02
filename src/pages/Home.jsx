import React from 'react'
import Header from '../context/header'
import Steps from '../Components/Steps'
import Description from '../Components/Description'
import Testimonials from '../Components/Testimonials'
import GenerateButton from '../Components/GenerateButton'
import Footer from '../Components/Footer'
const Home = () => {
  return (
    <div>
    <Header/>
    <Steps/>
    <Description/>
    <Testimonials/>
 <GenerateButton/>
    </div>
  )
}

export default Home
