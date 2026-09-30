import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  Users, 
  Globe, 
  TrendingUp,
  Briefcase,
  Award,
  Zap,
  Rocket
} from 'lucide-react';

// Hero Stats Component
const StatItem = ({ label, value, sublabel }) => (
  <div className="flex flex-col">
    <div className="text-4xl lg:text-5xl font-black text-blue-600 mb-1">{value}</div>
    <div className="text-slate-900 font-bold text-sm lg:text-base">{label}</div>
    <div className="text-slate-500 text-xs mt-0.5">{sublabel}</div>
  </div>
);

const Home = () => {
  return (
    <div className="flex flex-col">
      {/* Expansive Hero Section */}
      <section className="relative min-h-[85vh] flex items-center pt-24 pb-32 overflow-hidden bg-gradient-to-br from-white via-blue-50/50 to-white">
        {/* Background Decorative Elements */}
        <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[60%] bg-blue-100/40 blur-[120px] rounded-full -z-10 animate-pulse"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[30%] h-[50%] bg-purple-100/30 blur-[120px] rounded-full -z-10"></div>
        
        <div className="container max-w-[1440px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          {/* Hero Content */}
          <div className="lg:col-span-7 space-y-10">
            <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-white border border-blue-100 shadow-sm">
              <span className="flex h-2.5 w-2.5 rounded-full bg-blue-600 animate-ping"></span>
              <span className="text-[14px] font-black uppercase tracking-widest text-blue-700">Leading HR Consulting in East Africa</span>
            </div>
            
            <h1 className="text-hero font-black text-slate-950 tracking-[-0.03em]">
              Transform Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">Human Resources</span> <br />
              Strategy
            </h1>
            
            <p className="text-xl lg:text-2xl text-slate-600 font-medium leading-relaxed max-w-2xl">
              Inflecxion HR Consulting delivers innovative, tailored human resource solutions that empower businesses across Kenya and East Africa to thrive.
            </p>
            
            <div className="flex flex-wrap gap-5 pt-4">
              <Link to="/contact" className="bg-blue-600 text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-blue-700 transition-all shadow-2xl shadow-blue-200 flex items-center gap-3 active:scale-95">
                Book Discovery Call
                <ArrowRight size={24} />
              </Link>
              <Link to="/services/hr" className="bg-white text-slate-900 border-2 border-slate-100 px-10 py-5 rounded-2xl font-black text-lg hover:border-blue-600 hover:text-blue-600 transition-all flex items-center gap-3">
                Explore Services
              </Link>
            </div>

            {/* Featured Card Integrated */}
            <div className="mt-16 bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.08)] max-w-xl group hover:-translate-y-2 transition-all duration-500">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-blue-100 shrink-0">
                  <Rocket size={32} />
                </div>
                <div>
                  <div className="inline-block px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-[10px] font-black uppercase tracking-widest mb-3">Featured Program</div>
                  <h3 className="text-xl font-black text-slate-950 mb-2">Work Readiness Program</h3>
                  <p className="text-slate-600 font-medium mb-4">FREE digital & tech skills training for youth with guaranteed job placement.</p>
                  <Link to="/work-readiness-program" className="text-blue-600 font-black flex items-center gap-2 group-hover:gap-4 transition-all">
                    Learn More & Apply
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Large Floating Stats Card */}
          <div className="lg:col-span-5 relative lg:block hidden">
            <div className="relative z-10 bg-white/60 backdrop-blur-3xl border border-white p-12 rounded-[3.5rem] shadow-[0_40px_100px_-20px_rgba(37,99,235,0.12)]">
              <div className="grid grid-cols-1 gap-12">
                <StatItem 
                  value="500+" 
                  label="Organizations" 
                  sublabel="Empowered across the region" 
                />
                <StatItem 
                  value="98%" 
                  label="Client Satisfaction" 
                  sublabel="Proven track record of success" 
                />
                <div className="pt-6 border-t border-slate-100 grid grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="text-slate-400 font-bold uppercase tracking-widest text-[10px]">Headquarters</div>
                    <div className="text-slate-900 font-black text-sm uppercase">Nairobi, Kenya</div>
                  </div>
                  <div className="space-y-3">
                    <div className="text-slate-400 font-bold uppercase tracking-widest text-[10px]">Expertise</div>
                    <div className="text-slate-900 font-black text-sm uppercase">Certified HR Pros</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Visual Deco */}
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-blue-600/5 rounded-full -z-10 animate-spin-slow"></div>
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-purple-600/5 rounded-full -z-10"></div>
          </div>
        </div>
      </section>

      {/* Trust Wall - Expansive */}
      <section className="py-24 bg-white border-y border-slate-50 overflow-hidden">
        <div className="container max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
            <div className="shrink-0">
              <h4 className="text-slate-400 font-black uppercase tracking-[0.3em] text-[11px] mb-2 text-center lg:text-left">Trusted By Industry Leaders</h4>
              <p className="text-slate-900 font-black text-lg max-w-[200px] text-center lg:text-left leading-tight">Partners who grow with us since 2012</p>
            </div>
            <div className="flex-grow grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 lg:gap-20 grayscale opacity-40 items-center justify-center">
              {['LOGO 1', 'LOGO 2', 'LOGO 3', 'LOGO 4', 'LOGO 5', 'LOGO 6'].map(logo => (
                <div key={logo} className="font-black text-2xl tracking-tighter text-slate-900 text-center">{logo}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Expansive Grid */}
      <section className="py-32 bg-slate-50">
        <div className="container max-w-[1440px] mx-auto px-6 lg:px-12 text-center mb-24">
          <div className="inline-flex px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-[12px] font-black uppercase tracking-widest mb-6">Our Impact</div>
          <h2 className="text-4xl lg:text-6xl font-black text-slate-950 tracking-tight leading-tight">Why Leading Organizations <br /> Choose Inflecxion</h2>
        </div>
        
        <div className="container max-w-[1440px] mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            { 
              title: "Strategic HR Experts", 
              desc: "Deep industry knowledge paired with local market insights to drive results.", 
              icon: <Briefcase size={32} />,
              color: "blue"
            },
            { 
              title: "98% Client Success", 
              desc: "A decade of achieving transformative growth for diverse organizations.", 
              icon: <Award size={32} />,
              color: "purple"
            },
            { 
              title: "Tailored Solutions", 
              desc: "We don't believe in one-size-fits-all. Every solution is custom-crafted.", 
              icon: <Zap size={32} />,
              color: "amber"
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-white p-12 rounded-[2.5rem] shadow-premium hover:shadow-blue-glow transition-all duration-500 group">
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-10 transition-transform duration-500 group-hover:rotate-12 bg-blue-50 text-blue-600`}>
                {item.icon}
              </div>
              <h3 className="text-2xl font-black text-slate-950 mb-5">{item.title}</h3>
              <p className="text-slate-600 text-lg font-medium leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
