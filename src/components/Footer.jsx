import React from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaCcPaypal,
  FaCreditCard,
  FaMoneyBillAlt,
} from "react-icons/fa";
import { SiGooglepay } from "react-icons/si";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-white to-gray-100 py-4">
      <div className="px-6 pt-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* About Us */}
          <div className="font-Noto_Sans">
            <h3 className="text-2xl font-title font-bold text-gray-800">Turkish Kebab Pizza House</h3>
            <p className="mt-4  text-gray-600">
              Serving the best kebabs and pizzas in Belfast with a passion for
              quality and taste. Visit us for an unforgettable experience.
            </p>
            <ul className="mt-6 space-y-4 text-gray-600">
              <li className="flex items-center">
                <FaMapMarkerAlt className="text-primary mr-3 text-lg" />
                <span>346 Beersbridge Rd, Belfast</span>
              </li>
              <li className="flex items-center">
                <FaPhoneAlt className="text-primary mr-3 text-lg" />
                <span>02890202800</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-montserrat font-semibold text-gray-800 mb-4">Quick Links</h4>
            <ul className="space-y-3 text-gray-600 font-Montserrat_Alternates">
              <li>
                <a href="#" className="hover:text-primary transition">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">Terms of Use</a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">About Cookies</a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition">Cookie Setting</a>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h4 className="text-xl font-montserrat font-semibold text-gray-800 mb-4">Follow Us</h4>
            <p className="text-gray-600 font-Noto_Sans">
              Stay connected with us on social media for updates and offers.
            </p>
            <div className="flex space-x-4 mt-6">
              <a
                href="#"
                className="flex items-center justify-center w-10 h-10 bg-primary text-white rounded-full shadow-lg hover:bg-primary/90 transition"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="flex items-center justify-center w-10 h-10 bg-primary text-white rounded-full shadow-lg hover:bg-primary/90 transition"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="flex items-center justify-center w-10 h-10 bg-primary text-white rounded-full shadow-lg hover:bg-primary/90 transition"
              >
                <FaTwitter />
              </a>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="font-Noto_Sans">
            <h4 className="text-xl font-montserrat font-semibold text-gray-800 mb-4">We Accept</h4>
            <p className="text-gray-600">
              Convenient payment options for all customers.
            </p>
            <div className="flex gap-4 mt-6">
              <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-lg shadow-md">
                <FaCreditCard className="text-primary text-2xl" />
              </div>
              <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-lg shadow-md">
                <FaMoneyBillAlt className="text-primary text-2xl" />
              </div>
              <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-lg shadow-md">
                <SiGooglepay className="text-primary text-2xl" />
              </div>
              <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-lg shadow-md">
                <FaCcPaypal className="text-primary text-2xl" />
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-300 my-8"></div>

        {/* Bottom Section */}
        <div className="flex font-Montserrat_Alternates flex-col md:flex-row justify-between items-center text-gray-600 text-sm">
          <p>&copy; 2025 Turkish Kebab Pizza House. All Rights Reserved.</p>
          <p>
            Designed by <a href="#" className="hover:text-primary font-medium">OrderYOYO</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
