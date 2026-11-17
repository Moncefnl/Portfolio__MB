import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SelectedWorks from './components/SelectedWorks';
import LiveWebApps from './components/LiveWebApps';
import TechStack from './components/TechStack';
import ExperienceJournal from './components/ExperienceJournal';
import Explorations from './components/Explorations';
import Stats from './components/Stats';
import ContactFooter from './components/ContactFooter';
import ResumeModal from './components/ResumeModal';
import ProjectModal from './components/ProjectModal';
import JournalModal from './components/JournalModal';
import ExplorationModal from './components/ExplorationModal';
import { Project, JournalEntry, ExplorationItem } from './types';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('hero');

  // Modals state
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedJournal, setSelectedJournal] = useState<JournalEntry | null>(null);
  const [selectedExploration, setSelectedExploration] = useState<ExplorationItem | null>(null);

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'works', 'web-apps', 'stack', 'experience', 'explorations', 'stats', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#0a0a0a] text-[#f5f5f5] font-body selection:bg-[#4E85BF]/40 selection:text-white overflow-x-hidden">
      {/* Ambient background dot grid */}
      <div className="fixed inset-0 pointer-events-none bg-dot-grid opacity-30 z-0" />
      {/* Ambient glowing luminous blur corner */}
      <div className="fixed -bottom-32 -right-32 w-[600px] h-[600px] bg-gradient-to-t from-[#4E85BF]/10 to-transparent blur-[140px] pointer-events-none z-0" />
      <div className="fixed -top-32 -left-32 w-[500px] h-[500px] bg-gradient-to-b from-[#89AACC]/5 to-transparent blur-[120px] pointer-events-none z-0" />

      {/* Section 1: Initial Loading Screen */}
      <AnimatePresence>
        {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      {/* Navigation Bar */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenResume={() => setIsResumeOpen(true)}
        onOpenContact={() => handleNavigate('contact')}
      />

      {/* Main Page Sections */}
      <main className="relative z-10">
        {/* Section 2: Hero */}
        <Hero
          onSeeWorks={() => handleNavigate('works')}
          onReachOut={() => handleNavigate('contact')}
          onOpenResume={() => setIsResumeOpen(true)}
        />

        {/* Section 3: Selected Works (Bento Grid) */}
        <SelectedWorks onSelectProject={(project) => setSelectedProject(project)} />

        {/* Section 3.5: Websites & Web Applications (Live Deployed Projects) */}
        <LiveWebApps />

        {/* Technical Architecture & Stack */}
        <TechStack />

        {/* Section 4: Experience & Journal Thoughts */}
        <ExperienceJournal onSelectJournal={(post) => setSelectedJournal(post)} />

        {/* Section 5: Explorations Parallax Playground */}
        <Explorations onSelectExploration={(item) => setSelectedExploration(item)} />

        {/* Section 6: Key Production Numbers & Stats */}
        <Stats />

        {/* Section 7: Contact & Video Footer with GSAP Marquee */}
        <ContactFooter />
      </main>

      {/* Modals & Lightboxes */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <JournalModal
        post={selectedJournal}
        onClose={() => setSelectedJournal(null)}
      />

      <ExplorationModal
        item={selectedExploration}
        onClose={() => setSelectedExploration(null)}
      />
    </div>
  );
}
