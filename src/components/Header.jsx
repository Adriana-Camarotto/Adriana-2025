import React, { useState } from 'react';
import logo from '../assets/logo.png'; 
import { Menu, X } from 'lucide-react';


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  
  const toggleMenu = () => setMenuOpen(!menuOpen);
  
  return (
    <header className="bg-transparent text-white fixed top-4 left-0 w-full z-50">
      {/* Top bar descktop only */}
      <div className="hidden  justify-between items-center text-sm px-6 py-2">
        <div className="flex items-center gap-10">
          <img src={logo} alt="DNS Logo" href="" className="h-10 w-auto" />
          <span>0845 034 0895</span>
          <a href="#" className="hover:underline">About us</a>
          <a href="#" className="hover:underline">Careers</a>
        </div>
        <a href="#" className="hover:underline">Request support</a>
      </div>

      {/* Main nav */}
      <div className="flex justify-between items-center px-6 py-4 md:hidden ">
        <img src={logo} alt="DNS Logo" className="h-10 w-auto" /> 
        <button
          onClick={toggleMenu}
          className="md:hidden text-white bg-transparent-important p-2 border-none font-semibold animate-fade-in hover:bg-white/10 rounded transition-colors"
        >
          {menuOpen ? <X size={28}  style={{color: "#ffffff",  backgroundColor: "transparent !important"  }} /> : <Menu size={28} style={{ color: "#ffffff", backgroundColor: "transparent !important" }} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="bg-[#2C247E] h-screen text-white px-6 py-4 mt-[-100px] space-y-4 md:hidden  animate-fade-in transition-all duration-100 ease-in-out">
          {/* Top bar items */}
          <div className="space-y-2 text-sm">
            <div className="font-semibold mt-24">0845 034 0895</div>
            <a href="#" className="block hover:underline">About us</a>
            <a href="#" className="block hover:underline">Careers</a>
            <a href="#" className="block hover:underline">Request support</a>
          </div>
          <hr className="border-white/30 my-2" />
          {/* Main nav items */}
          <a href="#" className="block text-lg font-semibold hover:text-pink-400">Services</a>
          <a href="#" className="block text-lg font-semibold hover:text-pink-400">Case Studies</a>
          <a href="#" className="block text-lg font-semibold hover:text-pink-400">Insights</a>
          <a href="#" className="block text-lg font-semibold hover:text-pink-400">Contact</a>
          <button className="w-[150px] bg-white text-[#2C247E] font-semibold px-5 py-2 rounded shadow hover:bg-gray-100 transition">
            Call Me Back
            </button>
          </div>

      )}

      {/* Desktop nav */}
      <div className="hidden md:flex items-stretch px-6">
        <div className="flex items-center pr-10">
          <img src={logo} alt="DNS Logo" className="h-full max-h-[84px] w-auto object-contain" />
        </div>
        <div className="flex flex-col justify-center w-full">
          <div className="flex justify-between items-center text-sm py-2">
            <div className="flex items-center gap-5">
              <span>0845 034 0895</span>
              <a href="#" className="hover:underline">About us</a>
              <a href="#" className="hover:underline">Careers</a>
            </div>
            <a href="#" className="hover:underline">Request support</a>
          </div>
          <div className="flex justify-between items-center py-2">
            <nav className="flex gap-8 text-lg font-semibold">
              <a href="#" className="hover:text-pink-400">Services</a>
              <a href="#" className="hover:text-pink-400">Case Studies</a>
              <a href="#" className="hover:text-pink-400">Insights</a>
              <a href="#" className="hover:text-pink-400">Contact</a>
            </nav>
            <button className="bg-white text-[#2C247E] font-semibold px-5 py-2 rounded shadow hover:bg-gray-100 transition">
              Call Me Back
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;