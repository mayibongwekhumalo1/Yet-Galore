import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Banner from '../Components/Banner/Banner'
import NewDrops from '../Components/NewDrops/NewDrops'
import YetVoice from '../Components/YetVoice/YetVoice'
import { Link } from 'react-router-dom';
import Swipper from '../Components/Slides/Swipper'


function Home() {
  return (
    <main>
    
  
   
   <Banner/>
   <NewDrops/>
    <YetVoice/>
    <Swipper/>
    
    </main>

  )
}

export default Home