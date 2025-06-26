import React from 'react'
import "./banner.css"
import { motion } from "framer-motion"
import { FaArrowRight } from "react-icons/fa"
import { Link } from "react-router-dom"


function Banner() {

const box = {
  width: "100px",
  height: "100px",
  backgroundColor: "#4A90E2",
  margin: "0 auto",
};


const handleClick = () => {
  
  window.location.href = "/shop"; 
}



  return (
    <section className='banner  flex items-center flex-col justify-center align-middle px-10 h-screen bg-cover bg-center '>

      < div className="banner-overlay absolute inset-0 bg-black opacity-50 flex justify-between align-middle z-10">

        <div className="banner-content flex flex-col space-y-1.5 z-10 text-center w-full h-full  items-start justify-center px-10 ">
            <h1 className='text-lg md:text-5xl font-bold text-white'>Welcome to our Yet Galore</h1>
            <p className='text-sm md:text-lg text-gray-300 mt-4'>Discover the latest trends and exclusive offers</p>
          
     <button className=" btn cursor-pointer w-40 md:w-60 px-6 py-1.5 md:py-3  bg-blue-950  font-bold text-white  transition-all duration-500 hover:bg-gradient-to-r hover:from-gray-950 hover:to-blue-9500 hover:shadow-2xl shadow-blue-500  z-10 rounded-2xl hover:scale-105"
     
     onClick={ handleClick}

     >
                
                
                shop now

                <FaArrowRight className='inline-block ml-2' />
                
                
    </button>
        </div>
          <div className='animation z-20  absolute top-4 right-2 transform -translate-x-2/3 -translate-y-4/5'>
        <motion.div
            animate={{
                scale: [1, 2, 2, 1, 1],
                rotate: [0, 0, 180, 180, 0],
                borderRadius: ["0%", "0%", "50%", "50%", "0%"],
            }}
            transition={{
                duration: 2,
                ease: "easeInOut",
                times: [0, 0.2, 0.5, 0.8, 1],
                repeat: Infinity,
                repeatDelay: 1,
            }}

            style={box}
            className="banner-box align-middle justify-center flex items-center rounded-lg shadow-lg z-10  hover:shadow-2xl transition-all duration-500 "
            
        >
         

        </motion.div>
</div>
            </div>

    </section>
  )
}

export default Banner