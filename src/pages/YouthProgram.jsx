import React from 'react';
import { GraduationCap, Briefcase, Rocket, Laptop, Users, Cpu, MessageSquare, Award } from 'lucide-react';

const YouthProgram = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-24 lg:py-40 relative overflow-hidden">
        <div className="container max-w-7xl mx-auto px-6 relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-bold uppercase tracking-wider mb-8">
            <Rocket size={16} /> 100% Free Program
          </div>
          <h1 className="text-5xl lg:text-7xl font-black mb-8 leading-tight">
            Work Readiness Program for Youth
          </h1>
          <p className="text-xl text-blue-100 leading-relaxed max-w-2xl mx-auto mb-12">
            Equipping the next generation of East African talent with digital, tech, and employability skills for high-impact careers.
          </p>
          <div className="flex justify-center gap-8 py-8 border-t border-white/20">
            <YouthStat count="2500+" label="Youth Trained" />
            <YouthStat count="85%" label="Placement Rate" />
            <YouthStat count="100%" label="Impact Driven" />
          </div>
        </div>
      </div>
    </section>

      {/* Curriculum */}
      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold">Our Comprehensive Curriculum</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                We bridge the gap between education and employment through a curated curriculum that covers the most in-demand skills in today's digital economy.
              </p>
              <div className="space-y-6">
                <CurriculumItem 
                  icon={<Laptop className="text-blue-600" />}
                  title="Digital Literacy"
                  desc="Mastering essential digital tools, cloud platforms, and online collaboration workflows."
                />
                <CurriculumItem 
                  icon={<Cpu className="text-purple-600" />}
                  title="Tech Expertise"
                  desc="Foundational and advanced training in UI/UX Design, Development, and Data Analysis."
                />
                <CurriculumItem 
                  icon={<MessageSquare className="text-amber-600" />}
                  title="Soft Skills & Leadership"
                  desc="Professional communication, EQ, time management, and ethical leadership in the workplace."
                />
              </div>
            </div>
            <div className="bg-slate-50 p-12 rounded-[3rem] border border-slate-100 shadow-xl relative">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-purple-100 rounded-full blur-2xl"></div>
              <h3 className="text-2xl font-bold mb-10 text-center">The Path to Employment</h3>
              <div className="space-y-8">
                <PathStep icon={<GraduationCap />} title="Rigorous Training" desc="8 weeks of intensive hands-on training and projects." />
                <PathStep icon={<Users />} title="Mentorship" desc="Personalized guidance from industry veterans." />
                <PathStep icon={<Briefcase />} title="Job Placement" desc="Guaranteed interviews with our 300+ partner companies." />
                <PathStep icon={<Award />} title="Certification" desc="Industry-recognized credentials to boost your profile." />
              </div>
              <button className="btn btn-primary w-full mt-12 py-4 shadow-xl shadow-blue-200">Apply for Next Cohort</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const YouthStat = ({ count, label }) => (
  <div>
    <span className="block text-4xl font-black text-white mb-1">{count}</span>
    <span className="text-xs text-blue-200 font-bold uppercase tracking-widest">{label}</span>
  </div>
);

const CurriculumItem = ({ icon, title, desc }) => (
  <div className="flex gap-6 group">
    <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-white group-hover:shadow-md transition-all">
      {React.cloneElement(icon, { size: 28 })}
    </div>
    <div>
      <h4 className="text-xl font-bold text-slate-900 mb-2">{title}</h4>
      <p className="text-slate-600 leading-relaxed">{desc}</p>
    </div>
  </div>
);

const PathStep = ({ icon, title, desc }) => (
  <div className="flex gap-6">
    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-blue-600 shadow-sm shrink-0 border border-slate-100">
      {React.cloneElement(icon, { size: 24 })}
    </div>
    <div>
      <h4 className="font-bold text-slate-800">{title}</h4>
      <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
    </div>
  </div>
);

export default YouthProgram;
