import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Calendar } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    {
      name: 'Services',
      dropdown: [
        { name: 'HR Services', path: '/services/hr' },
        { name: 'Manpower & Staffing', path: '/services/manpower' },
        { name: 'Learning & Development', path: '/work-readiness-program' },
        { name: 'Recruitment', path: '/services/recruitment' },
      ],
    },
    {
      name: 'Solutions',
      dropdown: [
        { name: 'For SMEs', path: '/about' },
        { name: 'For NGOs', path: '/about' },
        { name: 'Public Sector', path: '/about' },
        { name: 'For Startups', path: '/about' },
      ],
    },
    {
      name: 'Company',
      dropdown: [
        { name: 'About Us', path: '/about' },
        { name: 'Careers', path: '/contact' },
        { name: 'Case Studies', path: '/about' },
        { name: 'Resources', path: '/about' },
      ],
    },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-lg py-4' : 'bg-white py-6 border-b border-slate-50'}`}>
      <div className="container max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-11 h-11 bg-blue-600 rounded-xl flex items-center justify-center text-white font-black text-2xl shadow-lg shadow-blue-200 group-hover:rotate-6 transition-transform duration-300">
            I
          </div>
          <div className="flex flex-col -space-y-1.5">
            <span className="text-2xl font-black text-slate-900 tracking-tight">Inflecxion</span>
            <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-blue-600">HR Consulting</span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <div
              key={link.name}
              className="relative px-1"
              onMouseEnter={() => setActiveDropdown(link.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <div className={`flex items-center gap-1.5 px-5 py-2.5 rounded-full cursor-pointer transition-all duration-300 font-bold text-[15px] ${isActive(link.path) || (link.dropdown && link.dropdown.some(d => isActive(d.path))) ? 'bg-blue-50 text-blue-600' : 'text-slate-600 hover:bg-slate-50 hover:text-blue-600'}`}>
                {link.path ? <Link to={link.path}>{link.name}</Link> : <span>{link.name}</span>}
                {link.dropdown && <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === link.name ? 'rotate-180' : ''}`} />}
              </div>

              {link.dropdown && activeDropdown === link.name && (
                <div className="absolute top-full left-0 w-64 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.1)] rounded-2xl border border-slate-100 py-3 mt-2 z-50 animate-in fade-in slide-in-from-top-2 duration-300">
                  {link.dropdown.map((subItem) => (
                    <Link
                      key={subItem.name}
                      to={subItem.path}
                      className="block px-6 py-3.5 text-[14px] text-slate-600 hover:bg-blue-50 hover:text-blue-600 transition-colors font-bold"
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <Link to="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-7 py-3.5 rounded-xl font-black text-sm transition-all shadow-xl shadow-blue-200 active:scale-95 flex items-center gap-2">
            <Calendar size={18} />
            <span>Book Consultation</span>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden p-2 text-slate-900 bg-slate-50 rounded-xl" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 top-[88px] bg-white z-[90] p-6 animate-in slide-in-from-right duration-300 overflow-y-auto">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <div key={link.name} className="py-2">
                 <div className="flex justify-between items-center py-4 px-4 rounded-xl hover:bg-slate-50" onClick={() => link.dropdown && setActiveDropdown(activeDropdown === link.name ? null : link.name)}>
                    <Link to={link.path || '#'} className={`text-xl font-black ${isActive(link.path) ? 'text-blue-600' : 'text-slate-900'}`} onClick={() => !link.dropdown && setIsOpen(false)}>
                      {link.name}
                    </Link>
                    {link.dropdown && <ChevronDown size={22} className={`transition-transform ${activeDropdown === link.name ? 'rotate-180' : ''}`} />}
                 </div>
                 {link.dropdown && activeDropdown === link.name && (
                   <div className="pl-6 py-2 space-y-4 mt-2 border-l-4 border-blue-100 ml-4">
                     {link.dropdown.map(sub => (
                       <Link key={sub.name} to={sub.path} className={`block text-[17px] font-bold ${isActive(sub.path) ? 'text-blue-600' : 'text-slate-500'}`} onClick={() => setIsOpen(false)}>{sub.name}</Link>
                     ))}
                   </div>
                 )}
              </div>
            ))}
            <div className="mt-8">
              <Link to="/contact" className="bg-blue-600 text-white w-full py-5 rounded-2xl font-black text-center block shadow-2xl shadow-blue-100" onClick={() => setIsOpen(false)}>
                Book Free Consultation
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
