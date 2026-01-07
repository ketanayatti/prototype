import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#1e3a8a] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center justify-center w-12 h-12 bg-[#d4af37] rounded-lg">
                <span className="text-[#1e3a8a] text-2xl font-bold">SM</span>
              </div>
              <div>
                <h3 className="font-bold text-lg">Shree Mahaveer</h3>
                <p className="text-sm text-blue-200">Since 1995</p>
              </div>
            </div>
            <p className="text-blue-100 text-sm">
              Your trusted partner for premium school uniforms and quality fabrics in Hubballi and across Karnataka.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4 text-[#d4af37]">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-blue-100 hover:text-[#d4af37] transition-colors">Shop by School</a></li>
              <li><a href="#" className="text-blue-100 hover:text-[#d4af37] transition-colors">Boys Uniforms</a></li>
              <li><a href="#" className="text-blue-100 hover:text-[#d4af37] transition-colors">Girls Uniforms</a></li>
              <li><a href="#" className="text-blue-100 hover:text-[#d4af37] transition-colors">Suitings & Shirtings</a></li>
              <li><a href="#" className="text-blue-100 hover:text-[#d4af37] transition-colors">Accessories</a></li>
              <li><a href="#" className="text-blue-100 hover:text-[#d4af37] transition-colors">Size Guide</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="font-bold mb-4 text-[#d4af37]">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-[#d4af37] flex-shrink-0 mt-0.5" />
                <span className="text-blue-100">
                  123 Station Road, Hubballi,<br />
                  Karnataka 580020, India
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-[#d4af37] flex-shrink-0" />
                <a href="tel:+919876543210" className="text-blue-100 hover:text-[#d4af37] transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="w-5 h-5 text-[#d4af37] flex-shrink-0" />
                <a 
                  href="https://wa.me/919876543210" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-100 hover:text-[#d4af37] transition-colors"
                >
                  WhatsApp: +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-[#d4af37] flex-shrink-0" />
                <a href="mailto:info@shreemahaveer.com" className="text-blue-100 hover:text-[#d4af37] transition-colors">
                  info@shreemahaveer.com
                </a>
              </li>
            </ul>
          </div>
          
          {/* Store Hours */}
          <div>
            <h4 className="font-bold mb-4 text-[#d4af37]">Store Hours</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <Clock className="w-5 h-5 text-[#d4af37] flex-shrink-0 mt-0.5" />
                <div className="text-blue-100">
                  <p className="font-semibold text-white">Monday - Saturday</p>
                  <p>9:00 AM - 8:00 PM</p>
                </div>
              </li>
              <li className="flex items-start gap-2 ml-7">
                <div className="text-blue-100">
                  <p className="font-semibold text-white">Sunday</p>
                  <p>10:00 AM - 6:00 PM</p>
                </div>
              </li>
            </ul>
            
            <div className="mt-6 p-4 bg-[#d4af37] text-[#1e3a8a] rounded-lg">
              <p className="font-semibold text-sm">Special Offer!</p>
              <p className="text-xs mt-1">10% off on orders above ₹2000</p>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-blue-700 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-blue-200">
              © 2026 Shree Mahaveer. All rights reserved.
            </p>
            <div className="flex gap-4 text-sm">
              <a href="#" className="text-blue-200 hover:text-[#d4af37] transition-colors">Privacy Policy</a>
              <span className="text-blue-700">•</span>
              <a href="#" className="text-blue-200 hover:text-[#d4af37] transition-colors">Terms of Service</a>
              <span className="text-blue-700">•</span>
              <a href="#" className="text-blue-200 hover:text-[#d4af37] transition-colors">Return Policy</a>
            </div>
          </div>
          
          {/* Developer Credit */}
          <div className="mt-6 pt-6 border-t border-blue-700 text-center">
            <p className="text-sm text-blue-200">
              Prototype Developed by{' '}
              <span className="text-[#d4af37] font-semibold">Ketan Ayatti</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}