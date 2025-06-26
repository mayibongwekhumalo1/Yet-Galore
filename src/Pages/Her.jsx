import React from "react";
import { useState } from "react";
// import Navbar from "../components/Navbar"; // Assuming your navbar is in components folder
// import Footer from "../components/Footer"; // You'll need to create this
import { FiHeart, FiStar } from "react-icons/fi";
import { BsArrowRight } from "react-icons/bs";

const HerPage = () => {
  // Sample product data
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Floral Summer Dress",
      price: 59.99,
      image: "https://res.cloudinary.com/dxrv8lauy/image/upload/v1750773960/IMG_4199_tqis0g.jpg",
      rating: 4.5,
      colors: ["pink", "blue", "white"],
      isNew: true,
      isFavorite: false,
    },
    {
      id: 2,
      name: "Denim Jacket",
      price: 79.99,
      image: "https://res.cloudinary.com/dxrv8lauy/image/upload/v1750773960/IMG_4199_tqis0g.jpg",
      rating: 4.2,
      colors: ["blue", "black"],
      isNew: false,
      isFavorite: false,
    },
    {
      id: 3,
      name: "High-Waist Jeans",
      price: 49.99,
      image: "https://res.cloudinary.com/dxrv8lauy/image/upload/v1750773945/IMG_0631_yhveky.jpg",
      rating: 4.7,
      colors: ["blue", "black", "white"],
      isNew: true,
      isFavorite: false,
    },
    {
      id: 4,
      name: "Elegant Blouse",
      price: 39.99,
      image: "https://res.cloudinary.com/dxrv8lauy/image/upload/v1750773939/IMG_0607_tybuos.jpg",
      rating: 4.3,
      colors: ["white", "beige", "red"],
      isNew: false,
      isFavorite: false,
    },
    {
      id: 5,
      name: "Casual T-Shirt",
      price: 24.99,
      image: "https://res.cloudinary.com/dxrv8lauy/image/upload/v1750773939/IMG_0607_tybuos.jpg",
      rating: 4.0,
      colors: ["black", "white", "gray"],
      isNew: false,
      isFavorite: false,
    },
    {
      id: 6,
      name: "Summer Skirt",
      price: 34.99,
      image: "https://res.cloudinary.com/dxrv8lauy/image/upload/v1750773950/IMG_0642_gv57lz.jpg",
      rating: 4.6,
      colors: ["yellow", "blue", "green"],
      isNew: true,
      isFavorite: false,
    },
  ]);

  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortOption, setSortOption] = useState("featured");

  const toggleFavorite = (id) => {
    setProducts(products.map(product => 
      product.id === id ? {...product, isFavorite: !product.isFavorite} : product
    ));
  };

  const filteredProducts = products.filter(product => {
    if (selectedCategory === "all") return true;
    if (selectedCategory === "new") return product.isNew;
    return true;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === "price-low") return a.price - b.price;
    if (sortOption === "price-high") return b.price - a.price;
    if (sortOption === "rating") return b.rating - a.rating;
    return 0; 
  });

  return (
    <div className="min-h-screen flex flex-col">
      {/* <Navbar /> */}
      
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-blue-500 to-gray-500 flex items-center justify-center">
        <div className="text-center text-white px-4 z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Her Collection</h1>
          <p className="text-xl mb-8">Discover the latest trends for women</p>
          <button className="bg-white text-blue-600 px-6 py-2 rounded-full font-bold hover:bg-purple-100 transition">
            Shop Now
          </button>
        </div>
        <div className="absolute inset-0 bg-black opacity-20"></div>
      </section>

      {/* Categories and Sorting */}
      <section className="py-8 px-4 md:px-8 bg-gray-50">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="flex space-x-2 mb-4 md:mb-0 overflow-x-auto pb-2 w-full md:w-auto">
              {["all", "new", "dresses", "tops", "bottoms", "outerwear"].map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full whitespace-nowrap ${
                    selectedCategory === category
                      ? "bg-gray-900 text-white"
                      : "bg-white text-gray-800 hover:bg-gray-200"
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
            <div className="w-full md:w-auto">
              <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                className="w-full p-2 border rounded"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 px-4 md:px-8 flex-grow">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover"
                  />
                  {product.isNew && (
                    <div className="absolute top-2 left-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
                      New
                    </div>
                  )}
                  <button
                    onClick={() => toggleFavorite(product.id)}
                    className={`absolute top-2 right-2 p-2 rounded-full ${
                      product.isFavorite ? "text-red-500" : "text-gray-400"
                    } hover:text-red-500 bg-white bg-opacity-80`}
                  >
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
                        style={{ backgroundColor: color }}
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

      {/* Newsletter */}
      <section className="bg-gray-100 py-12 px-4 md:px-8">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-2xl font-bold mb-4">Join Our Newsletter</h2>
          <p className="mb-6 text-gray-600">
            Subscribe to get updates on new arrivals, special offers and other
            discount information.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-4 py-2 rounded border focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button className="bg-gray-900 text-white px-6 py-2 rounded hover:bg-gray-700 transition">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* <Footer /> */}
    </div>
  );
};

export default HerPage;