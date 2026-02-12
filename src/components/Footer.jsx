import React from 'react'
import Maps from "../assets/Maps.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faYoutube, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
     <footer className="text-white w-full pt-16 pb-6 px-28">
      
      <div className="flex justify-between items-start">

        <div className="space-y-4 text-sm">
          <p className="hover:text-gray-400 cursor-pointer">Home</p>
          <p className="hover:text-gray-400 cursor-pointer">About</p>
          <p className="hover:text-gray-400 cursor-pointer">Services</p>
          <p className="hover:text-gray-400 cursor-pointer">Team</p>
          <p className="hover:text-gray-400 cursor-pointer">FAQs</p>
          <p className="hover:text-gray-400 cursor-pointer">Careers</p>
          <p className="hover:text-gray-400 cursor-pointer">Contact Us</p>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-6">Contact</h2>
          <div className="space-y-3 text-sm text-gray-300">
            <p>Lakeside 15th street</p>
            <p>Pokhara, Nepal</p>
            <p>+977-[0]61-467701</p>
          </div>
        </div>

        <div>
          <img src={Maps} alt="Map" className="w-[340px] h-[200px] object-cover rounded-md"/>
        </div>

      </div>

      <div className="flex justify-between items-center mt-16 text-sm text-gray-400">

        <p>Copyright @ 2021 Vayumshala</p>

        <div className="flex space-x-6 text-lg">
          <FontAwesomeIcon icon={faFacebookF} className="cursor-pointer text-blue-500" />
          <FontAwesomeIcon icon={faYoutube} className="cursor-pointer text-red-500" />
          <FontAwesomeIcon icon={faInstagram} className="cursor-pointer text-pink-500" />
        </div>

        <p>Created by Brandbuilder</p>

      </div>

    </footer>
  )
}

export default Footer
