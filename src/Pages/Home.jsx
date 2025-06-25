import React from 'react'
import Banner from '../Components/Banner/Banner'
import NewDrops from '../Components/NewDrops/NewDrops'
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa";



function Home() {

// 



  return (
    <main>
    
  
   
   <Banner/>
   <NewDrops/>
   

      {/* new collection */}

      {/* <section className="new-collection bg-gray-100 p-0 mb-3.5 md:p-16 ">

        <div className="container min-h-100 grid grid-cols-1 space-y-2.5 px-3 text-sm md:grid-cols-2 md:text-lg   border-2  border-amber-300 ">
          <div className="image-container space-y-2.5">
            <div className="new-collection-image w-full h-56 md:h-96 overflow-hidden rounded-lg shadow-lg">
            <img src="https://collection.cloudinary.com/dxrv8lauy/43033b4a1afec454c197a292e9b820c3" alt="New Collection" />

              </div>

              <p>
              Explore our new collection of fashion-forward pieces that redefine style and comfort. From chic dresses to trendy accessories, find your perfect look for any occasion. </p>
              
           

          </div>

           <div className="new-collection-text mt-2 space-y-2.5">

             <div className="collection-text space-y-2.5">
               <h2>New Collection</h2>
              <p>Discover the latest trends and styles in our new collection. Shop now and elevate your wardrobe with our exclusive pieces.</p>
              <Link to="/shop" className="btn p-1.5 rounded-xl bg-blue-950 text-white flex align-middle w-30 md:w-50 justify-center gap-2">Shop Now <FaArrowRight className=' flex mt-1' /> </Link>

             </div>

             <div className="text-image w-full h-56 md:h-96 overflow-hidden rounded-lg shadow-lg">
              <img src="https://collection.cloudinary.com/dxrv8lauy/43033b4a1afec454c197a292e9b820c3" alt="New Collection" />
             </div>

              </div>

          </div>
      </section> */}
    
    </main>

  )
}

export default Home