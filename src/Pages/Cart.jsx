import React, { useState } from "react";

import { RiDeleteBin6Line } from "react-icons/ri";
import { FiMinus, FiPlus } from "react-icons/fi";
import { Link } from "react-router-dom";

const CartPage = () => {
  // Sample cart data
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Classic Denim Jacket",
      price: 89.99,
      image: "/images/him-jacket1.jpg",
      size: "M",
      color: "blue",
      quantity: 1,
    },
    {
      id: 2,
      name: "Floral Summer Dress",
      price: 59.99,
      image: "/images/her-dress1.jpg",
      size: "S",
      color: "pink",
      quantity: 2,
    },
    {
      id: 3,
      price: 29.99,
      name: "Premium Cotton Tee",
      image: "/images/him-tshirt1.jpg",
      size: "L",
      color: "black",
      quantity: 1,
    },
  ]);

  // Calculate totals
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = subtotal > 100 ? 0 : 9.99;
  const tax = subtotal * 0.1; 
  const total = subtotal + shipping + tax;

  // Update quantity
  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Remove item
  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };


  return (
    <div className="min-h-screen flex flex-col bg-blue-900 text-white ">
   

      {/* Main Content */}
      <main className="flex-grow py-12 px-4 md:px-8 text-blue-950">
        <div className="container mx-auto mt-6">
          <h1 className="text-3xl font-bold mb-8 text-white">Your Shopping Cart</h1>

          {cartItems.length === 0 ? (
            <div className="text-center py-12">
              <h2 className="text-2xl font-bold mb-4 text-white">Your cart is empty</h2>
              <p className="mb-6 text-gray-100">
                Looks like you haven't added anything to your cart yet
              </p>
              <Link
                to="/shop"
                className="bg-gray-900 text-white px-6 py-3 rounded hover:bg-gray-700 transition inline-block"
              >
                Continue Shopping
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  {/* Cart Header */}
                  <div className="hidden md:grid grid-cols-12 bg-gray-100 p-4 font-bold text-gray-700">
                    <div className="col-span-5">Product</div>
                    <div className="col-span-2">Price</div>
                    <div className="col-span-3">Quantity</div>
                    <div className="col-span-2">Total</div>
                  </div>

                  {/* Cart Items List */}
                  <ul className="divide-y divide-gray-200">
                    {cartItems.map((item) => (
                      <li key={item.id} className="p-4">
                        <div className="flex flex-col md:grid md:grid-cols-12 gap-4 items-center">
                          {/* Product Info */}
                          <div className="md:col-span-5 flex items-center space-x-4">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="w-20 h-20 object-cover rounded"
                            />
                            <div>
                              <h3 className="font-bold">{item.name}</h3>
                              <p className="text-sm text-gray-500">
                                Size: {item.size} | Color:{" "}
                                <span
                                  className="inline-block w-3 h-3 rounded-full mr-1"
                                  style={{ backgroundColor: item.color }}
                                ></span>
                                {item.color}
                              </p>
                            </div>
                          </div>

                          {/* Price */}
                          <div className="md:col-span-2 font-bold">
                            ${item.price.toFixed(2)}
                          </div>

                          {/* Quantity */}
                          <div className="md:col-span-3 flex items-center space-x-2">
                            <button
                              onClick={() =>
                                updateQuantity(item.id, item.quantity - 1)
                              }
                              className="p-1 border rounded hover:bg-gray-100"
                            >
                              <FiMinus />
                            </button>
                            <span className="px-3 py-1 border rounded">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() =>
                                updateQuantity(item.id, item.quantity + 1)
                              }
                              className="p-1 border rounded hover:bg-gray-100"
                            >
                              <FiPlus />
                            </button>
                          </div>

                          {/* Total */}
                          <div className="md:col-span-1 font-bold">
                            ${(item.price * item.quantity).toFixed(2)}
                          </div>

                          {/* Remove */}
                          <div className="md:col-span-1 flex justify-end">
                            <button
                              onClick={() => removeItem(item.id)}
                              className="text-gray-500 hover:text-red-500"
                            >
                              <RiDeleteBin6Line />
                            </button>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>

               
             
              </div>

              {/* Order Summary */}
              <div>
                <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
                  <h2 className="text-xl font-bold mb-6">Order Summary</h2>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span>Subtotal</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Shipping</span>
                      <span>
                        {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span>Tax (10%)</span>
                      <span>${tax.toFixed(2)}</span>
                    </div>
                    <div className="border-t border-gray-200 pt-4 flex justify-between font-bold text-lg">
                      <span>Total</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </div>

                  <Link
                    to="/checkout"
                    className="block w-full bg-gray-900 text-white text-center py-3 rounded hover:bg-gray-700 transition mt-6"
                  >
                    Proceed to Checkout
                  </Link>

                  <Link
                    to="/shop"
                    className="block w-full border border-gray-900 text-gray-900 text-center py-3 rounded hover:bg-gray-100 transition mt-4"
                  >
                    Continue Shopping
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      
    </div>
  );
};

export default CartPage;