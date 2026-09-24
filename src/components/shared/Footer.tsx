import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-8 flex flex-col justify-between min-h-[50vh]">
        
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Brand Column */}
          <div className="flex flex-col gap-3 sm:col-span-2 lg:col-span-1">
            <h1 className="text-2xl font-bold tracking-wider uppercase text-white">
              Rawblox
            </h1>
            <h2 className="text-sm font-semibold text-neutral-300">
              Streetwear for the Bold, Built for the Movement.
            </h2>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Inspired by the raw energy of the streets, we create statement
              pieces that blend style, attitude, and individuality.
            </p>
          </div>

          {/* Menu Links */}
          <div className="flex flex-col gap-3">
            <h3 className="text-xs font-bold tracking-widest text-neutral-400 uppercase">
              Menu
            </h3>
            <ul className="flex flex-col gap-2 text-sm text-neutral-300">
              <li className="hover:text-white transition-colors cursor-pointer">Home</li>
              <li className="hover:text-white transition-colors cursor-pointer">Shop</li>
              <li className="hover:text-white transition-colors cursor-pointer">About</li>
              <li className="hover:text-white transition-colors cursor-pointer">Contact</li>
              <li className="hover:text-white transition-colors cursor-pointer">Story</li>
            </ul>
          </div>

          {/* Shop Links */}
          <div className="flex flex-col gap-3">
            <h3 className="text-xs font-bold tracking-widest text-neutral-400 uppercase">
              Shop
            </h3>
            <ul className="flex flex-col gap-2 text-sm text-neutral-300">
              <li className="hover:text-white transition-colors cursor-pointer">New Arrivals</li>
              <li className="hover:text-white transition-colors cursor-pointer">Best Sellers</li>
              <li className="hover:text-white transition-colors cursor-pointer">Outerwear</li>
              <li className="hover:text-white transition-colors cursor-pointer">Hoodies & Tees</li>
              <li className="hover:text-white transition-colors cursor-pointer">Accessories</li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="flex flex-col gap-3">
            <h3 className="text-xs font-bold tracking-widest text-neutral-400 uppercase">
              Social
            </h3>
            <ul className="flex flex-col gap-2 text-sm text-neutral-300">
              <li className="hover:text-white transition-colors cursor-pointer">Instagram</li>
              <li className="hover:text-white transition-colors cursor-pointer">TikTok</li>
              <li className="hover:text-white transition-colors cursor-pointer">Twitter / X</li>
              <li className="hover:text-white transition-colors cursor-pointer">YouTube</li>
              <li className="hover:text-white transition-colors cursor-pointer">Discord</li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar / Copyright */}
        <div className="mt-12 pt-6 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-4">
          <p>&copy; {new Date().getFullYear()} RAWBLOX. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="hover:text-neutral-400 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-neutral-400 cursor-pointer">Terms of Service</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;