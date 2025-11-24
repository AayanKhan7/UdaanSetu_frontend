import React, { useState } from "react";
import {
  ArrowRight,
  CheckCircle,
  Users,
  BookOpen,
  Briefcase,
  Menu,
  X,
  Linkedin,
  Twitter,
  Facebook,
  Star,
  Sparkles,
  GraduationCap,
  Search,
  Layers3,
  MessageCircle,
  HelpCircle,
  ChevronDown,
} from "lucide-react";

// --- INTERFACES ---
interface LandingPageProps {
  onNavigate: (page: string) => void;
}

interface ComponentProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
  className?: string;
}

const FeatureCard: React.FC<ComponentProps> = ({
  icon,
  title,
  desc,
  className = "",
}) => (
  <div
    className={`bg-card/90 p-4 sm:p-5 rounded-xl shadow-md border border-border flex items-center gap-4 transition duration-300 hover:shadow-blue-500/30 ${className}`}
    tabIndex={0}
    role="article"
    aria-label={title}
  >
    <div className="p-3.5 bg-blue-500/20 text-blue-500 rounded-xl flex-shrink-0">
      {icon}
    </div>
    <div>
      <h3 className="text-foreground text-base sm:text-lg font-semibold">
        {title}
      </h3>
      <p className="text-sm text-muted-foreground">{desc}</p>
    </div>
  </div>
);

const AboutCard: React.FC<ComponentProps> = ({ icon, title, desc }) => (
  <div className="p-6 sm:p-8 bg-card border border-border rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
    <div className="w-12 h-12 mb-4 text-blue-600 mx-auto" aria-hidden>
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-3">{title}</h3>
    <p className="text-muted-foreground">{desc}</p>
  </div>
);

const ServiceCard: React.FC<ComponentProps> = ({ icon, title, desc }) => (
  <div className="p-6 sm:p-8 bg-card border border-border rounded-xl text-left hover:border-blue-500 transition-all">
    <div className="w-12 h-12 p-3.5 bg-green-500/20 text-green-500 rounded-xl mb-4">
      {icon}
    </div>
    <h3 className="text-lg sm:text-xl font-semibold mb-2">{title}</h3>
    <p className="text-muted-foreground text-sm">{desc}</p>
  </div>
);

const StepCard: React.FC<{ step: string; title: string; desc: string }> = ({
  step,
  title,
  desc,
}) => (
  <div className="relative text-center md:text-left p-6">
    <div className="flex items-center justify-center md:justify-start">
      <div
        className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-600 text-white font-bold text-lg shadow-md mb-4 flex-shrink-0"
        aria-hidden
      >
        {step}
      </div>
      {/* simplified separator line (no invalid group pseudo selectors) */}
      <div className="hidden md:block absolute top-10 left-12 w-[calc(100%-48px)] h-px bg-border" />
    </div>
    <h4 className="text-xl font-semibold mb-2">{title}</h4>
    <p className="text-muted-foreground">{desc}</p>
  </div>
);

const TestimonialCard: React.FC<{ name: string; text: string }> = ({
  name,
  text,
}) => (
  <div className="p-6 sm:p-8 bg-card border border-border rounded-xl shadow-md text-left flex flex-col h-full hover:shadow-lg transition-all">
    <div className="flex mb-4" aria-hidden>
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
      ))}
    </div>
    <blockquote className="italic text-foreground flex-grow">
      "{text}"
    </blockquote>
    <p className="font-semibold mt-4">~ {name}</p>
  </div>
);

const FAQItem: React.FC<{ question: string; answer: string }> = ({
  question,
  answer,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border border-border rounded-lg bg-card/70 backdrop-blur-sm shadow-sm">
      <button
        type="button"
        className="flex justify-between items-center w-full text-left p-4 sm:p-5 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls={`faq-${question.replace(/\s+/g, "-").toLowerCase()}`}
      >
        <span className="font-medium text-base sm:text-lg">{question}</span>
        <ChevronDown
          size={24}
          className={`text-blue-500 transition-transform ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
          aria-hidden
        />
      </button>
      {isOpen && (
        <div
          id={`faq-${question.replace(/\s+/g, "-").toLowerCase()}`}
          className="px-4 sm:px-5 pb-4 sm:pb-5 pt-0 text-muted-foreground border-t border-border mt-1"
        >
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

const SocialIcon: React.FC<{ icon: React.ReactNode; label?: string }> = ({
  icon,
  label,
}) => (
  <div
    className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-muted-foreground hover:bg-blue-600 hover:text-white transition-all cursor-pointer"
    role="button"
    tabIndex={0}
    aria-label={label ?? "social"}
  >
    {icon}
  </div>
);

const LandingPage: React.FC<LandingPageProps> = ({ onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsMenuOpen(false);
    }
  };

  const toggleMenu = () => setIsMenuOpen((v) => !v);

  const handleLogoKey = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" || e.key === " ") {
      onNavigate("landing");
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <nav
        className="bg-card/70 backdrop-blur-lg border-b border-border sticky top-0 z-50"
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 sm:h-20 items-center">
            <div
              className="flex items-center gap-3 cursor-pointer group"
              onClick={() => onNavigate("landing")}
              role="button"
              tabIndex={0}
              onKeyDown={handleLogoKey}
              aria-label="Go to home"
            >
              <div
                className="w-20 h-20 sm:w-10 sm:h-10 rounded-lg shadow-lg overflow-hidden mt-2"
                role="img"
                aria-label="UdaanSetu logo"
              >
                <img
                  src="src/images/logo1.png"
                  alt="UdaanSetu Logo"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Desktop Nav */}
            <div
              className="hidden md:flex items-center space-x-8"
              role="navigation"
            >
              <button
                type="button"
                onClick={() => onNavigate("landing")}
                className="text-muted-foreground hover:text-blue-500 transition-colors"
              >
                Home
              </button>
              <button
                type="button"
                onClick={() => handleScroll("about")}
                className="text-muted-foreground hover:text-blue-500 transition-colors"
              >
                About
              </button>
              <button
                type="button"
                onClick={() => handleScroll("services")}
                className="text-muted-foreground hover:text-blue-500 transition-colors"
              >
                Services
              </button>

              <button
                type="button"
                onClick={() => onNavigate("login")}
                className="px-6 py-2.5 text-blue-500 border border-border rounded-lg hover:bg-blue-500/10 transition-all focus:outline-none focus:ring-2 focus:ring-blue-300"
              >
                Login
              </button>
              <button
                type="button"
                onClick={() => onNavigate("signup")}
                className="px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all transform hover:-translate-y-0.5 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
              >
                Get Started
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                type="button"
                onClick={toggleMenu}
                className="text-muted-foreground hover:text-blue-500"
                aria-label="Toggle menu"
                aria-controls="mobile-menu"
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div
            id="mobile-menu"
            className="md:hidden bg-card border-t border-border absolute w-full shadow-2xl transition-all duration-300 ease-out"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              <button
                type="button"
                onClick={() => {
                  onNavigate("landing");
                  setIsMenuOpen(false);
                }}
                className="block w-full text-left px-3 py-3 text-foreground hover:bg-accent rounded-lg"
              >
                Home
              </button>
              <button
                type="button"
                onClick={() => {
                  handleScroll("about");
                }}
                className="block w-full text-left px-3 py-3 text-foreground hover:bg-accent rounded-lg"
              >
                About
              </button>
              <button
                type="button"
                onClick={() => {
                  handleScroll("services");
                }}
                className="block w-full text-left px-3 py-3 text-foreground hover:bg-accent rounded-lg"
              >
                Services
              </button>
              <button
                type="button"
                onClick={() => {
                  handleScroll("faq");
                }}
                className="block w-full text-left px-3 py-3 text-foreground hover:bg-accent rounded-lg"
              >
                FAQ
              </button>
              <button
                type="button"
                onClick={() => {
                  onNavigate("login");
                }}
                className="block w-full text-left px-3 py-3 text-foreground hover:bg-accent rounded-lg"
              >
                Login
              </button>
              <button
                type="button"
                onClick={() => {
                  onNavigate("signup");
                }}
                className="block w-full mt-4 px-3 py-3 bg-blue-600 text-white text-center rounded-lg"
              >
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>

      <section className="relative pt-16 pb-20 sm:pt-20 sm:pb-28 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl -z-10 pointer-events-none">
          <div className="absolute top-20 left-0 w-72 h-72 bg-blue-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70" />
          <div className="absolute top-20 right-0 w-72 h-72 bg-green-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* Left Content */}
          <div className="md:w-1/2 z-10 text-center md:text-left pt-8 md:pt-0">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-card border border-border shadow-sm text-blue-500 text-xs uppercase tracking-wider mb-6">
              <Sparkles size={14} className="fill-blue-500" />
              Your Career Accelerator
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight mb-6">
              Your Intelligent <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-blue-400 to-green-500">
                Bridge to Success
              </span>
            </h1>

            <p className="text-muted-foreground mb-10 max-w-xl mx-auto md:mx-0 text-base sm:text-lg">
              <span className="text-blue-400">UdaanSetu</span> connects aspiring
              professionals with elite mentorship,{" "}
              <br className="hidden lg:inline" /> curated opportunities, and the
              skills needed to redefine their future.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button
                type="button"
                onClick={() => onNavigate("signup")}
                className="px-6 sm:px-8 py-3 sm:py-4 mb-10 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg hover:shadow-lg hover:shadow-blue-500/30 transition transform hover:-translate-y-1 flex items-center justify-center gap-2 font-semibold text-sm sm:text-base"
              >
                Start Your Journey <ArrowRight size={20} />
              </button>
              <button
                type="button"
                onClick={() => onNavigate("login")}
                className="px-6 sm:px-8 py-3 sm:py-4 mb-10 border border-border text-foreground rounded-lg hover:shadow-lg transition transform hover:-translate-y-0.5 flex items-center justify-center gap-2 font-semibold text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-300"
                aria-label="Existing user sign in"
              >
                Existing User?
              </button>
            </div>

            <div className="sm:mt-12 flex flex-wrap items-center justify-center md:justify-start gap-3 sm:gap-x-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckCircle size={18} className="text-green-500" /> Free
                Registration
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={18} className="text-green-500" /> Expert
                Mentors
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={18} className="text-green-500" /> Verified
                Jobs
              </div>
            </div>
          </div>

          <div className="md:w-1/2 relative z-10 hidden md:flex items-center justify-center">
            <div className="relative w-full max-w-lg aspect-square">
              <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-card/40 backdrop-blur-2xl rounded-3xl shadow-2xl border border-border p-6 sm:p-8 
  flex flex-col gap-4 sm:gap-6 w-full max-w-sm mx-auto"
              >
                <FeatureCard
                  icon={<Briefcase />}
                  title="Job Opportunities"
                  desc="500+ Companies hiring"
                />
                <FeatureCard
                  icon={<BookOpen />}
                  title="Skill Development"
                  desc="Curated learning paths"
                  className="md:ml-10"
                />
                <FeatureCard
                  icon={<Users />}
                  title="Mentorship"
                  desc="1-on-1 Guidance"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="border-t border-border mt-10 mb-10" />

      <section id="about" className="py-16 sm:py-28 bg-card/30 mb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-7 text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-6">
            About UdaanSetu
          </h2>

          <p className="text-muted-foreground mb-10 max-w-2xl lg:max-w-4xl mx-auto leading-relaxed text-base sm:text-lg">
            UdaanSetu is a next-gen career development platform designed to
            connect youth with verified opportunities,{" "}
            <br className="hidden lg:inline" /> personalized mentorship, and
            real-world skills. We focus on making students industry-ready
            through adaptive learning, <br className="hidden lg:inline" />{" "}
            expert guidance, and a structured roadmap designed for high success.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 mt-12 sm:mt-20">
            <AboutCard
              icon={<Search size={32} />}
              title="Discover Opportunities"
              desc="Explore internships, jobs, scholarships & events curated precisely for your profile."
            />

            <AboutCard
              icon={<GraduationCap size={32} />}
              title="Grow with Skills"
              desc="Master essential soft & technical skills through guided, project-based learning modules."
            />

            <AboutCard
              icon={<Layers3 size={32} />}
              title="Build a Strong Profile"
              desc="Showcase achievements, verified certificates, and career progression in one professional portfolio."
            />
          </div>
        </div>
      </section>

      <div className="border-t border-border my-10 mb-10" />

      <section id="services" className="py-16 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold mb-10">
            Our Core Services ✨
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-10">
            <ServiceCard
              icon={<Briefcase size={30} />}
              title="Job Portal"
              desc="Verified jobs from trusted employers and exclusive early access postings."
            />
            <ServiceCard
              icon={<Users size={30} />}
              title="Mentorship"
              desc="Talk directly with top industry mentors for personalized career advice."
            />
            <ServiceCard
              icon={<BookOpen size={30} />}
              title="Skill Development"
              desc="Career-oriented courses, skill-checks, and real-world industrial tasks."
            />
            <ServiceCard
              icon={<Sparkles size={30} />}
              title="AI Career Tools"
              desc="Resume scoring, mock interviews, and personalized career path recommendations."
            />
          </div>
        </div>
      </section>

      {/* footer */}
      <footer className="bg-card border-t border-border pt-6 pb-6 sm:pt-16 sm:pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 sm:gap-8 mb-6 sm:mb-8">
            <div
              className="w-10 h-10 sm:w-10 sm:h-10 rounded-lg shadow-lg overflow-hidden mb-1"
              role="img"
              aria-label="UdaanSetu logo"
            >
              <img
                src="src/images/logo1.png"
                alt="UdaanSetu Logo"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex gap-3 sm:gap-4">
              <SocialIcon icon={<Linkedin size={18} />} label="LinkedIn" />
              <SocialIcon icon={<Twitter size={18} />} label="Twitter" />
              <SocialIcon icon={<Facebook size={18} />} label="Facebook" />
              <SocialIcon icon={<MessageCircle size={18} />} label="Messages" />
              <SocialIcon icon={<HelpCircle size={18} />} label="Help" />
            </div>
          </div>

          <div className="border-t border-border pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center text-xs sm:text-sm text-muted-foreground">
            <p className="text-center md:text-left">
              © 2025 UdaanSetu. All rights reserved.
            </p>
            <div className="flex gap-4 sm:gap-8 mt-4 md:mt-0">
              <a href="#" className="hover:text-blue-500 transition">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-blue-500 transition">
                Terms of Service
              </a>
              <a href="#" className="hover:text-blue-500 transition">
                Support
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
