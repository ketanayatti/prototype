import { Search, ShoppingCart, Phone, Menu } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = ['School Uniforms', 'Men', 'Women', 'Kids', 'Fabrics', 'About Us'];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-[#1e3a8a] to-[#2563eb] text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            <span className="hidden sm:inline">Contact: +91 98765 43210 | WhatsApp: +91 98765 43210</span>
            <span className="sm:hidden">+91 98765 43210</span>
          </div>
          <div className="text-sm">
            <span className="hidden sm:inline">Serving Hubballi & Karnataka</span>
            <span className="sm:hidden">Hubballi, KA</span>
          </div>
        </div>
      </div>
      
      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-[#1e3a8a] to-[#2563eb] rounded-xl shadow-lg">
              <span className="text-[#d4af37] text-2xl font-bold">SM</span>
            </div>
            <div>
              <h1 className="text-[#1e3a8a] text-xl font-bold">Shree Mahaveer</h1>
              <p className="text-xs text-gray-600">Premium School Uniforms</p>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-gray-700 hover:text-[#1e3a8a] font-medium transition-colors relative group"
              >
                {link}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#d4af37] group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </nav>
          
          {/* Actions */}
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu className="w-5 h-5" />
            </Button>
            
            <Button variant="outline" className="hidden md:flex items-center gap-2 border-[#1e3a8a] text-[#1e3a8a] hover:bg-[#1e3a8a] hover:text-white">
              <Phone className="w-4 h-4" />
              Contact
            </Button>
            <Button className="bg-gradient-to-r from-[#d4af37] to-[#b8941f] hover:from-[#b8941f] hover:to-[#d4af37] text-[#1e3a8a] shadow-lg">
              <Search className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden border-t border-gray-200 bg-white"
          >
            <nav className="container mx-auto px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(/\s+/g, '-')}`}
                  className="block py-2 text-gray-700 hover:text-[#1e3a8a] hover:bg-gray-50 px-3 rounded-lg transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}