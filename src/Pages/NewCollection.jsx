import React, { useState } from "react";
import { FiHeart, FiStar } from "react-icons/fi";
import { BsArrowRight } from "react-icons/bs";

const NewCollection = () => {
  const [products] = useState([
    {
      id: 1,
      name: "Oversized Blazer",
      price: 129.99,
      image: "/images/new-blazer1.jpg",
      rating: 4.7,
      colors: ["black", "plaid"],
      category: "outerwear",
    },
    {
      id: 2,
      name: "Leather Tote Bag",
      price: 159.99,
      image: "/images/new-bag1.jpg",
      rating: 4.9,
      colors: ["brown", "black"],
      category: "accessories",
    },
    {
      id: 3,
      name: "Silk Slip Dress",
      price: 89.99,
      image: "/images/new-dress1.jpg",
      rating: 4.8,
      colors: ["champagne", "black"],
      category: "dresses",
    },
    {
      id: 4,
      name: "Platform Boots",
      price: 149.99,
      image: "/images/new-boots1.jpg",
      rating: 4.6,
      colors: ["black", "brown"],
      category: "footwear",
    },
    {
      id: 5,
      name: "Cropped Cardigan",
      price: 69.99,
      image: "/images/new-cardigan1.jpg",
      rating: 4.5,
      colors: ["pink", "lavender", "cream"],
      category: "tops",
    },
    {
      id: 6,
      name: "Wide Leg Trousers",
      price: 79.99,
      image: "/images/new-pants1.jpg",
      rating: 4.4,
      colors: ["black", "white", "gray"],
      category: "bottoms",
    },
  ]);

  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredProducts = selectedCategory === "all" 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div className="min-h-screen flex flex-col">
     
      
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-blue-950 to-gray-500 flex items-center justify-center">
        <div className="text-center text-white px-4 z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">New Collection</h1>
          <p className="text-xl mb-8">Discover our latest arrivals</p>
          <button className="bg-white text-purple-600 px-6 py-2 rounded-full font-bold hover:bg-purple-100 transition">
            Shop Now
          </button>
        </div>
        <div className="absolute inset-0 bg-black opacity-20"></div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 md:px-8 bg-gray-50">
        <div className="container mx-auto">
          <div className="flex space-x-2 overflow-x-auto pb-2">
            {["all", "outerwear", "dresses", "tops", "bottoms", "footwear", "accessories"].map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full whitespace-nowrap ${
                  selectedCategory === category
                    ? "bg-gray-900 text-white"
                    : "bg-white text-gray-800 hover:bg-gray-200"
                }`}
              >
                {category === "all" ? "All" : category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 px-4 md:px-8 flex-grow">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                    New
                  </div>
                  <button className="absolute top-2 right-2 p-2 rounded-full text-gray-400 hover:text-red-500 bg-white bg-opacity-80">
                    <FiHeart className="text-xl" />
                  </button>
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-bold text-lg">{product.name}</h3>
                    <span className="font-bold text-gray-900">${product.price.toFixed(2)}</span>
                  </div>
                  <div className="flex items-center mb-3">
                    {[...Array(5)].map((_, i) => (
                      <FiStar
                        key={i}
                        className={`${
                          i < Math.floor(product.rating)
                            ? "text-yellow-400 fill-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                    <span className="text-sm text-gray-500 ml-1">({product.rating})</span>
                  </div>
                  <div className="flex space-x-2 mb-4">
                    {product.colors.map((color) => (
                      <div
                        key={color}
                        className="w-4 h-4 rounded-full"
                        style={{ 
                          backgroundColor: 
                            color === "champagne" ? "#F7E7CE" :
                            color === "lavender" ? "#E6E6FA" : color,
                          border: color === "cream" ? "1px solid #e5e7eb" : "none",
                          backgroundImage: color === "plaid" ? 
                            "linear-gradient(45deg, #800020 25%, #000000 25%, #000000 50%, #800020 50%, #800020 75%, #000000 75%, #000000 100%)" : "none",
                          backgroundSize: color === "plaid" ? "8px 8px" : "auto"
                        }}
                        title={color}
                      ></div>
                    ))}
                  </div>
                  <button className="w-full bg-gray-900 text-white py-2 rounded hover:bg-gray-700 transition flex items-center justify-center">
                    Add to Bag <BsArrowRight className="ml-2" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* New Arrivals Banner */}
      <section className="bg-black text-white py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Just Dropped</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Our newest arrivals are updated weekly. Check back often for fresh styles.
          </p>
          {/* link to home */}

            <Link to ="/" className>
            See our New drops
            </Link>

        </div>
      </section>

      
    </div>
  );
};

export default NewCollection;