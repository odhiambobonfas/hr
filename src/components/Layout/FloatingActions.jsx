import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';

const FloatingAction = ({ href, icon: Icon, color, label, target, rel }) => (
  <a 
    href={href} 
    target={target} 
    rel={rel}
    className={`w-16 h-16 ${color} text-white rounded-full flex items-center justify-center shadow-[0_15px_40px_rgba(0,0,0,0.15)] hover:scale-110 active:scale-95 transition-all duration-300 group relative`}
  >
    <Icon size={28} />
    <span className="absolute right-full mr-5 bg-slate-900 text-white px-4 py-2 rounded-xl text-sm font-black shadow-2xl opacity-0 group-hover:opacity-100 transition-all transform translate-x-4 group-hover:translate-x-0 whitespace-nowrap pointer-events-none">
      {label}
      {/* Triangle tip */}
      <div className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-slate-900 rotate-45"></div>
    </span>
  </a>
);

const FloatingActions = () => {
  return (
    <div className="fixed bottom-10 right-10 z-[110] flex flex-col gap-5">
      {/* WhatsApp Action */}
      <FloatingAction 
        href="https://wa.me/254700000000" 
        target="_blank" 
        rel="noopener noreferrer"
        icon={MessageCircle}
        color="bg-[#25D366]"
        label="WhatsApp Us"
      />

      {/* Call Action */}
      <FloatingAction 
        href="tel:+254700000000" 
        icon={Phone}
        color="bg-blue-600"
        label="Call Now"
      />
    </div>
  );
};

export default FloatingActions;
