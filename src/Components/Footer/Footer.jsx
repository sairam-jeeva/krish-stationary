import React from 'react';
import logo from '../../Assets/logo.jpg';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white font-outfit" id='footer'>
      <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* Logo and Social Media Icons */}
        <div className="flex flex-col items-center md:items-start">
          <img src={logo} className="w-32 h-auto mb-4" alt="Logo" />
          <div className="flex space-x-5 mb-4">
            <a href="https://www.instagram.com/Krish_stationary_salem1/" aria-label="Instagram">
              {/* Instagram SVG */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7" viewBox="0 0 448 512">
                <path fill="#E1306C" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s0 102.7-9 132.1z"/>
              </svg>
            </a>
            <a href=" https://wa.me/message/BNVH64UXYSWZF1" aria-label="whatsapp">
              {/* Whatsapp SVG */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7" viewBox="0 0 448 512">
                <path fill="#25D366" d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
              </svg>
            </a>
            <a href="https://www.youtube.com/@KrishstationerySalem15" aria-label="YouTube">
              {/* YouTube SVG */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7" viewBox="0 0 576 512">
                <path fill="#FF0000" d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 223.4-11.5c23.5-6.3 42-24.1 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-306.1 175V213.8l141.1 62.2-141.1 62.2z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* About Us Section */}
        <div className="flex flex-col">
          <h1 className="font-bold text-2xl mb-4 text-center md:text-left">About Us</h1>
          <ul className="text-sm font-light flex flex-col space-y-2">
            <li className="hover:text-blue-500 cursor-pointer"><a href="#ourProducts">Our Products </a></li>
            <li className="hover:text-blue-500 cursor-pointer"><a href="#founder">Our Founder</a> </li>
            <li className="hover:text-blue-500 cursor-pointer"><a href="#premiumDis"> Premium Offers</a></li>
            <li className="hover:text-blue-500 cursor-pointer"><a href="#services">Our Services </a> </li>
          </ul>
        </div>

        {/* Contact Section */}
        <div className="flex flex-col">
          <h1 className="font-bold text-2xl mb-4 text-center md:text-left">Contact Us</h1>
          <p className="text-sm font-light mb-2">Email: <a href="mailto:info@tuneuptech.in" className="hover:text-blue-500">krishstationerysalem1@gmail.com</a></p>
          <p className="text-sm font-light">Phone: <a href="tel:+919944500207" className="hover:text-blue-500">+91 9500899155</a></p>
        </div>

        {/* Google Reviews Section */}
        <div className="flex flex-col items-center md:items-start">
          <h1 className="font-bold text-2xl mb-4 text-center md:text-left">Leave a Review</h1>
          <p className="text-sm font-light text-center md:text-left mb-4">
            We appreciate your feedback! Click below to write a review on Google.
          </p>
          <div className="flex justify-center md:justify-start mb-6">
            <a
              href="https://www.google.co.in/maps/place/KRISH+STATIONERY/@11.6532567,78.1649452,17z/data=!4m8!3m7!1s0x3babf1c471ba716d:0x4bd10ef3d60928c7!8m2!3d11.6532567!4d78.1675201!9m1!1b1!16s%2Fg%2F11ks08v_y1?entry=ttu&g_ep=EgoyMDI0MTAxNi4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-blue-500 transition duration-300 transform hover:scale-105"
            >
              Write a Review
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="text-center p-4 bg-gray-900">
        &copy; 2024 TuneUp Technologies. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
