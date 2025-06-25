import React from "react";
import { useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import { FiHeart, FiStar } from "react-icons/fi";
import { BsArrowRight } from "react-icons/bs";

const HimPage = () => {
  // Sample product data for men's collection
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Classic Denim Jacket",
      price: 89.99,
      image: "/images/him-jacket1.jpg",
      rating: 4.7,
      colors: ["blue", "black"],
      sizes: ["S", "M", "L", "XL"],
      isNew: true,
      isFavorite: false,
    },
    {
      id: 2,
      name: "Slim Fit Chinos",
      price: 49.99,
      image: "/images/him-pants1.jpg",
      rating: 4.5,
      colors: ["khaki", "navy", "black"],
      sizes: ["30", "32", "34", "36"],
      isNew: false,
      isFavorite: false,
    },
    {
      id: 3,
      name: "Premium Cotton Tee",
      price: 29.99,
      image: "/images/him-tshirt1.jpg",
      rating: 4.3,
      colors: ["white", "black", "gray"],
      sizes: ["S", "M", "L", "XL"],
      isNew: true,
      isFavorite: false,
    },
    {
      id: 4,
      name: "Tailored Blazer",
      price: 129.99,
      image: "/images/him-blazer1.jpg",
      rating: 4.8,
      colors: ["navy", "charcoal"],
      sizes: ["38", "40", "42", "44"],
      isNew: false,
      isFavorite: false,
    },
    {
      id: 5,
      name: "Casual Sneakers",
      price: 79.99,
      image: "/images/him-shoes1.jpg",
      rating: 4.6,
      colors: ["white", "black"],
      sizes: ["8", "9", "10", "11"],
      isNew: false,
      isFavorite: false,
    },
    {
      id: 6,
      name: "Athletic Shorts",
      price: 34.99,
      image: "/images/him-shorts1.jpg",
      rating: 4.2,
      colors: ["black", "blue", "gray"],
      sizes: ["S", "M", "L", "XL"],
      isNew: true,
      isFavorite: false,
    },
  ]);

  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortOption, setSortOption] = useState("featured");
  const [quickViewProduct, setQuickViewProduct] = useState(null);

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
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-blue-400 to-blue-950 flex items-center justify-center">
        <div className="text-center text-white px-4 z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Him Collection</h1>
          <p className="text-xl mb-8">Elevate your style with premium menswear</p>
          <button className="bg-white text-blue-600 px-6 py-2 rounded-full font-bold hover:bg-blue-100 transition">
            Shop New Arrivals
          </button>
        </div>
        <div className="absolute inset-0 bg-black opacity-20"></div>
      </section>

      {/* Categories and Sorting */}
      <section className="py-8 px-4 md:px-8 bg-gray-50">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="flex space-x-2 mb-4 md:mb-0 overflow-x-auto pb-2 w-full md:w-auto">
              {["all", "new", "tops", "bottoms", "outerwear", "footwear"].map((category) => (
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
                  <div className="flex justify-between mb-4">
                    <div className="flex space-x-2">
                      {product.colors.map((color) => (
                        <div
                          key={color}
                          className="w-4 h-4 rounded-full"
                          style={{ backgroundColor: color }}
                          title={color}
                        ></div>
                      ))}
                    </div>
                    <div className="text-sm text-gray-500">
                      Sizes: {product.sizes.join(", ")}
                    </div>
                  </div>
                  <button 
                    className="w-full bg-gray-900 text-white py-2 rounded hover:bg-gray-700 transition flex items-center justify-center"
                    onClick={() => setQuickViewProduct(product)}
                  >
                    Quick View <BsArrowRight className="ml-2" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Collection */}
      <section className="bg-gray-100 py-16 px-4 md:px-8">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">Featured Collection</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
              <img
                src="/public/newdrops2.jpg"
                alt="Summer Essentials"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center cursor-pointer hover:bg-transparent ">
                <div className="text-center text-white p-4">
                  <h3 className="text-2xl font-bold mb-2">Summer Essentials</h3>
                  <button className="bg-white text-gray-900 px-6 py-2 rounded font-bold hover:bg-gray-100 transition">
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
            <div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
              <img
                src="/public/newdrops1.jpg"
                alt="Formal Attire"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center cursor-pointer hover:bg-transparent ">
                <div className="text-center text-white p-4">
                  <h3 className="text-2xl font-bold mb-2">Formal Attire</h3>
                  <button className="bg-white text-gray-900 px-6 py-2 rounded font-bold hover:bg-gray-100 transition">
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick View Modal */}
      {quickViewProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative">
              <button 
                onClick={() => setQuickViewProduct(null)}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
                <div className="relative">
                  <img
                    src={quickViewProduct.image}
                    alt={quickViewProduct.name}
                    className="w-full h-auto rounded-lg"
                  />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-2">{quickViewProduct.name}</h2>
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <FiStar
                        key={i}
                        className={`${
                          i < Math.floor(quickViewProduct.rating)
                            ? "text-yellow-400 fill-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                    <span className="text-sm text-gray-500 ml-1">({quickViewProduct.rating})</span>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Premium quality men's fashion item designed for comfort and style. 
                    Perfect for various occasions from casual outings to formal events.
                  </p>
                  <div className="mb-4">
                    <h3 className="font-bold mb-2">Colors:</h3>
                    <div className="flex space-x-2">
                      {quickViewProduct.colors.map((color) => (
                        <div
                          key={color}
                          className="w-6 h-6 rounded-full border border-gray-300"
                          style={{ backgroundColor: color }}
                          title={color}
                        ></div>
                      ))}
                    </div>
                  </div>
                  <div className="mb-6">
                    <h3 className="font-bold mb-2">Sizes:</h3>
                    <div className="flex flex-wrap gap-2">
                      {quickViewProduct.sizes.map((size) => (
                        <button
                          key={size}
                          className="px-3 py-1 border rounded hover:bg-gray-100"
                        >
                          {size}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl font-bold">${quickViewProduct.price.toFixed(2)}</span>
                    <button className="bg-gray-900 text-white px-6 py-2 rounded hover:bg-gray-700 transition">
                      Add to Bag
                    </button>
                  </div>
                  <div className="flex items-center space-x-4">
                    <button 
                      onClick={() => toggleFavorite(quickViewProduct.id)}
                      className={`flex items-center ${
                        quickViewProduct.isFavorite ? "text-red-500" : "text-gray-500"
                      } hover:text-red-500`}
                    >
                      <FiHeart className="mr-1" />
                      {quickViewProduct.isFavorite ? "Saved" : "Save"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      
    </div>
  );
};

export default HimPage;