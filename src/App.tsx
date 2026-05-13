/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useSpring } from "motion/react";
import { 
  Github, 
  Linkedin, 
  Mail, 
  Download, 
  ChevronRight,
  Code2,
  Trophy,
  Dumbbell,
  Users,
  MapPin,
  ExternalLink
} from "lucide-react";
import { useState, useEffect } from "react";

const PROJECTS = [
  {
    title: "Machine Learning Lab",
    desc: "Implementing fundamental algorithms and exploring neural networks for predictive analysis.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    link: "https://github.com/kadenhoang/MachineLearning",
    tag: "AI / Python"
  },
  {
    title: "Project Architecture",
    desc: "A refined collection of full-stack applications showcasing modular design patterns.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
    link: "https://github.com/kadenhoang/projects",
    tag: "Full Stack"
  },
  {
    title: "Harvard CS50 Excellence",
    desc: "Solving complex computational problems using C, Python, and SQL with rigorous logic.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800",
    link: "https://github.com/kadenhoang/HarvardCS50",
    tag: "Core CS"
  },
  {
    title: "Algorithm Mastery",
    desc: "Daily implementation of high-efficiency data structures and algorithmic challenges.",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&q=80&w=800",
    link: "https://github.com/kadenhoang/Practice",
    tag: "Algorithms"
  }
];

const SKILLS = [
  { category: "Languages", items: ["Python", "Java", "C++"], icon: Code2 },
  { category: "Tools", items: ["VS Code", "Eclipse", "GitHub"], icon: Github },
  { category: "Leadership", items: ["Mentorship", "Adaptability", "Teamwork"], icon: Users },
];

const EXPERIENCE = [
  {
    title: "Resident Advisor",
    org: "UW - Stout",
    period: "2025 - Present",
    desc: "Leading community development and student mentorship.",
    icon: Users,
    image: "https://images.unsplash.com/photo-1541339907198-e08756ebafe3?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Fashion Model Mentor",
    org: "Xuan Lan Academy",
    period: "2017 - 2024",
    desc: "Cultivating confidence and technical skills in trainees.",
    icon: Trophy,
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=600"
  },
  {
    title: "Freelance Fitness Trainer",
    org: "Hanoi, Vietnam",
    period: "2014 - 2024",
    desc: "Custom high-performance physique and health optimization.",
    icon: Dumbbell,
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=600"
  }
];

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-bg-dark text-ink font-sans transition-colors overflow-x-hidden">
      <motion.div className="fixed top-0 left-0 right-0 h-[2px] bg-accent z-[100] origin-left" style={{ scaleX }} />

      {/* Condensed Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? "bg-bg-dark/95 backdrop-blur-sm py-3 border-b border-white/5" : "bg-transparent py-6"}`}>
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-4">
            <a href="/resume.pdf" download className="md:hidden flex items-center space-x-1 bg-accent text-bg-dark px-3 py-1 text-[9px] font-bold uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all">
              <Download className="w-3 h-3" />
              <span>CV</span>
            </a>
            <div className="serif text-xl font-light tracking-tight flex items-center gap-2">
              vu <span className="font-semibold italic text-accent">hoang</span>
            </div>
          </div>
          
          <div className="flex items-center gap-8">
            <div className="hidden md:flex space-x-8 items-center">
              {["Experience", "Projects", "Education", "Contact"].map((item) => (
                <a key={item} href={`#${item.toLowerCase()}`} className="nav-link">
                  {item}
                </a>
              ))}
              <a href="/resume.pdf" download className="flex items-center space-x-2 bg-accent text-bg-dark px-4 py-1.5 text-[9px] font-bold uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all">
                <Download className="w-3 h-3" />
                <span>CV PDF</span>
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Condensed Hero */}
      <section className="relative pt-24 pb-8 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[9px] uppercase tracking-[0.4em] accent-text font-bold">Future AI Engineer • Menomonie, WI</span>
              <div className="h-[1px] w-12 bg-accent/30" />
            </div>
            <h1 className="serif text-5xl md:text-8xl font-light leading-[0.9] tracking-tighter mb-6 italic">
              Crafting AI <br />
              <span className="accent-text not-italic font-normal">With Intent.</span>
            </h1>
            <p className="text-sm text-dim max-w-lg mb-8 font-light leading-relaxed">
              Computer Science student at University of Wisconsin–Stout. Bridging a decade of specialized mentorship into modern software engineering and machine learning.
            </p>
            
            <div className="flex flex-wrap items-center gap-6 mb-8">
              <a href="/resume.pdf" download className="flex items-center space-x-3 bg-accent text-bg-dark px-6 py-3 text-xs font-bold uppercase tracking-[0.2em] hover:brightness-110 active:scale-95 transition-all group shadow-xl">
                <Download className="w-4 h-4 group-hover:bounce" />
                <span>Download Resume (PDF)</span>
              </a>
            </div>
            
            <div className="flex flex-wrap items-center gap-8">
              <a href="mailto:Hoangg1182@my.uwstout.edu" className="serif text-lg border-b border-accent/20 pb-0.5 hover:text-accent transition-colors flex items-center gap-2">
                <Mail className="w-4 h-4 opacity-50" />
                Hoangg1182@my.uwstout.edu
              </a>
              <div className="flex gap-5">
                <a href="https://www.linkedin.com/in/vuhoang1995/" target="_blank" rel="noreferrer" className="text-dim hover:text-white transition-all"><Linkedin className="w-5 h-5" /></a>
                <a href="https://github.com/kadenhoang" target="_blank" rel="noreferrer" className="text-dim hover:text-white transition-all"><Github className="w-5 h-5" /></a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* GitHub Activity Section */}
      <section className="py-8 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="glass-card p-6 border-white/5 relative group/gh">
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center gap-4">
                <Github className="w-5 h-5 text-accent" />
                <h2 className="serif text-2xl font-light italic">GitHub <span className="accent-text not-italic">Contributions</span></h2>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-[9px] text-dim font-bold uppercase tracking-widest transition-all">Live Tracker</span>
              </div>
            </div>
            <div className="overflow-x-auto pb-2 scrollbar-hide">
              <img 
                src="https://ghchart.rshah.org/C5A059/kadenhoang" 
                alt="GitHub contribution chart" 
                className="min-w-[800px] md:min-w-0 w-full opacity-90 transition-opacity"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="mt-4 flex justify-end">
              <a href="https://github.com/kadenhoang" target="_blank" rel="noreferrer" className="text-[9px] uppercase tracking-widest text-dim hover:text-white flex items-center gap-2 transition-colors">
                View Full Profile <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Experience - Grid Style with Images */}
      <section id="experience" className="py-12 bg-white/[0.01] border-y border-white/5 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="serif text-4xl mb-8 italic text-center lg:text-left">The <span className="accent-text not-italic">Background</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-1 bg-white/5 border border-white/5 overflow-hidden">
            {EXPERIENCE.map((exp, i) => (
              <div key={i} className="relative group overflow-hidden aspect-[16/11]">
                <img 
                  src={exp.image} 
                  alt={exp.title} 
                  className="absolute inset-0 w-full h-full object-cover opacity-30 grayscale transition-all duration-700 group-hover:scale-110 group-hover:opacity-60 group-hover:grayscale-0"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-dark via-bg-dark/40 to-transparent" />
                <div className="relative h-full p-8 flex flex-col justify-between z-10">
                  <div className="flex justify-between items-start">
                    <span className="text-[10px] tracking-widest uppercase text-dim">{exp.period}</span>
                    <exp.icon className="w-4 h-4 text-accent/50 group-hover:text-accent transition-colors" />
                  </div>
                  <div>
                    <h3 className="serif text-2xl font-light mb-1">{exp.title}</h3>
                    <p className="accent-text text-[9px] uppercase tracking-widest mb-2">{exp.org}</p>
                    <p className="text-[11px] text-dim leading-relaxed font-light">{exp.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects - Compact Grid with Images */}
      <section id="projects" className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="serif text-4xl mb-8 italic">Selected <span className="accent-text not-italic">Artifacts</span></h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {PROJECTS.map((project, i) => (
              <motion.a 
                href={project.link} 
                key={i} 
                target="_blank" 
                rel="noreferrer"
                whileHover={{ y: -5 }}
                className="project-card group relative overflow-hidden flex flex-col pt-48"
              >
                <div className="absolute inset-x-1 top-1 h-44 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/80 to-transparent" />
                </div>
                <div className="p-6 relative">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-[9px] uppercase tracking-widest text-dim">{project.tag}</span>
                    <ChevronRight className="w-4 h-4 accent-text translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all" />
                  </div>
                  <h3 className="serif text-3xl font-light mb-2">{project.title}</h3>
                  <p className="text-[11px] text-dim leading-relaxed font-light">{project.desc}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Education & Skills - Condensed Row */}
      <section className="py-12 px-6 border-t border-white/5">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div id="education">
            <h2 className="serif text-4xl mb-6 italic underline underline-offset-[12px] decoration-accent/20">Academic <span className="accent-text not-italic">Path</span></h2>
            <div className="space-y-6">
              <div className="relative pl-6 border-l border-accent/30">
                <h4 className="text-xl serif font-light">Bachelor of Science: Computer Science</h4>
                <p className="text-[11px] text-dim mt-0.5">UW–Stout • 2025 - 2028 • <span className="text-white">GPA 3.8/4.0</span></p>
                <div className="flex flex-wrap gap-2 mt-3">
                  {["Dean's List", "CS50 Excellence", "International Scholar"].map(b => (
                    <span key={b} className="text-[9px] uppercase tracking-widest border border-white/10 px-2 py-0.5 bg-white/[0.02]">{b}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div id="skills">
            <h2 className="serif text-4xl mb-6 italic underline underline-offset-[12px] decoration-accent/20">Technical <span className="accent-text not-italic">Core</span></h2>
            <div className="grid grid-cols-1 gap-2">
              {SKILLS.map((s, i) => (
                <div key={i} className="flex items-center justify-between p-3 border border-white/5 bg-white/[0.01] group hover:border-accent/30 transition-all">
                  <div className="flex items-center gap-4">
                    <s.icon className="w-4 h-4 text-accent/70" />
                    <span className="text-[10px] uppercase tracking-widest text-dim w-24">{s.category}</span>
                    <h4 className="serif text-lg font-light">{s.items.join(" / ")}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Condensed Footer/Contact */}
      <footer id="contact" className="py-16 px-6 border-t border-white/5 bg-black/40 text-center">
        <div className="max-w-6xl mx-auto">
          <p className="text-[10px] uppercase tracking-[0.4em] text-accent font-bold mb-6">Connect</p>
          <h2 className="serif text-5xl font-light italic mb-10 leading-tight">
            Ready for the <span className="accent-text not-italic">Next Mission.</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-10">
            <a href="mailto:Hoangg1182@my.uwstout.edu" className="nav-link !text-xs lowercase hover:text-accent">Email</a>
            <a href="https://www.linkedin.com/in/vuhoang1995/" target="_blank" rel="noreferrer" className="nav-link !text-xs lowercase hover:text-accent">LinkedIn</a>
            <a href="https://github.com/kadenhoang" target="_blank" rel="noreferrer" className="nav-link !text-xs lowercase hover:text-accent">GitHub</a>
          </div>
          <div className="mt-16 flex justify-between items-center text-[9px] uppercase tracking-widest text-dim/50 border-t border-white/5 pt-8">
            <p>© Vu Hoang 2026</p>
            <div className="flex items-center gap-2"><MapPin className="w-3 h-3" /> Menomonie, WI</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
