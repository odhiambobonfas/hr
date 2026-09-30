import React, { useState } from 'react';
import { ShieldCheck, FileText, BarChart3, Users2, Settings, Globe, HardHat, GraduationCap, ChevronRight, CheckCircle2 } from 'lucide-react';

const HRServices = () => {
  const [activeTab, setActiveTab] = useState('HR Strategy');

  const tabs = [
    { name: 'HR Strategy', icon: <BarChart3 size={20} /> },
    { name: 'Policy & Compliance', icon: <ShieldCheck size={20} /> },
    { name: 'Compensation', icon: <FileText size={20} /> },
    { name: 'Performance Mgmt', icon: <TrendingUp size={20} /> },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-24 lg:py-32 border-b border-blue-100">
        <div className="container max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center px-6">
          <div className="space-y-8">
            <span className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-bold">Human Resource Services</span>
            <h1 className="text-5xl lg:text-6xl font-black text-slate-900 leading-tight">
              Comprehensive <span className="text-blue-600">HR Solutions</span> for Your Organization
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed max-w-xl">
              From strategy development to payroll management, we provide end-to-end HR services that streamline operations and ensure compliance.
            </p>
            <div className="flex gap-4">
              <button className="btn btn-primary px-8">Free HR Consultation</button>
              <button className="btn btn-outline px-8">Get Custom Quote</button>
            </div>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-2xl border border-blue-50 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 rounded-full -mr-16 -mt-16"></div>
            <div className="grid grid-cols-2 gap-6 relative z-10">
              <div className="p-6 bg-blue-50 rounded-2xl">
                <span className="block text-4xl font-bold text-blue-600 mb-2">98%</span>
                <span className="text-sm font-bold text-slate-500 uppercase tracking-wider">Compliance Rate</span>
              </div>
              <div className="p-6 bg-purple-50 rounded-2xl">
                <span className="block text-4xl font-bold text-purple-600 mb-2">150+</span>
                <span className="text-sm font-bold text-slate-500 uppercase tracking-wider">HR Policies</span>
              </div>
              <div className="col-span-2 space-y-4 pt-4">
                <div className="flex items-center gap-3 text-slate-700 font-medium">
                  <CheckCircle2 className="text-green-500" size={20} />
                  <span>Policy Development</span>
                </div>
                <div className="flex items-center gap-3 text-slate-700 font-medium">
                  <CheckCircle2 className="text-green-500" size={20} />
                  <span>Payroll Processing</span>
                </div>
                <div className="flex items-center gap-3 text-slate-700 font-medium">
                  <CheckCircle2 className="text-green-500" size={20} />
                  <span>Regulatory Updates</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Portfolio Tags */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-6">Our HR Service Portfolio</h2>
            <p className="text-slate-600 text-lg">Comprehensive human resource services designed to optimize your workforce management and ensure regulatory compliance.</p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {tabs.map((tab) => (
              <button
                key={tab.name}
                onClick={() => setActiveTab(tab.name)}
                className={`btn px-8 py-3 rounded-full flex items-center gap-2 transition-all ${
                  activeTab === tab.name 
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-200' 
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-blue-400'
                }`}
              >
                {tab.icon}
                {tab.name}
              </button>
            ))}
          </div>

          <div className="bg-white p-10 rounded-3xl border border-slate-100 shadow-xl">
            {activeTab === 'Policy & Compliance' && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <div className="space-y-6">
                  <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center mb-8">
                    <ShieldCheck size={32} />
                  </div>
                  <h3 className="text-3xl font-bold">HR Policy Development & Compliance</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Comprehensive HR policy development and compliance management ensuring regulatory adherence and operational clarity.
                  </p>
                  <div className="space-y-4">
                    <h4 className="font-bold text-slate-900">Key Benefits:</h4>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      <BenefitItem text="Reduced legal risks" />
                      <BenefitItem text="Clear operational guidelines" />
                      <BenefitItem text="Full regulatory compliance" />
                      <BenefitItem text="Protected organization reputation" />
                    </ul>
                  </div>
                </div>
                <div className="bg-slate-50 p-8 rounded-2xl">
                  <h4 className="font-bold mb-6 text-slate-900">What's Included:</h4>
                  <ul className="space-y-4 text-slate-600">
                    <li className="flex items-center gap-3"><CheckCircle2 size={16} className="text-blue-500" /> Employment law compliance audits</li>
                    <li className="flex items-center gap-3"><CheckCircle2 size={16} className="text-blue-500" /> HR policy manual development and review</li>
                    <li className="flex items-center gap-3"><CheckCircle2 size={16} className="text-blue-500" /> Regulatory updates and training</li>
                    <li className="flex items-center gap-3"><CheckCircle2 size={16} className="text-blue-500" /> Human Resource Risk Assessment</li>
                    <li className="flex items-center gap-3"><CheckCircle2 size={16} className="text-blue-500" /> Documentation management systems</li>
                  </ul>
                  <button className="btn btn-primary w-full mt-8">Get Started Today</button>
                </div>
              </div>
            )}
            {activeTab !== 'Policy & Compliance' && (
              <div className="py-20 text-center text-slate-400">
                <p>Detailed information for <strong>{activeTab}</strong> coming soon...</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Specialized HR Services Grid */}
      <section className="section-padding bg-slate-50">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">Specialized HR Services</h2>
          <div className="grid grid-3 gap-8">
            <ServiceInfoCard icon={<Settings />} title="Change Management" />
            <ServiceInfoCard icon={<Users2 />} title="HR Outsourcing & Advisory" />
            <ServiceInfoCard icon={<ShieldCheck />} title="Human Resource Audit" />
            <ServiceInfoCard icon={<Globe />} title="Immigration Support Services" />
          </div>
        </div>
      </section>
    </div>
  );
};

const BenefitItem = ({ text }) => (
  <li className="flex items-center gap-2 text-slate-600">
    <CheckCircle2 size={16} className="text-green-500" />
    <span>{text}</span>
  </li>
);

const ServiceInfoCard = ({ icon, title }) => (
  <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
    <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-4">{title}</h3>
    <p className="text-slate-500 mb-6 text-sm">Advanced HR solutions for complex organizational challenges and strategic initiatives.</p>
    <button className="text-blue-600 font-bold flex items-center gap-2 text-sm hover:gap-3 transition-all">
      Learn More <ChevronRight size={16} />
    </button>
  </div>
);

const TrendingUp = ({ size }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
);

export default HRServices;
