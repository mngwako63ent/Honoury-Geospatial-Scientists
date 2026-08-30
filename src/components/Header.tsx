/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Compass, Menu, X, HelpCircle, Activity } from 'lucide-react';
import { LOGO_SVG_URL } from '../data';
import { PageId } from '../types';

interface HeaderProps {
  currentPage: PageId;
  setCurrentPage: (page: PageId) => void;
  onOpenConsultation: () => void;
}

export default function Header({ currentPage, setCurrentPage, onOpenConsultation }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: PageId; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services' }
  ];

  const handleNavClick = (id: PageId) => {
    setCurrentPage(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full px-4 sm:px-6 lg:px-8 py-4">
      {/* Container holding the glass header */}
      <div className="max-w-7xl mx-auto rounded-full liquid-glass px-6 py-3 flex items-center justify-between border border-white/5 shadow-2xl backdrop-blur-md">
        
        {/* Brand Logo & Name */}
        <div 
          onClick={() => handleNavClick('home')}
          className="flex flex-col items-center justify-center cursor-pointer group space-y-1 text-center"
        >
          <img 
            src="/BG removed HGS.png" 
            alt="HGS logo" 
            className="h-6 w-auto object-contain transition-transform duration-300 group-hover:scale-110" 
            referrerPolicy="no-referrer" 
          />
          <div className="flex flex-col items-center text-center">
            <span className="text-[7px] font-mono tracking-widest text-white/60 uppercase leading-none mt-0.5">
              Honoury Geospatial Scientists
            </span>
          </div>
        </div>

        {/* Desktop Navigation Link pills */}
        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`px-4 py-1.5 rounded-full text-xs font-sans tracking-wide transition-all ${
                currentPage === item.id
                  ? 'bg-white text-neutral-950 font-semibold shadow'
                  : 'text-white/70 hover:text-white hover:bg-white/5'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Right contact button */}
        <div className="hidden md:flex items-center space-x-3">
          <button
            onClick={() => handleNavClick('contact')}
            className={`px-5 py-2.5 rounded-full text-xs font-mono tracking-wider uppercase border transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer ${
              currentPage === 'contact'
                ? 'bg-white text-neutral-950 border-white font-bold'
                : 'bg-white/10 hover:bg-white/15 text-white border-white/10'
            }`}
            id="header-consultation-btn"
          >
            Contact
          </button>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-full text-white/80 hover:text-white hover:bg-white/5 transition-transform"
          id="mobile-nav-toggle"
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

      </div>

      {/* Mobile drop-down Menu drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 px-4 py-5 rounded-3xl liquid-glass border border-white/10 shadow-2xl space-y-4 animate-fade-in mx-2 z-50">
          <nav className="flex flex-col space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-4 py-2.5 rounded-xl text-xs uppercase tracking-wider font-semibold ${
                  currentPage === item.id
                    ? 'bg-white text-neutral-950'
                    : 'text-white/80 env-hover:hover:bg-white/5'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
          
          <div className="border-t border-white/5 pt-4">
            <button
              onClick={() => {
                handleNavClick('contact');
              }}
              className={`w-full text-center py-2.5 rounded-full border text-xxs tracking-widest font-bold uppercase font-mono transition-all duration-200 ${
                currentPage === 'contact'
                  ? 'bg-white text-neutral-950 border-white'
                  : 'border-white/20 text-white/90 hover:bg-white/5'
              }`}
              id="mobile-consultation-btn"
            >
              Contact
            </button>
          </div>
        </div>
      )}

    </header>
  );
}
