import React from 'react';
import { Send } from 'lucide-react';

const NewsletterSection = () => {
  return (
    <section className="bg-blue-600 py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-white/10 blur-3xl rounded-full translate-x-1/2"></div>
      <div className="container relative z-10 text-center text-white max-w-4xl mx-auto">
        <h2 className="text-5xl lg:text-6xl font-black mb-8 tracking-tighter italic">Stay Ahead of HR Trends</h2>
        <p className="text-xl text-blue-100 mb-12 leading-relaxed opacity-90">
          Get the latest insights on HR compliance, best practices, and industry trends delivered to your inbox monthly.
        </p>
        <form className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto items-stretch" onSubmit={(e) => e.preventDefault()}>
          <input 
            type="email" 
            placeholder="Enter your email address" 
            className="flex-grow px-8 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder:text-blue-100 focus:outline-none focus:ring-2 focus:ring-white/50 text-lg h-[70px]"
          />
          <button className="bg-white text-blue-600 px-10 rounded-2xl font-black text-lg hover:bg-yellow-400 hover:text-slate-900 transition-all flex items-center justify-center gap-2 shadow-xl h-[70px] whitespace-nowrap">
            Subscribe Now
            <Send size={20} />
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterSection;
