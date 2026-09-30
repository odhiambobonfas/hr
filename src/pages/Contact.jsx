import React from 'react';
import { Mail, Phone, MapPin, MessageSquare, Clock, Send, Globe } from 'lucide-react';

const Contact = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-50 to-blue-50/30 py-24 lg:py-32 border-b border-slate-200">
        <div className="container max-w-4xl mx-auto px-6 text-center">
          <span className="text-blue-600 font-bold uppercase tracking-widest text-xs mb-5 block">Contact Us</span>
          <h1 className="text-5xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tight">
            Let's Discuss Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-700">HR Needs</span>
          </h1>
          <p className="text-lg text-slate-700 leading-relaxed font-medium max-w-2xl mx-auto">
            Our team of certified HR professionals is ready to help you develop tailored solutions that address your unique workforce challenges and business objectives.
          </p>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
            <ContactCard 
              icon={<Phone className="text-blue-600" />}
              title="Call Us"
              desc="Speak directly with our team for immediate assistance."
              action="+254 7XX XXX XXX"
              type="tel"
            />
            <ContactCard 
              icon={<Mail className="text-purple-600" />}
              title="Email Us"
              desc="Send detailed inquiries for thorough consultation."
              action="info@inflecxion.com"
              type="email"
            />
            <ContactCard 
              icon={<MessageSquare className="text-green-600" />}
              title="WhatsApp"
              desc="Quick messaging and real-time response."
              action="+254 7XX XXX XXX"
              type="whatsapp"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold mb-2 text-slate-900">Send Us a Message</h2>
                <p className="text-slate-600 font-medium mb-6">We'll respond within 24 business hours.</p>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormInput label="Full Name" placeholder="John Doe" />
                    <FormInput label="Email Address" placeholder="john@company.com" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <FormInput label="Phone Number" placeholder="+254 7XX XXX XXX" />
                    <FormInput label="Subject" placeholder="HR Consulting Inquiry" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-900">Message</label>
                    <textarea 
                      className="w-full p-4 bg-slate-50 border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all h-40 font-medium"
                      placeholder="Tell us about your HR challenges and goals..."
                    ></textarea>
                  </div>
                  <button className="btn btn-primary w-full py-4 text-base font-semibold">
                    <Send size={20} />
                    Send Message
                  </button>
                </form>
              </div>
            </div>
            
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold mb-2 text-slate-900">Office Location</h2>
                <p className="text-slate-600 font-medium mb-6">Visit us in person or work with us remotely.</p>
              </div>
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white p-10 rounded-2xl relative overflow-hidden group border border-slate-700">
                <div className="absolute top-0 right-0 w-40 h-40 bg-blue-600/20 blur-3xl -mr-20 -mt-20 group-hover:bg-blue-600/30 transition-all"></div>
                <div className="space-y-8 relative z-10">
                  <LocationItem icon={<MapPin />} title="Headquarters" desc="Maynard Close off, Waiyaki Way, Nairobi, Kenya" />
                  <LocationItem icon={<Clock />} title="Business Hours" desc="Monday - Friday: 8:00 AM - 5:00 PM" />
                  <LocationItem icon={<Globe />} title="Service Region" desc="Kenya, Uganda, Tanzania, Rwanda" />
                </div>
                <div className="mt-10 aspect-video bg-slate-800 rounded-xl border border-slate-600 flex items-center justify-center overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000" alt="Office" className="w-full h-full object-cover opacity-60" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const ContactCard = ({ icon, title, desc, action, type }) => (
  <div className="bg-gradient-to-br from-white to-slate-50 p-8 rounded-2xl border-2 border-slate-200 shadow-md hover:shadow-lg transition-all text-center">
    <div className="w-14 h-14 bg-slate-100 rounded-xl flex items-center justify-center mx-auto mb-6">
      {React.cloneElement(icon, { size: 28 })}
    </div>
    <h3 className="text-2xl font-bold mb-2 text-slate-900">{title}</h3>
    <p className="text-slate-600 mb-6 font-medium text-base">{desc}</p>
    <a 
      href={type === 'tel' ? `tel:${action}` : type === 'email' ? `mailto:${action}` : '#'} 
      className="text-blue-600 font-bold text-base hover:text-blue-700 transition-colors hover:underline"
    >
      {action}
    </a>
  </div>
);

const FormInput = ({ label, placeholder }) => (
  <div className="space-y-2">
    <label className="text-sm font-bold text-slate-900">{label}</label>
    <input 
      type="text" 
      className="w-full p-4 bg-white border-2 border-slate-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all font-medium"
      placeholder={placeholder}
    />
  </div>
);

const LocationItem = ({ icon, title, desc }) => (
  <div className="flex gap-4">
    <div className="w-12 h-12 bg-white/15 rounded-lg flex items-center justify-center text-blue-300 shrink-0 border border-white/20">
      {React.cloneElement(icon, { size: 24 })}
    </div>
    <div>
      <h4 className="font-bold text-white mb-1 text-sm">{title}</h4>
      <p className="text-slate-300 font-medium">{desc}</p>
    </div>
  </div>
);

export default Contact;
