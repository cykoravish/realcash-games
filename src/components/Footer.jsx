"use client"

import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <footer className="bg-black/20 backdrop-blur-lg border-t border-purple-500/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Brand Section */}
          <div className="space-y-4 col-span-1 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">🏆</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Regenta International
              </h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              India's most trusted legal gaming platform. Play skill-based games and win real money legally.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                <span className="text-xl">📘</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                <span className="text-xl">🐦</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                <span className="text-xl">📷</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors duration-300">
                <span className="text-xl">💼</span>
              </a>
            </div>
          </div>

          {/* Games Section */}
          <div className="space-y-4">
            <h4 className="font-bold text-white text-lg">Games</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors duration-300 block py-1">
                  Ludo Supreme
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors duration-300 block py-1">
                  Rummy Circle
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors duration-300 block py-1">
                  Fantasy Cricket
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors duration-300 block py-1">
                  Teen Patti Gold
                </a>
              </li>
              <li>
                <Link to="/games" className="hover:text-white transition-colors duration-300 block py-1">
                  View All Games
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Section */}
          <div className="space-y-4">
            <h4 className="font-bold text-white text-lg">Company</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <a href="#" className="hover:text-white transition-colors duration-300 block py-1">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors duration-300 block py-1">
                  How to Play
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors duration-300 block py-1">
                  Responsible Gaming
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors duration-300 block py-1">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors duration-300 block py-1">
                  Press & Media
                </a>
              </li>
            </ul>
          </div>

          {/* Support & Legal Section */}
          <div className="space-y-4">
            <h4 className="font-bold text-white text-lg">Support & Legal</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <Link to="/contact" className="hover:text-white transition-colors duration-300 block py-1">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors duration-300 block py-1">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/terms-conditions" className="hover:text-white transition-colors duration-300 block py-1">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="hover:text-white transition-colors duration-300 block py-1">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/return-refund-policy"
                  className="hover:text-white transition-colors duration-300 block py-1"
                >
                  Return & Refund Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-gray-700 mt-8 pt-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm text-gray-400">
            <div className="flex items-center space-x-2">
              <span>📧</span>
              <span className="break-all">regenta.international@gmail.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <span>📞</span>
              <span>+91 7248074661</span>
            </div>
            <div className="flex items-center space-x-2">
              <span>📍</span>
              <span>Delhi, India</span>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-6 pt-6 flex flex-col lg:flex-row justify-between items-center text-sm text-gray-400 space-y-4 lg:space-y-0">
          <p className="text-center lg:text-left">&copy; 2025 Regenta International. All rights reserved.</p>
          <div className="flex flex-wrap justify-center lg:justify-end gap-4 lg:gap-6">
            <span className="text-green-400 flex items-center space-x-1">
              <span>✓</span>
              <span>100% Legal</span>
            </span>
            <span className="text-blue-400 flex items-center space-x-1">
              <span>✓</span>
              <span>Secure Platform</span>
            </span>
            <span className="text-purple-400 flex items-center space-x-1">
              <span>✓</span>
              <span>Instant Withdrawals</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
