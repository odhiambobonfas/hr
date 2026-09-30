import React from 'react';
import { Users, Briefcase, Clock, HeartPulse, Building2, Smartphone, ShoppingBag, Truck, Shield, Construction } from 'lucide-react';

const ManpowerStaffing = () => {
  const industries = [
    { name: 'Manufacturing', icon: <Building2 /> },
    { name: 'Healthcare', icon: <HeartPulse /> },
    { name: 'Retail', icon: <ShoppingBag /> },
    { name: 'Hospitality', icon: <Briefcase /> },
    { name: 'Logistics', icon: <Truck /> },
    { name: 'Security', icon: <Shield /> },
    { name: 'Construction', icon: <Construction /> },
    { name: 'Technology', icon: <Smartphone /> },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-slate-900 text-white py-24 lg:py-32 relative overflow-hidden">
        <div className="container max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center px-6 relative z-10">
          <div className="space-y-8 relative z-10">
            <span className="inline-block px-4 py-1 rounded-full bg-blue-500/20 text-blue-400 text-sm font-bold border border-blue-500/30">Manpower & Staffing</span>
            <h1 className="text-5xl lg:text-7xl font-black leading-tight">
              Strategic <span className="text-blue-500">Workforce</span> Solutions
            </h1>
            <p className="text-xl text-slate-400 leading-relaxed max-w-xl">
              We provide agile staffing and outsourcing services that help organizations scale effectively while managing costs and operational risks.
            </p>
            <div className="flex gap-12 pt-4">
              <div>
                <span className="block text-4xl font-bold text-white">2000+</span>
                <span className="text-slate-500 font-medium uppercase tracking-wider text-xs">Staff Placed</span>
              </div>
              <div>
                <span className="block text-4xl font-bold text-white">95%</span>
                <span className="text-slate-500 font-medium uppercase tracking-wider text-xs">Success Rate</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square bg-slate-800 rounded-3xl overflow-hidden border border-slate-700 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=1000" 
                alt="Workforce Management" 
                className="w-full h-full object-cover opacity-80"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Tabs Placeholder */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-16">
            <FeatureTab active icon={<Users />} title="Staffing & Outsourcing" />
            <FeatureTab icon={<Briefcase />} title="Job Analysis" />
            <FeatureTab icon={<Clock />} title="Scheduling" />
            <FeatureTab icon={<HeartPulse />} title="Health Support" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold">Staffing & Outsourcing Solutions</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Our staffing and outsourcing solutions are designed to provide you with the talent you need, when you need it. We handle the entire lifecycle of the employee, from recruitment and onboarding to payroll and compliance.
              </p>
              <ul className="space-y-4">
                <ListItem text="Temporary & Contract Staffing" />
                <ListItem text="Permanent Placements" />
                <ListItem text="Payroll Outsourcing" />
                <ListItem text="Employee Benefits Management" />
              </ul>
              <button className="btn btn-primary px-10 py-4">Request Personnel</button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square bg-blue-50 rounded-3xl flex flex-col items-center justify-center p-8 text-center group hover:bg-blue-600 transition-colors duration-500">
                <span className="text-5xl font-black text-blue-600 group-hover:text-white mb-2 italic">01</span>
                <span className="font-bold text-slate-800 group-hover:text-white">Assessment</span>
              </div>
              <div className="aspect-square bg-purple-50 rounded-3xl flex flex-col items-center justify-center p-8 text-center group hover:bg-purple-600 transition-colors duration-500 mt-8">
                <span className="text-5xl font-black text-purple-600 group-hover:text-white mb-2 italic">02</span>
                <span className="font-bold text-slate-800 group-hover:text-white">Planning</span>
              </div>
              <div className="aspect-square bg-amber-50 rounded-3xl flex flex-col items-center justify-center p-8 text-center group hover:bg-amber-600 transition-colors duration-500">
                <span className="text-5xl font-black text-amber-600 group-hover:text-white mb-2 italic">03</span>
                <span className="font-bold text-slate-800 group-hover:text-white">Execution</span>
              </div>
              <div className="aspect-square bg-green-50 rounded-3xl flex flex-col items-center justify-center p-8 text-center group hover:bg-green-600 transition-colors duration-500 mt-8">
                <span className="text-5xl font-black text-green-600 group-hover:text-white mb-2 italic">04</span>
                <span className="font-bold text-slate-800 group-hover:text-white">Optimization</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="section-padding bg-slate-50">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-16">Industries We Support</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {industries.map((industry) => (
              <div key={industry.name} className="bg-white p-10 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:text-blue-600 transition-all group">
                <div className="w-16 h-16 mx-auto bg-slate-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-50 transition-colors">
                  {React.cloneElement(industry.icon, { size: 32 })}
                </div>
                <h4 className="font-bold">{industry.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const FeatureTab = ({ icon, title, active }) => (
  <div className={`p-6 rounded-2xl flex items-center gap-4 cursor-pointer transition-all ${active ? 'bg-white shadow-xl border-l-4 border-blue-600' : 'bg-slate-50 border border-transparent hover:bg-white hover:shadow-md'}`}>
    <div className={`${active ? 'text-blue-600' : 'text-slate-400'}`}>
      {React.cloneElement(icon, { size: 24 })}
    </div>
    <span className={`font-bold ${active ? 'text-slate-900' : 'text-slate-500'}`}>{title}</span>
  </div>
);

const ListItem = ({ text }) => (
  <li className="flex items-center gap-3 text-slate-700 font-medium">
    <div className="w-6 h-6 bg-green-100 text-green-600 rounded-full flex items-center justify-center shrink-0">
      <Clock size={14} />
    </div>
    {text}
  </li>
);

export default ManpowerStaffing;
