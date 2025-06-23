import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaPinterest } from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";

function Footer() {
  return (
    <footer className="w-full bg-gradient-to-b from-gray-900 to-black text-white border-t border-gray-700">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold uppercase tracking-wider border-b border-blue-500 pb-2 inline-block">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {[
                { name: "Home", href: "/" },
                { name: "Shop", href: "/shop" },
                { name: "New Collection", href: "/new-collection" },
                { name: "Her", href: "/her" },
                { name: "Him", href: "/him" },
                { name: "Sale", href: "/sale" },
              ].map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-gray-300 hover:text-blue-500 transition-colors duration-300"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Care */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold uppercase tracking-wider border-b border-blue-500 pb-2 inline-block">
              Customer Care
            </h3>
            <ul className="space-y-2">
              {[
                { name: "My Account", href: "/account" },
                { name: "Order Tracking", href: "/tracking" },
                { name: "Wishlist", href: "/wishlist" },
                { name: "Shipping Info", href: "/shipping" },
                { name: "Returns & Exchanges", href: "/returns" },
                { name: "FAQ", href: "/faq" },
              ].map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold uppercase tracking-wider border-b border-blue-500 pb-2 inline-block">
              Contact Us
            </h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MdEmail className="text-blue-400 mt-1" size={20} />
                <div>
                  <p className="text-gray-400 ">Email</p>
                  <a
                    href="mailto:hello@fashionstore.com"
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm"
                  >
                    hello@fashionstore.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MdPhone className="text-blue-400 mt-1" size={20} />
                <div>
                  <p className="text-gray-400 ">Phone</p>
                  <a
                    href="tel:+1234567890"
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm"
                  >
                    +1 (234) 567-890
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MdLocationOn className="text-blue-400 mt-1" size={20} />
                <div>
                  <p className="text-gray-400 ">Address</p>
                  <p className="text-gray-300 text-sm">
                    123 Fashion Avenue<br />
                    Style District, ST 10001
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold uppercase tracking-wider border-b border-blue-500 pb-2 inline-block">
              Stay Updated
            </h3>
            <p className="text-gray-300">
              Subscribe to our newsletter for the latest trends and exclusive offers.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-gray-400 transition-all duration-300"
                required
              />
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-gray-600 hover:from-blue-600 hover:to-gray-700 text-white font-medium py-2 px-6 rounded transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Subscribe
              </button>
            </form>
            <div className="pt-4">
              <h4 className="text-gray-400 mb-3">Follow Us</h4>
              <div className="flex space-x-4">
                {[
                  { icon: <FaFacebookF />, href: "https://facebook.com" },
                  { icon: <FaInstagram />, href: "https://instagram.com" },
                  { icon: <FaTwitter />, href: "https://twitter.com" },
                  { icon: <FaPinterest />, href: "https://pinterest.com" },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 hover:bg-blue-600 w-10 h-10 rounded-full flex items-center justify-center text-white transition-all duration-300 transform hover:scale-110"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Yet Galore Fashion Store. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <a href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
              Terms of Service
            </a>
            <a href="/cookies" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;