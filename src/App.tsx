/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeView from './components/HomeView';
import AboutView from './components/AboutView';
import ServicesView from './components/ServicesView';
import ProjectsView from './components/ProjectsView';
import ContactView from './components/ContactView';
import MenuFlyout from './components/MenuFlyout';
import ScrollVideoBackground from './components/ScrollVideoBackground';
import { PageId } from './types';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [isScopingModalOpen, setIsScopingModalOpen] = useState<boolean>(false);

  return (
    <div className="relative min-h-screen bg-neutral-950 text-white font-sans overflow-x-hidden select-none">
      
      {/* Interactive GSAP ScrollTrigger controlled HTML5 video background */}
      <ScrollVideoBackground />

      {/* Underline deep shadow layer to maximize layout readability */}
      <div className="fixed inset-0 bg-neutral-950/40 z-0 pointer-events-none" />

      {/* Core Flex Layout Layer */}
      <div className="relative z-10 flex flex-col justify-between min-h-screen">
        
        {/* Navigation Head */}
        <Header 
          currentPage={currentPage} 
          setCurrentPage={setCurrentPage} 
          onOpenConsultation={() => setIsScopingModalOpen(true)} 
        />

        {/* Dynamic Pages viewport */}
        <main className="flex-grow w-full max-w-7xl mx-auto py-8 sm:py-12 relative z-20">
          {currentPage === 'home' && (
            <HomeView 
              setCurrentPage={setCurrentPage} 
              onOpenConsultation={() => setIsScopingModalOpen(true)} 
            />
          )}

          {currentPage === 'about' && <AboutView />}

          {currentPage === 'services' && <ServicesView />}

          {currentPage === 'projects' && <ProjectsView />}

          {currentPage === 'contact' && <ContactView />}
        </main>

        {/* Footer specifications */}
        <Footer setCurrentPage={setCurrentPage} />

      </div>

      {/* Global Scoping & Coordinate Reserve Modal */}
      <MenuFlyout 
        isOpen={isScopingModalOpen} 
        onClose={() => setIsScopingModalOpen(false)} 
        setCurrentPage={setCurrentPage}
      />

    </div>
  );
}
