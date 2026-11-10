import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Introduction } from './components/Introduction';
import { Problematization } from './components/Problematization';
import { Chapter1BrandPower } from './components/Chapters/Chapter1BrandPower';
import { Chapter2SportsMarketing } from './components/Chapters/Chapter2SportsMarketing';
import { Chapter3SocialAndAdvertising } from './components/Chapters/Chapter3SocialAndAdvertising';
import { Chapter4SalesStrategy } from './components/Chapters/Chapter4SalesStrategy';
import { Chapter5EmotionalMarketing } from './components/Chapters/Chapter5EmotionalMarketing';
import { Chapter6TargetAudience } from './components/Chapters/Chapter6TargetAudience';
import { Chapter7MichaelJordan } from './components/Chapters/Chapter7MichaelJordan';
import { Chapter8NikeVsAdidas } from './components/Chapters/Chapter8NikeVsAdidas';
import { Chapter9InnovationLoyalty } from './components/Chapters/Chapter9InnovationLoyalty';
import { Conclusion } from './components/Conclusion';
import { References } from './components/References';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('hero');

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-20% 0px -70% 0px',
        threshold: 0,
      }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => sections.forEach((sec) => observer.unobserve(sec));
  }, []);

  return (
    <div className="min-h-screen bg-[#080808] text-white selection:bg-white selection:text-black font-sans relative">
      {/* Fixed Navigation Bar */}
      <Navbar activeSection={activeSection} />

      {/* Main Content Flow */}
      <main>
        {/* 1. Hero with 3D Rotating Swoosh Canvas Scrub */}
        <Hero />

        {/* 2. Introduction: A Construção de um Império */}
        <Introduction />

        {/* 3. Problematization: O que fez a Nike se destacar? */}
        <Problematization />

        {/* 4. The 9 Strategic Chapters */}
        <Chapter1BrandPower />
        <Chapter2SportsMarketing />
        <Chapter3SocialAndAdvertising />
        <Chapter4SalesStrategy />
        <Chapter5EmotionalMarketing />
        <Chapter6TargetAudience />
        <Chapter7MichaelJordan />
        <Chapter8NikeVsAdidas />
        <Chapter9InnovationLoyalty />

        {/* 5. Conclusion: The Brand is More Than The Product */}
        <Conclusion />

        {/* 6. Documented References */}
        <References />
      </main>

      {/* 7. Institutional Footer */}
      <Footer />
    </div>
  );
};

export default App;
