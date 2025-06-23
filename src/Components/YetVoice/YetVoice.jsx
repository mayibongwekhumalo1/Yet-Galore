import React, { useState } from 'react';

function YetVoice() {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const cards = [
    {
      id: 1,
      title: "Yet Design 1",
      description: "A modern take on classic designs.",
      image: "/src/assets/newdrops/newdrops1.jpg"
    },
    {
      id: 2,
      title: "Yet Design 2",
      description: "A modern take on classic designs.",
      image: "/src/assets/newdrops/newdrops2.jpg"
    },
    {
      id: 3,
      title: "Yet Design 3",
      description: "A modern take on classic designs.",
      image: "/src/assets/newdrops/newdrops3.jpg"
    },
    {
      id: 4,
      title: "Yet Design 4",
      description: "A modern take on classic designs.",
      image: "/src/assets/newdrops/newdrops5.jpg"
    }
  ];

  return (
    <section className='min-h-200 py-20 px-4 md:px-20 bg-gray-100'>
      <div className="text-center flex text-black flex-col">
        <h1 className='text-2xl font-bold'>Yet Voice</h1>
        <p className='text-lg text-gray-600 mt-2'>Explore the latest modern Yet Designs. Discover new jackets, caps, and tots.</p>
      </div>
      
      <div className="container  ">
      
        <div className="hidden md:grid  gap-4 p-4  mt-8 grid-rows-2 grid-flow-col-dense  ">
          {cards.map((card) => (
            <div key={card.id} className=" flex-1 my-4   md:nth-[2]:col-span-2 md:nth-[3]:col-span-2 h-85 relative :hover:scale-200 transition-transform duration-300 ease-in-out cursor-pointer  overflow-hidden"> 
              <img src={card.image} alt={card.title} className='w-full h-85 object-cover object-center ' />
              <div className="absolute top-0 left-0 w-full h-full  flex flex-col justify-center items-center p-4 ">
              <h2 className='text-lg font-semibold mt-2 text-white  '>{card.title}</h2>
              <p className='text-white '>{card.description}</p>
              </div>
            </div>
          ))}
        </div>

        
        <div className="md:hidden  flex flex-col gap-4 p-4 rounded-lg mt-8">
          <div className=" bg-amber-50 shadow  pb-4 ">
            <div className="img-div h-48 overflow-hidden ">
            <img src={cards[0].image} alt={cards[0].title} className='w-full h-full object-cover object-center' />
            </div>
            <h2 className='text-lg font-semibold mt-2 mx-1.5 text-blue-950'>{cards[0].title}</h2>
            <p className='text-gray-900 mx-1.5'>{cards[0].description}</p>

             <button 
            onClick={toggleModal}
            className="bg-blue-950 hover:bg-blue-700 text-white font-bold py-2 w-35 px-4 mx-1.5 mt-2.5 rounded-lg"
          >
            View More
          </button>
          </div>
          
         
        </div>
      </div>

     
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4 z-50">
          <div className=" rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-white">All Designs</h2>
              <button 
                onClick={toggleModal}
                className="text-black hover:text-white"
              >
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="grid grid-cols-1 gap-4">
              {cards.map((card) => (
                <div key={card.id} className="bg-gray-200 p-4 rounded-lg hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer">
                  <img src={card.image} alt={card.title} className='w-full h-48 object-cover rounded-lg' />
                  <h2 className='text-lg font-semibold mt-2 text-white'>{card.title}</h2>
                  <p className='text-gray-400'>{card.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default YetVoice;