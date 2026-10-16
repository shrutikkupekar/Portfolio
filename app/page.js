'use client';
import NavHeader from './components/NavHeader';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import ExperienceSection from './components/sections/ExperienceSection';
import ProjectsSection from './components/sections/ProjectsSection';
import SkillsSection from './components/sections/SkillsSection';
import EducationSection from './components/sections/EducationSection';
import ContactSection from './components/sections/ContactSection';

export default function Home() {
  return (
    <>
      <NavHeader />
      <main style={{
        maxWidth: 1280,
        margin: '0 auto',
        paddingLeft: 'clamp(24px, 4vw, 64px)',
        paddingRight: 'clamp(24px, 4vw, 64px)',
      }}>
        <HeroSection />
        <hr className="section-divider" />
        <ProjectsSection />
        <hr className="section-divider" />
        <AboutSection />
        <hr className="section-divider" />
        <ExperienceSection />
        <hr className="section-divider" />
        <SkillsSection />
        <hr className="section-divider" />
        <EducationSection />
        <hr className="section-divider" />
        <ContactSection />
      </main>
    </>
  );
}
