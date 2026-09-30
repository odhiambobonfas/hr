import React from 'react';
import { Search, FastForward, Users, CheckCircle, ArrowRight, Star } from 'lucide-react';

const Recruitment = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-slate-50 py-24 lg:py-32">
        <div className="container max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center px-6">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-bold uppercase tracking-wider">
              Find Your Perfect Talent Match
            </div>
            <h1 className="text-5xl lg:text-7xl font-black text-slate-900 leading-[1.1]">
              <span className="text-blue-600">Talent Acquisition</span> That Drives Results
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed max-w-xl">
              We connect leading organizations with exceptional talent through our rigorous recruitment process and deep industry insights.
            </p>
            <div className="flex gap-4 pt-4">
              <button className="btn btn-primary px-8 py-4">Post a Job Role</button>
              <button className="btn btn-outline px-8 py-4">For Job Seekers</button>
            </div>
            <div className="flex items-center gap-8 pt-8">
              <RecruitStat count="2500+" label="Candidates Placed" />
              <RecruitStat count="300+" label="Partner Companies" />
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-blue-600/5 rotate-6 rounded-3xl"></div>
            <div className="relative bg-white p-6 rounded-3xl shadow-2xl border border-slate-100">
              <div className="grid grid-cols-1 gap-6">
                <RecruitStep number="01" title="Requirement Analysis" desc="We dive deep into your company culture and the specific requirements of the role." />
                <RecruitStep number="02" title="Talent Sourcing" desc="Using our extensive database and network to find high-potential candidates." />
                <RecruitStep number="03" title="Assessment & Screening" desc="Rigorous multi-stage interviews and skill assessments to filter for excellence." />
                <RecruitStep number="04" title="Final Selection" desc="We present only the top 3% of candidates who perfectly fit your criteria." />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recruitment Types */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Recruitment Expertise</h2>
            <p className="text-slate-600 text-lg">Specialized recruitment services tailored to your organizational needs, from executive search to mass hiring.</p>
          </div>
          <div className="grid grid-3 gap-8">
            <RecruitCard 
              icon={<Star className="text-amber-500" />}
              title="Executive Search"
              desc="High-level headhunting for leadership and specialized roles that require discretion and deep expertise."
            />
            <RecruitCard 
              icon={<Users className="text-blue-500" />}
              title="Permanent Recruitment"
              desc="Finding long-term talent that aligns with your company's mission and long-term goals."
            />
            <RecruitCard 
              icon={<FastForward className="text-purple-500" />}
              title="Mass Recruitment"
              desc="Efficiently scaling your workforce for new projects, branch openings, or seasonal demands."
            />
          </div>
        </div>
      </section>
    </div>
  );
};

const RecruitStat = ({ count, label }) => (
  <div>
    <span className="block text-3xl font-black text-slate-900">{count}</span>
    <span className="text-xs text-slate-500 font-bold uppercase tracking-widest">{label}</span>
  </div>
);

const RecruitStep = ({ number, title, desc }) => (
  <div className="flex gap-6 border-b border-slate-50 pb-6 last:border-0 last:pb-0">
    <span className="text-3xl font-black text-blue-100 italic">{number}</span>
    <div>
      <h4 className="font-bold text-slate-900 mb-1">{title}</h4>
      <p className="text-sm text-slate-500">{desc}</p>
    </div>
  </div>
);

const RecruitCard = ({ icon, title, desc }) => (
  <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300">
    <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mb-6">
      {React.cloneElement(icon, { size: 28 })}
    </div>
    <h3 className="text-2xl font-bold mb-4">{title}</h3>
    <p className="text-slate-600 leading-relaxed mb-6">{desc}</p>
    <button className="flex items-center gap-2 text-blue-600 font-bold hover:gap-4 transition-all">
      Learn More <ArrowRight size={18} />
    </button>
  </div>
);

export default Recruitment;
