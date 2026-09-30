import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, MapPin, Phone, Mail, MessageSquare, ArrowRight, Calendar, MessageCircle } from 'lucide-react';
import logo from '../../assets/hrlogo.png';

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 pt-16 pb-10">
      <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Company Info */}
        <div className="space-y-6">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg flex items-center justify-center text-white font-black text-lg group-hover:rotate-6 transition-transform">
              I
            </div>
            <span className="font-bold text-white">Inflecxion</span>
          </Link>
          <p className="text-slate-400 leading-relaxed text-sm font-medium">
            Strategic HR consulting partner delivering innovative solutions for talent acquisition, workforce optimization, and organizational development across East Africa.
          </p>
          <div className="flex gap-3 pt-2">
            <a href="#" className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300">
              <Facebook size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300">
              <Twitter size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300">
              <Linkedin size={18} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-bold text-base mb-8 uppercase tracking-wide">Quick Links</h4>
          <ul className="space-y-3">
            <li><Link to="/about" className="hover:text-blue-400 transition-colors font-medium">About Us</Link></li>
            <li><Link to="/services/hr" className="hover:text-blue-400 transition-colors font-medium">HR Services</Link></li>
            <li><Link to="/services/manpower" className="hover:text-blue-400 transition-colors font-medium">Manpower & Staffing</Link></li>
            <li><Link to="/work-readiness-program" className="hover:text-blue-400 transition-colors font-medium">Youth Program</Link></li>
            <li><Link to="/careers" className="hover:text-blue-400 transition-colors font-medium">Careers</Link></li>
            <li><Link to="/contact" className="hover:text-blue-400 transition-colors font-medium">Contact Us</Link></li>
          </ul>
        </div>

        {/* Solutions */}
        <div>
          <h4 className="text-white font-bold text-base mb-8 uppercase tracking-wide">Solutions</h4>
          <ul className="space-y-3">
            <li><Link to="/solutions/smes" className="hover:text-blue-400 transition-colors font-medium">For SMEs</Link></li>
            <li><Link to="/solutions/ngos" className="hover:text-blue-400 transition-colors font-medium">For NGOs</Link></li>
            <li><Link to="/solutions/startups" className="hover:text-blue-400 transition-colors font-medium">For Startups</Link></li>
            <li><Link to="/solutions/healthcare" className="hover:text-blue-400 transition-colors font-medium">Healthcare Sector</Link></li>
            <li><Link to="/solutions/manufacturing" className="hover:text-blue-400 transition-colors font-medium">Manufacturing</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-white font-bold text-base mb-8 uppercase tracking-wide">Contact Info</h4>
          <ul className="space-y-5">
            <li className="flex gap-3">
              <MapPin className="text-blue-500 shrink-0 mt-1" size={18} />
              <span className="text-sm font-medium leading-relaxed">Maynard Close off, Waiyaki Way, Nairobi, Kenya</span>
            </li>
            <li className="flex gap-3">
              <Phone className="text-blue-500 shrink-0 mt-1" size={18} />
              <span className="text-sm font-medium">+254 719 599 828</span>
            </li>
            <li className="flex gap-3">
              <Mail className="text-blue-500 shrink-0 mt-1" size={18} />
              <span className="text-sm font-medium">info@inflecxion.com</span>
            </li>
            <li className="flex gap-3">
              <MessageSquare className="text-blue-500 shrink-0 mt-1" size={18} />
              <span className="text-sm font-medium">WhatsApp: +254 719 599 828</span>
            </li>
          </ul>
        </div>
      </div>
      
      {/* Footer CTA Bar */}
      <div className="container mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
         <Link to="/contact" className="bg-gradient-to-br from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white py-6 px-8 rounded-2xl flex items-center justify-between group transition-all shadow-lg active:scale-95">
            <div className="flex items-center gap-4">
               <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <Calendar size={24} />
               </div>
               <span className="font-bold text-base">Book Free Consultation</span>
            </div>
            <ArrowRight className="group-hover:translate-x-2 transition-transform" size={20} />
         </Link>
         <a href="https://wa.me/254719599828" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-br from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white py-6 px-8 rounded-2xl flex items-center justify-between group transition-all shadow-lg active:scale-95">
            <div className="flex items-center gap-4">
               <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <MessageCircle size={24} />
               </div>
               <span className="font-bold text-base">WhatsApp Us</span>
            </div>
            <ArrowRight className="group-hover:translate-x-2 transition-transform" size={20} />
         </a>
         <div className="bg-slate-900 hover:bg-slate-800 transition-colors p-8 rounded-2xl flex flex-col justify-center border border-slate-700">
            <div className="flex justify-between items-center text-xs font-bold uppercase tracking-wider text-slate-400 mb-4 pb-3 border-b border-slate-700">
               <span>Client Portal</span>
               <span className="text-blue-400 hover:text-blue-300 cursor-pointer">Login</span>
            </div>
            <div className="flex justify-between items-center text-xs font-bold uppercase tracking-wider text-slate-400">
               <span>Support</span>
               <span className="text-blue-400 hover:text-blue-300 cursor-pointer">Help Center</span>
            </div>
         </div>
      </div>
      
      <div className="container mt-12 py-8 border-t border-slate-700 flex flex-col md:flex-row justify-between items-center gap-8 text-xs text-slate-500 font-semibold">
        <p>&copy; {new Date().getFullYear()} Inflecxion HR Consulting (UHRCL). All rights reserved.</p>
        <div className="flex flex-wrap justify-center gap-8">
           <Link to="/privacy" className="hover:text-blue-400 transition-colors">Privacy Policy</Link>
           <Link to="/terms" className="hover:text-blue-400 transition-colors">Terms of Service</Link>
           <Link to="/data-protection" className="hover:text-blue-400 transition-colors">Data Protection</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
