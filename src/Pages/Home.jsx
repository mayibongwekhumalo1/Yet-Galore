import React, { useState } from 'react'
import Banner from '../Components/Banner/Banner'
// import NewDrops from '../Components/NewDrops/NewDrops'
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";
import ImageSlider from '../Components/Slides/ImageSlider';


function Home() {


     const slides = [
    {
      url: 'https://res.cloudinary.com/dxrv8lauy/image/upload/v1750774002/IMG_0570_hrnuho.jpg',
      title: 'Slide 1',
      description: 'This is the first slide'
    },
    {
      url: 'https://res.cloudinary.com/dxrv8lauy/image/upload/v1750773949/IMG_0643_yvzumz.jpg',
      title: 'Slide 2',
      description: 'This is the second slide'
    },
    {
      url: 'https://res.cloudinary.com/dxrv8lauy/image/upload/v1750773950/IMG_0642_gv57lz.jpg',
      title: 'Slide 3',
      description: 'This is the third slide'
    },
    {
      url: 'https://res.cloudinary.com/dxrv8lauy/image/upload/v1750773957/IMG_0540_bzjghd.jpg',
      title: 'Slide 4',
      description: 'This is the fourth slide'
    }
    ]    
    
    const containerStyles = {
      width: "100%",
      height: "100%",
      margin : "0 auto",
    
    
    }




      const [name, setname] = useState("");
      const [payment,setPayment]= useState("")


    const handleNameChange =(event)=>{
      setname(event.target.value);
    };

  const handlePaymentChange =(event)=>{

    setPayment(event.target.value);

  };


  return (
    <main>
    
  
   
   <Banner/>
   {/* <NewDrops/> */}

     <section className='container mx-auto px-4 py-8 space-y-6 min-h-90'> 

      <div className="container grid grid-cols-1 md:grid-cols-2  gap-6">

        <div className=" group text-content  h-90 flex flex-col justify-center items-center text-white p-6 bg-gradient-to-br from-blue-950 to-black shadow-lg ">

          <div className='   flex flex-col items-center justify-center text-center space-y-4'>
            <h2 className="text-lg">
            <Link to="/new-collection" className=" group-[ hover:text-blue-700]: flex items-center">
              New Collection  <FaArrowRight className="inline ml-1" />
            </Link>
           

          </h2>
            <p className="text-white">Discover our latest collection of unique designs and styles.</p>
            <Link to="/shop" className="bg-blue-950 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
              Shop Now
            </Link>
           <span className="ml-2 text-white">Explore the latest arrivals</span>
           
          </div>

          
        </div>


        <div className="text-content border-4 border-blue-950 h-90">
          {/* Image Slider Component */}  
          <div style={containerStyles}>

          <ImageSlider slides={slides} />

          </div>
           

        </div>

      </div>


     </section>


   
    
    </main>

  )
}

export default Home