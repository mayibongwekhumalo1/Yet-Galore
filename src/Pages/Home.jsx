import Banner from '../Components/Banner/Banner'
import { Link } from 'react-router-dom';
import { FaArrowRight, FaStar } from "react-icons/fa";
import { IoShirtOutline } from "react-icons/io5";
import { GiRunningShoe } from "react-icons/gi";
import { BsHandbag } from "react-icons/bs";
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
    margin: "0 auto",
  }

  // Featured products data
  const featuredProducts = [
    {
      id: 1,
      name: "Premium Denim Jacket",
      price: 89.99,
      rating: 4.8,
      image: "https://example.com/denim-jacket.jpg",
      category: "Jackets"
    },
    {
      id: 2,
      name: "Classic White Tee",
      price: 24.99,
      rating: 4.5,
      image: "https://example.com/white-tee.jpg",
      category: "T-Shirts"
    },
    {
      id: 3,
      name: "Slim Fit Chinos",
      price: 49.99,
      rating: 4.7,
      image: "https://example.com/chinos.jpg",
      category: "Pants"
    },
    {
      id: 4,
      name: "Canvas Sneakers",
      price: 59.99,
      rating: 4.9,
      image: "https://example.com/sneakers.jpg",
      category: "Footwear"
    }
  ]

  // Categories data
  const categories = [
    {
      name: "T-Shirts",
      icon: <IoShirtOutline className="text-4xl" />,
      count: 42,
      link: "/shop/t-shirts"
    },
    {
      name: "Footwear",
      icon: <GiRunningShoe className="text-4xl" />,
      count: 36,
      link: "/shop/footwear"
    },
    {
      name: "Accessories",
      icon: <BsHandbag className="text-4xl" />,
      count: 28,
      link: "/shop/accessories"
    },
    {
      name: "Outerwear",
      icon: <IoShirtOutline className="text-4xl" />,
      count: 19,
      link: "/shop/outerwear"
    }
  ]

  return (
    <main>
      <Banner/>
      
      {/* Hero Collection Section */}
      <section className='container mx-auto px-4 py-8 space-y-6 min-h-90'> 
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="group text-content h-90 flex flex-col justify-center items-center text-white p-6 bg-gradient-to-br from-blue-950 to-black shadow-lg">
            <div className='flex flex-col items-center justify-center text-center space-y-4'>
              <h2 className="text-2xl font-bold">
                <Link to="/new-collection" className="group-hover:text-blue-300 flex items-center">
                  New Collection <FaArrowRight className="inline ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
              </h2>
              <p className="text-white">Discover our latest collection of unique designs and styles.</p>
              <Link to="/shop" className="bg-white text-blue-950 px-6 py-3 rounded-full hover:bg-blue-300 transition-colors font-medium">
                Shop Now
              </Link>
            </div>
          </div>

          <div className="text-content border-4 border-blue-950 h-90">
            <div style={containerStyles}>
              <ImageSlider slides={slides} />
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Link 
                to={category.link} 
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow text-center"
              >
                <div className="flex justify-center text-blue-950 mb-3">
                  {category.icon}
                </div>
                <h3 className="font-semibold text-lg">{category.name}</h3>
                <p className="text-gray-500">{category.count} items</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-12 container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold">Featured Products</h2>
          <Link to="/shop" className="text-blue-950 hover:underline flex items-center">
            View All <FaArrowRight className="ml-2" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-gray-200 h-64 flex items-center justify-center">
                <img src={product.image} alt={product.name} className="object-cover h-full w-full" />
              </div>
              <div className="p-4">
                <span className="text-sm text-gray-500">{product.category}</span>
                <h3 className="font-semibold text-lg my-1">{product.name}</h3>
                <div className="flex items-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <FaStar 
                      key={i} 
                      className={i < Math.floor(product.rating) ? "text-yellow-400" : "text-gray-300"} 
                    />
                  ))}
                  <span className="text-sm text-gray-500 ml-1">({product.rating})</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-bold text-lg">${product.price}</span>
                  <button className="bg-blue-950 text-white px-3 py-1 rounded hover:bg-blue-700 transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-blue-950 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="max-w-2xl mx-auto mb-6">Subscribe to our newsletter for the latest updates, exclusive offers, and style tips.</p>
          <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-2">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow px-4 py-3 rounded text-white border-3 border-white"
            />
            <button className="bg-white text-blue-950 px-6 py-3 rounded font-medium hover:bg-blue-100 transition-colors cursor-pointer">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => <FaStar key={i} className="text-yellow-400" />)}
              </div>
              <p className="text-gray-700 mb-4">"The quality of the clothes is exceptional. I've never been disappointed with my purchases!"</p>
              <div className="font-semibold">- Sarah J.</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => <FaStar key={i} className="text-yellow-400" />)}
              </div>
              <p className="text-gray-700 mb-4">"Fast shipping and great customer service. The denim jacket I bought fits perfectly."</p>
              <div className="font-semibold">- Michael T.</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => <FaStar key={i} className="text-yellow-400" />)}
              </div>
              <p className="text-gray-700 mb-4">"Love the unique designs! I always get compliments when I wear their pieces."</p>
              <div className="font-semibold">- Emily R.</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home