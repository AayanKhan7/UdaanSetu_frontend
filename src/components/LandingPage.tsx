import React, { useState } from "react";
import { ArrowRight, CheckCircle, Users, BookOpen, Briefcase, Menu, X, Linkedin, Twitter, Facebook, Star } from "lucide-react";

interface LandingPageProps {
  onNavigate: (page: string) => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navbar */}
      <nav className="bg-card/70 backdrop-blur-lg border-b border-border sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            {/* Logo */}
            <div className="flex items-center gap-3 cursor-pointer group" onClick={() => onNavigate('landing')}>
              <div className="w-10 h-10 bg-blue-600 text-white flex items-center justify-center rounded-lg shadow-lg group-hover:shadow-blue-500/50 transition-all duration-300">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <span className="text-foreground group-hover:text-blue-500 transition-colors">
                UdaanSetu
              </span>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => onNavigate('landing')} className="text-muted-foreground hover:text-blue-500 transition-colors">Home</button>
              <button className="text-muted-foreground hover:text-blue-500 transition-colors">About</button>
              <button className="text-muted-foreground hover:text-blue-500 transition-colors">Services</button>
              <button onClick={() => onNavigate('login')} className="px-6 py-2.5 text-blue-500 border border-border rounded-lg hover:bg-blue-500/10 transition-all">
                Login
              </button>
              <button onClick={() => onNavigate('signup')} className="px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all transform hover:-translate-y-0.5">
                Get Started
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-muted-foreground hover:text-blue-500">
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-card border-t border-border absolute w-full shadow-2xl">
            <div className="px-4 pt-2 pb-6 space-y-2">
              <button onClick={() => onNavigate('landing')} className="block w-full text-left px-3 py-3 text-foreground hover:bg-accent rounded-lg">Home</button>
              <button onClick={() => onNavigate('login')} className="block w-full text-left px-3 py-3 text-foreground hover:bg-accent rounded-lg">Login</button>
              <button onClick={() => onNavigate('signup')} className="block w-full mt-4 px-3 py-3 bg-blue-600 text-white text-center rounded-lg">Get Started</button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl -z-10 pointer-events-none">
            <div className="absolute top-20 left-0 w-72 h-72 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
            <div className="absolute top-20 right-0 w-72 h-72 bg-green-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center">
          {/* Left Content */}
          <div className="md:w-1/2 z-10 text-center md:text-left pt-8 md:pt-0 animate-slide-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border shadow-sm text-blue-500 text-xs uppercase tracking-wider mb-6">
              <Star size={14} className="fill-blue-500" /> 
              Launch Your Career
            </div>
            <h1 className="mb-6">
              Your Intelligent <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-blue-400 to-green-500">
                Bridge to Success
              </span>
            </h1>
            <p className="text-muted-foreground mb-10 max-w-2xl mx-auto md:mx-0">
              UdaanSetu connects aspiring professionals with elite mentorship, curated opportunities, and the skills needed to redefine their future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button onClick={() => onNavigate('signup')} className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg hover:shadow-lg hover:shadow-blue-500/30 transition transform hover:-translate-y-1 flex items-center justify-center gap-2">
                Start Your Journey <ArrowRight size={20} />
              </button>
              <button onClick={() => onNavigate('login')} className="px-8 py-4 bg-card text-foreground rounded-lg border border-border hover:border-blue-500 hover:bg-blue-500/10 transition">
                Existing User?
              </button>
            </div>
            
            <div className="mt-12 flex flex-wrap items-center justify-center md:justify-start gap-y-2 gap-x-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2"><CheckCircle size={18} className="text-green-500" /> Free Registration</div>
              <div className="flex items-center gap-2"><CheckCircle size={18} className="text-green-500" /> Expert Mentors</div>
              <div className="flex items-center gap-2"><CheckCircle size={18} className="text-green-500" /> Verified Jobs</div>
            </div>
          </div>

          {/* Right Image/Graphic */}
          <div className="md:w-1/2 mt-16 md:mt-0 relative z-10 flex justify-center animate-float">
             <div className="relative w-full max-w-lg aspect-square">
               
               {/* Main Card */}
               <div className="absolute inset-4 bg-card/40 backdrop-blur-2xl rounded-3xl shadow-2xl border border-border p-8 flex flex-col gap-6">
                   <div className="bg-card/80 p-5 rounded-2xl shadow-sm border border-border flex items-center gap-4 hover:scale-105 transition-transform duration-300">
                       <div className="p-3.5 bg-blue-500/20 text-blue-500 rounded-xl"><Briefcase size={24} /></div>
                       <div>
                           <h3 className="text-foreground">Job Opportunities</h3>
                           <p className="text-sm text-muted-foreground">500+ Companies hiring</p>
                       </div>
                   </div>
                   <div className="bg-card/80 p-5 rounded-2xl shadow-sm border border-border flex items-center gap-4 ml-8 hover:scale-105 transition-transform duration-300 delay-75">
                       <div className="p-3.5 bg-green-500/20 text-green-500 rounded-xl"><BookOpen size={24} /></div>
                       <div>
                           <h3 className="text-foreground">Skill Development</h3>
                           <p className="text-sm text-muted-foreground">Curated learning paths</p>
                       </div>
                   </div>
                   <div className="bg-card/80 p-5 rounded-2xl shadow-sm border border-border flex items-center gap-4 hover:scale-105 transition-transform duration-300 delay-150">
                       <div className="p-3.5 bg-blue-400/20 text-blue-400 rounded-xl"><Users size={24} /></div>
                       <div>
                           <h3 className="text-foreground">Mentorship</h3>
                           <p className="text-sm text-muted-foreground">1-on-1 Guidance</p>
                       </div>
                   </div>
               </div>
             </div>
          </div>
        </div>
      </section>
      
      {/* Features Strip */}
      <div className="bg-card/50 backdrop-blur-sm py-16 relative border-t border-b border-border">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-green-500 to-blue-500"></div>
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
              <div className="p-4">
                  <h3 className="text-transparent bg-clip-text bg-gradient-to-b from-foreground to-muted-foreground">10k+</h3>
                  <p className="text-muted-foreground uppercase text-sm tracking-wide">Active Students</p>
              </div>
               <div className="p-4 border-t md:border-t-0 md:border-l border-border">
                  <h3 className="text-transparent bg-clip-text bg-gradient-to-b from-foreground to-muted-foreground">95%</h3>
                  <p className="text-muted-foreground uppercase text-sm tracking-wide">Placement Rate</p>
              </div>
               <div className="p-4 border-t md:border-t-0 md:border-l border-border">
                  <h3 className="text-transparent bg-clip-text bg-gradient-to-b from-foreground to-muted-foreground">500+</h3>
                  <p className="text-muted-foreground uppercase text-sm tracking-wide">Corporate Partners</p>
              </div>
          </div>
      </div>

      {/* Footer */}
      <footer className="bg-card border-t border-border pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-blue-600 text-white flex items-center justify-center rounded-lg">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <span className="text-foreground">UdaanSetu</span>
                </div>
                <div className="flex gap-4">
                    <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-muted-foreground hover:bg-blue-600 hover:text-white transition-all cursor-pointer"><Linkedin size={18}/></div>
                    <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-muted-foreground hover:bg-blue-600 hover:text-white transition-all cursor-pointer"><Twitter size={18}/></div>
                    <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-muted-foreground hover:bg-blue-600 hover:text-white transition-all cursor-pointer"><Facebook size={18}/></div>
                </div>
            </div>
            <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
                <p>© 2025 UdaanSetu. All rights reserved.</p>
                <div className="flex gap-8 mt-4 md:mt-0">
                    <a href="#" className="hover:text-blue-500 transition">Privacy</a>
                    <a href="#" className="hover:text-blue-500 transition">Terms</a>
                    <a href="#" className="hover:text-blue-500 transition">Cookies</a>
                </div>
            </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
