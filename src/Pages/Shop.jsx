import React, { useState } from "react";

import { FiHeart, FiStar, FiFilter } from "react-icons/fi";
import { BsArrowRight } from "react-icons/bs";

const ShopPage = () => {
  
  const [allProducts, setAllProducts] = useState([
    {
      id: 1,
      name: "Classic Denim Jacket",
      price: 89.99,
      image: "https://res.cloudinary.com/dxrv8lauy/image/upload/v1750773957/IMG_0652_d67vfj.jpg",
      rating: 4.7,
      colors: ["blue", "black"],
      category: "outerwear",
      gender: "him",
      isNew: true,
      isFavorite: false,
    },
    {
      id: 2,
      name: "Floral Summer Dress",
      price: 59.99,
      image: "https://res.cloudinary.com/dxrv8lauy/image/upload/v1750773951/IMG_4196_p8x4fy.jpg",
      rating: 4.5,
      colors: ["pink", "blue", "white"],
      category: "dresses",
      gender: "her",
      isNew: true,
      isFavorite: false,
    },
    {
      id: 3,
      name: "Premium Cotton Tee",
      price: 29.99,
      image: "https://res.cloudinary.com/dxrv8lauy/image/upload/v1750773943/IMG_0107_rnm8ob.jpg",
      rating: 4.3,
      colors: ["white", "black", "gray"],
      category: "tops",
      gender: "him",
      isNew: false,
      isFavorite: false,
    },
    {
      id: 4,
      name: "Elegant Blouse",
      price: 39.99,
      image: "https://res.cloudinary.com/dxrv8lauy/image/upload/v1750773949/IMG_0643_yvzumz.jpg",
      rating: 4.3,
      colors: ["white", "beige", "red"],
      category: "tops",
      gender: "her",
      isNew: false,
      isFavorite: false,
    },
    {
      id: 5,
      name: "Baggy Pants",
      price: 49.99,
      image: "https://res.cloudinary.com/dxrv8lauy/image/upload/v1750773947/IMG_0110_bd3bsv.jpg",
      rating: 4.5,
      colors: ["khaki", "navy", "black"],
      category: "bottoms",
      gender: "him",
      isNew: false,
      isFavorite: false,
    },
    {
      id: 6,
      name: "Summer Skirt",
      price: 34.99,
      image: "https://res.cloudinary.com/dxrv8lauy/image/upload/v1750773959/IMG_0112_qyszxp.jpg",
      rating: 4.6,
      colors: ["yellow", "blue", "green"],
      category: "bottoms",
      gender: "her",
      isNew: true,
      isFavorite: false,
    },
    {
      id: 7,
      name: "Tailored Blazer",
      price: 129.99,
      image: "https://res.cloudinary.com/dxrv8lauy/image/upload/v1750773959/IMG_4197_qpkn4e.jpg",
      rating: 4.8,
      colors: ["navy", "charcoal"],
      category: "outerwear",
      gender: "him",
      isNew: false,
      isFavorite: false,
    },
    {
      id: 8,
      name: "Casual Sneakers",
      price: 79.99,
      image: "https://res.cloudinary.com/dxrv8lauy/image/upload/v1750773957/IMG_0652_d67vfj.jpg",
      rating: 4.6,
      colors: ["white", "black"],
      category: "footwear",
      gender: "him",
      isNew: false,
      isFavorite: false,
    },
]);
// Filter states
const [selectedGender, setSelectedGender] = useState("all");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [priceRange, setPriceRange] = useState([0, 200]);
  const [sortOption, setSortOption] = useState("featured");
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  // Toggle favorite status
  const toggleFavorite = (id) => {
    setAllProducts(allProducts.map(product => 
      product.id === id ? {...product, isFavorite: !product.isFavorite} : product
    ));
  };

  // Filter products based on selected filters
  const filteredProducts = allProducts.filter(product => {
    // Gender filter
    if (selectedGender !== "all" && product.gender !== selectedGender) return false;
    
    // Category filter
    if (selectedCategory !== "all" && product.category !== selectedCategory) return false;
    
    // Price range filter
    if (product.price < priceRange[0] || product.price > priceRange[1]) return false;
    
    return true;
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === "price-low") return a.price - b.price;
    if (sortOption === "price-high") return b.price - a.price;
    if (sortOption === "rating") return b.rating - a.rating;
    if (sortOption === "newest") return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0);
    return 0; 
  });


  // Available categories based on selected gender
  const availableCategories = ["all", ...new Set(
    allProducts
      .filter(product => selectedGender === "all" || product.gender === selectedGender)
      .map(product => product.category)
  )];

  return (
    <div className="min-h-screen flex flex-col">
      
      
      {/* Hero Section */}
      <section className="relative h-64 bg-gradient-to-r from-blue-500 to-gray-500 flex items-center justify-center">
        <div className="text-center text-white px-4 z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Shop All</h1>
          <p className="text-xl">Discover our complete collection</p>
        </div>
        <div className="absolute inset-0 bg-black opacity-20"></div>
      </section>

      {/* Main Content */}
      <main className="flex-grow py-12 px-4 md:px-8">
        <div className="container mx-auto">
          {/* Filters and Sorting */}
          <div className="mb-8">
            {/* Mobile filter toggle */}
            <button
              onClick={() => setMobileFiltersOpen(true)}
              className="md:hidden flex items-center space-x-2 bg-gray-900 text-white px-4 py-2 rounded mb-4"
            >
              <FiFilter />
              <span>Filters</span>
            </button>

            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              {/* Gender Filter */}
              <div className="flex space-x-2 overflow-x-auto w-full md:w-auto">
                {["all", "him", "her"].map((gender) => (
                  <button
                    key={gender}
                    onClick={() => setSelectedGender(gender)}
                    className={`px-4 py-2 rounded-full whitespace-nowrap ${
                      selectedGender === gender
                        ? "bg-gray-900 text-white"
                        : "bg-white text-gray-800 hover:bg-gray-200"
                    }`}
                  >
                    {gender === "all" ? "All" : gender === "him" ? "Men" : "Women"}
                  </button>
                ))}
              </div>

              {/* Sort Options */}
              <div className="w-full md:w-auto">
                <select
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                  className="w-full p-2 border rounded"
                >
                  <option value="featured">Featured</option>
                  <option value="newest">Newest</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Top Rated</option>
                </select>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-8">
            {/* Sidebar Filters - Desktop */}
            <aside className="hidden md:block w-64 flex-shrink-0">
              <div className="bg-white p-6 rounded-lg shadow-md sticky top-4">
                <h3 className="font-bold text-lg mb-4">Filters</h3>
                
                {/* Category Filter */}
                <div className="mb-6">
                  <h4 className="font-bold mb-2">Category</h4>
                  <div className="space-y-2">
                    {availableCategories.map((category) => (
                      <div key={category} className="flex items-center">
                        <input
                          type="radio"
                          id={`cat-${category}`}
                          name="category"
                          checked={selectedCategory === category}
                          onChange={() => setSelectedCategory(category)}
                          className="mr-2"
                        />
                        <label htmlFor={`cat-${category}`}>
                          {category === "all" ? "All Categories" : category.charAt(0).toUpperCase() + category.slice(1)}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Price Filter */}
                <div className="mb-6">
                  <h4 className="font-bold mb-2">Price Range</h4>
                  <div className="mb-2">
                    <input
                      type="range"
                      min="0"
                      max="200"
                      step="10"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                      className="w-full"
                    />
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                </div>

                <button
                  onClick={() => {
                    setSelectedGender("all");
                    setSelectedCategory("all");
                    setPriceRange([0, 200]);
                  }}
                  className="text-gray-500 hover:text-gray-700 text-sm"
                >
                  Clear all filters
                </button>
              </div>
            </aside>

            {/* Mobile Filters Overlay */}
            {mobileFiltersOpen && (
              <div className="fixed inset-0 bg-black bg-opacity-50 z-50 md:hidden">
                <div className="absolute right-0 top-0 h-full w-4/5 bg-white p-6 overflow-y-auto">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-bold text-lg">Filters</h3>
                    <button
                      onClick={() => setMobileFiltersOpen(false)}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      ✕
                    </button>
                  </div>

                  {/* Category Filter */}
                  <div className="mb-6">
                    <h4 className="font-bold mb-2">Category</h4>
                    <div className="space-y-2">
                      {availableCategories.map((category) => (
                        <div key={category} className="flex items-center">
                          <input
                            type="radio"
                            id={`mob-cat-${category}`}
                            name="mob-category"
                            checked={selectedCategory === category}
                            onChange={() => setSelectedCategory(category)}
                            className="mr-2"
                          />
                          <label htmlFor={`mob-cat-${category}`}>
                            {category === "all" ? "All Categories" : category.charAt(0).toUpperCase() + category.slice(1)}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Price Filter */}
                  <div className="mb-6">
                    <h4 className="font-bold mb-2">Price Range</h4>
                    <div className="mb-2">
                      <input
                        type="range"
                        min="0"
                        max="200"
                        step="10"
                        value={priceRange[1]}
                        onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                        className="w-full"
                      />
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>${priceRange[0]}</span>
                      <span>${priceRange[1]}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setSelectedGender("all");
                      setSelectedCategory("all");
                      setPriceRange([0, 200]);
                    }}
                    className="text-gray-500 hover:text-gray-700 text-sm mb-4"
                  >
                    Clear all filters
                  </button>

                  <button
                    onClick={() => setMobileFiltersOpen(false)}
                    className="w-full bg-gray-900 text-white py-2 rounded hover:bg-gray-700"
                  >
                    Apply Filters
                  </button>
                </div>
              </div>
            )}

            {/* Products Grid */}
            <div className="flex-grow">
              {sortedProducts.length === 0 ? (
                <div className="text-center py-12">
                  <h2 className="text-2xl font-bold mb-4">No products found</h2>
                  <p className="mb-6 text-gray-600">
                    Try adjusting your filters to find what you're looking for
                  </p>
                  <button
                    onClick={() => {
                      setSelectedGender("all");
                      setSelectedCategory("all");
                      setPriceRange([0, 200]);
                    }}
                    className="bg-gray-900 text-white px-6 py-3 rounded hover:bg-gray-700 transition"
                  >
                    Reset Filters
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
              )}
            </div>
          </div>
        </div>
      </main>

     
    </div>
  );
};

export default ShopPage;