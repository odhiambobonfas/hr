import React from 'react';
import { Target, Eye, Footprints, Award, CheckCircle2, Linkedin, Mail, Phone } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-white via-blue-50/30 to-white py-24 lg:py-32 border-b border-slate-100">
        <div className="container max-w-7xl mx-auto text-center px-6">
          <span className="text-blue-600 font-bold uppercase tracking-widest text-xs mb-6 block">About Inflecxion</span>
          <h1 className="text-5xl lg:text-6xl font-black text-slate-900 mb-8 tracking-tight">
            Transforming HR Across <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-700">Kenya & East Africa</span>
          </h1>
          <p className="text-lg text-slate-700 leading-relaxed mb-10 font-medium max-w-3xl mx-auto">
            Since 2018, we've been empowering organizations with strategic HR solutions that eliminate operational complexity, boost productivity, and unlock competitive advantage.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <button className="btn btn-primary px-8 py-4 font-semibold">Schedule a Meeting</button>
            <button className="btn btn-outline border-2 border-slate-300 text-slate-700 px-8 py-4 font-semibold hover:bg-slate-100">Learn More</button>
          </div>
        </div>
      </section>

      {/* Who We Are */}
      <section className="section-padding bg-white">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-6">
            <div>
              <h2 className="text-5xl font-black text-slate-900 mb-4">Who We Are</h2>
              <p className="text-base text-slate-700 leading-relaxed font-medium">
                <strong className="text-slate-900">Unified Human Resource Consulting Limited (UHRCL)</strong>, operating as <strong className="text-slate-900">Inflecxion</strong>, is a leading HR and business consulting firm headquartered in Nairobi, Kenya. Our team of certified consultants and HR specialists delivers practical, results-driven solutions designed to streamline operations, enhance productivity, and drive sustainable business growth.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Our Approach</h3>
              <p className="text-base text-slate-700 leading-relaxed font-medium">
                We combine cross-disciplinary expertise in operations, HR strategy, and organizational development to deliver bespoke solutions that address your unique challenges. We prioritize practical implementation over theory, building lasting partnerships that drive sustained performance improvement.
              </p>
            </div>
            <div className="flex gap-12 pt-3">
              <div className="space-y-2">
                <span className="block text-5xl font-black text-blue-600">500+</span>
                <span className="text-slate-600 font-semibold text-sm uppercase tracking-wider">Organizations Served</span>
              </div>
              <div className="space-y-2">
                <span className="block text-5xl font-black text-blue-600">6+</span>
                <span className="text-slate-600 font-semibold text-sm uppercase tracking-wider">Years of Excellence</span>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-slate-50 to-white p-10 rounded-2xl border-2 border-slate-200 shadow-sm">
            <h3 className="text-2xl font-bold mb-8 text-slate-900">Kenya Headquarters</h3>
            <ul className="space-y-7">
              <ContactItem icon={<Mail className="text-blue-600" />} title="Email" desc="info@inflecxion.com" />
              <ContactItem icon={<Phone className="text-blue-600" />} title="Phone" desc="+254 719 599 828" />
              <ContactItem icon={<Target className="text-blue-600" />} title="Address" desc="Maynard Close off, Waiyaki Way, Nairobi, Kenya" />
            </ul>
          </div>
        </div>
      </section>

      {/* Our Foundation */}
      <section className="section-padding bg-gradient-to-br from-slate-900 to-slate-950 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600/10 blur-3xl rounded-full pointer-events-none"></div>
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-5xl font-black mb-4 tracking-tight">Our Foundation</h2>
            <p className="text-slate-300 text-lg font-medium">Principles that guide every decision and relationship.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FoundationCard 
              icon={<Target size={40} className="text-blue-400" />}
              title="Our Mission"
              desc="Build lasting partnerships by delivering practical HR solutions that enhance operational efficiency, boost team performance, and drive competitive advantage."
            />
            <FoundationCard 
              icon={<Eye size={40} className="text-purple-400" />}
              title="Our Vision"
              desc="Be the preferred HR consulting partner across Kenya and East Africa, delivering innovative, practical solutions tailored to every industry."
            />
            <FoundationCard 
              icon={<Footprints size={40} className="text-amber-400" />}
              title="Our Approach"
              desc="Strategic, human-first consulting that combines cross-disciplinary expertise with agile implementation to solve your most complex HR challenges."
            />
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="section-padding bg-white">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-5xl font-black mb-4 tracking-tight text-slate-900">Meet Our Experts</h2>
            <p className="text-slate-600 text-lg font-medium">Our leadership team combines decades of HR consulting experience with proven expertise in organizational transformation and strategic workforce development.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <TeamMember 
              name="Dickson Mahenge"
              role="Organizational Change & Performance Expert"
              desc="Seasoned professional specializing in organizational transformation and performance management with extensive HR consulting background."
            />
            <TeamMember 
              name="Jane Mutisya"
              role="HR Management Professional"
              desc="Certified HR practitioner with deep expertise in team coaching, training program design, and employee development initiatives."
            />
            <TeamMember 
              name="Catherine M. Wamwangi"
              role="Quality Systems Trainer & Executive Coach"
              desc="Specialist in quality systems implementation and executive coaching focused on leadership excellence and organizational development."
            />
          </div>
        </div>
      </section>
    </div>
  );
};

const ContactItem = ({ icon, title, desc }) => (
  <li className="flex gap-4">
    <div className="w-12 h-12 bg-white rounded-lg shadow-sm flex items-center justify-center shrink-0 border border-slate-100">
      {icon}
    </div>
    <div>
      <span className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-1">{title}</span>
      <span className="text-slate-800 font-semibold">{desc}</span>
    </div>
  </li>
);

const FoundationCard = ({ icon, title, desc }) => (
  <div className="bg-slate-800/60 backdrop-blur-sm p-9 rounded-2xl border border-slate-700 hover:border-blue-500 transition-all duration-300 group">
    <div className="mb-6 group-hover:scale-110 transition-transform duration-300">{icon}</div>
    <h3 className="text-2xl font-bold mb-4 text-white">{title}</h3>
    <p className="text-slate-300 leading-relaxed font-medium">{desc}</p>
  </div>
);

const TeamMember = ({ name, role, desc }) => (
  <div className="group">
    <div className="aspect-[4/5] bg-gradient-to-br from-slate-200 to-slate-100 rounded-2xl mb-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
        <div className="flex gap-3">
          <a href="#" className="w-10 h-10 bg-white/20 backdrop-blur rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
            <Linkedin size={18} className="text-white" />
          </a>
          <a href="#" className="w-10 h-10 bg-white/20 backdrop-blur rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
            <Mail size={18} className="text-white" />
          </a>
        </div>
      </div>
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-2">{name}</h3>
    <p className="text-blue-600 font-semibold text-sm mb-3">{role}</p>
    <p className="text-slate-600 text-sm leading-relaxed font-medium">{desc}</p>
  </div>
);

export default About;
