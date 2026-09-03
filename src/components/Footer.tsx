/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Mail, Phone, Compass, ArrowUpRight } from 'lucide-react';
import { PageId } from '../types';

interface FooterProps {
  setCurrentPage: (page: PageId) => void;
}

export default function Footer({ setCurrentPage }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full px-4 sm:px-6 lg:px-8 py-12 mt-12 border-t border-white/5 relative bg-neutral-950/20">
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        
        {/* Editorial Brand Section */}
        <div className="md:col-span-4 space-y-3.5">
          <div className="flex items-center space-x-2.5">
            <img src="/BG removed HGS.png" alt="HGS logo" className="h-5 w-auto object-contain" referrerPolicy="no-referrer" />
            <span className="font-sans font-bold text-sm tracking-widest text-white uppercase">HGS SCIENTIFIC</span>
          </div>
          <p className="text-xxs text-white/50 leading-relaxed max-w-sm">
            Honoury Geospatial Scientists (HGS) is an elite academic and professional portal providing premier hydrological mapping and data sciences.
          </p>
        </div>

        {/* Rapid Directory links */}
        <div className="md:col-span-3 space-y-3">
          <h4 className="text-[11px] font-mono tracking-widest text-white/40 uppercase">Rapid Directory</h4>
          <ul className="space-y-1.5 text-xs text-white/70">
            {[
              { label: 'Home', value: 'home' },
              { label: 'About Us', value: 'about' },
               { label: 'Services', value: 'services' },
               { label: 'Contact', value: 'contact' }
            ].map((lnk) => (
              <li key={lnk.value}>
                <button
                  onClick={() => setCurrentPage(lnk.value as PageId)}
                  className="hover:text-white transition-colors cursor-pointer flex items-center space-x-1 uppercase text-xxs font-mono tracking-wider"
                >
                  <span>{lnk.label}</span>
                  <ArrowUpRight className="h-2.5 w-2.5 text-white/40 group-hover:text-white" />
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact credentials (South African corridor) */}
        <div className="md:col-span-5 space-y-3">
          <h4 className="text-[11px] font-mono tracking-widest text-white/40 uppercase">South Africa-US High-Speed Corridors</h4>
          <div className="space-y-2.5 text-xs text-white/80 font-mono">
            
            <div className="flex items-center space-x-2.5">
              <Mail className="h-3.5 w-3.5 text-white/40 font-mono" />
              <span className="select-all break-all">honourygeospatialscientists@gmail.com</span>
            </div>

            <div className="flex items-center space-x-2.5">
              <Phone className="h-3.5 w-3.5 text-white/40" />
              <span>+27 (0) 67 964 6656</span>
            </div>

            <div className="text-[10px] text-white/60 space-y-0.5 border-t border-white/5 pt-2">
              <div>LinkedIn: Honoury Geospatial Scientists</div>
            </div>

          </div>
        </div>

      </div>

      {/* Copy line indicator */}
      <div className="max-w-7xl mx-auto border-t border-white/5 mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between text-[10px] font-mono text-white/30 tracking-widest uppercase">
        <span>© {year} Honoury Geospatial Scientists (HGS). All Rights Reserved.</span>
        <span className="mt-2 sm:mt-0">Verified OGC Spatial Certificate full execution.</span>
      </div>

    </footer>
  );
}
