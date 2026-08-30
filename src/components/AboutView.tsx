/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { TEAM_MEMBERS } from '../data';
import { 
  Compass, 
  Target, 
  Eye, 
  ShieldCheck, 
  Award, 
  BookOpen, 
  Briefcase, 
  Flame,
  Scale,
  Users,
  Lightbulb,
  Globe
} from 'lucide-react';

export default function AboutView() {
  const coreValues = [
    { name: 'Innovation', desc: 'Advancing beyond legacy platforms to deploy state-of-the-art serverless GEE automated engines.', icon: Lightbulb },
    { name: 'Accuracy', desc: 'Verifiable sub-meter spatial analytics validated stringently against ground-control vectors.', icon: Target },
    { name: 'Scientific Integrity', desc: 'Applying peer-reviewed anisotropic spectral modeling matrices without compromise.', icon: ShieldCheck },
    { name: 'Sustainability', desc: 'Fusing environmental predictions into structural buffers that actively protect water catchments.', icon: Flame },
    { name: 'Collaboration', desc: 'Deepening national and international research axes with teams from Zambia and the United States.', icon: Users },
    { name: 'Excellence', desc: 'Ensuring OGC compliance, ISO TC 211 standards, and Grade A SANS water metadata across all outputs.', icon: Award }
  ];

  return (
    <div className="space-y-16 animate-fade-in px-4 max-w-7xl mx-auto text-left">
      
      {/* Editorial Header Section */}
      <section className="space-y-5 max-w-4xl">
        <div className="inline-flex items-center space-x-2 text-[10px] bg-white/10 text-white/90 px-3 py-1.5 rounded-full font-mono tracking-widest uppercase">
          <Compass className="h-3.5 w-3.5 animate-spin duration-[4000ms]" />
          <span>AFRICAN GEOSPATIAL EXCELLENCE</span>
        </div>
        
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-sans font-medium tracking-tight text-white leading-tight">
          Pioneering environmental analytics for <em className="font-serif italic font-normal text-white/85">sustainable futures</em>
        </h1>
      </section>

      {/* 1. OUR STORY */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        <div className="lg:col-span-7 space-y-6">
          <div className="border-b border-white/10 pb-2">
            <h2 className="text-sm font-mono tracking-widest text-white/40 uppercase font-bold">Our Story</h2>
          </div>
          
          <div className="space-y-4 text-sm sm:text-base text-white/85 leading-relaxed font-sans">
            <p>
              Honoury Geospatial Scientists (HGS) is an African-based Geospatial Services company specializing in geospatial data science with an emphasis on leveraging big geospatial data and cloud computing to provide practical, high-end analysis solutions for environmental and water projects.
            </p>
            <p className="border-l-2 border-white/30 pl-4 text-white/70 italic text-sm sm:text-base">
             The company has a strong track record of successfully delivering high-quality projects across the nation, working alongside global institutions and academic researchers. 
            </p>
          </div>
        </div>

        {/* MISSION & VISION */}
        <div className="lg:col-span-5 space-y-6">
          
          <div className="border-b border-white/10 pb-2">
            <h2 className="text-sm font-mono tracking-widest text-white/40 uppercase font-bold">Strategic Directives</h2>
          </div>

          <div className="space-y-4">
            
            {/* Mission card */}
            <div className="p-5 rounded-2xl bg-white/5 border border-white/5 space-y-2">
              <div className="flex items-center space-x-2.5 text-white">
                <Target className="h-4.5 w-4.5" />
                <h3 className="text-xs font-mono uppercase tracking-wider font-extrabold">Mission</h3>
              </div>
              <p className="text-xs text-white/70 leading-relaxed font-sans">
                To provide innovative geospatial intelligence solutions that help organizations understand, manage, and protect environmental resources.
              </p>
            </div>

            {/* Vision card */}
            <div className="p-5 rounded-2xl bg-white/5 border border-white/5 space-y-2">
              <div className="flex items-center space-x-2.5 text-white">
                <Eye className="h-4.5 w-4.5" />
                <h3 className="text-xs font-mono uppercase tracking-wider font-extrabold">Vision</h3>
              </div>
              <p className="text-xs text-white/70 leading-relaxed font-sans">
                To become Africa's leading geospatial intelligence and environmental analytics partner.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* 2. CORE VALUES */}
      <section className="space-y-6">
        <div className="border-b border-white/10 pb-2">
          <h2 className="text-sm font-mono tracking-widest text-white/40 uppercase font-bold">Core Values</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {coreValues.map((val, idx) => {
            const Icon = val.icon;
            return (
              <div key={idx} className="p-5 rounded-2xl bg-neutral-900/45 border border-white/5 hover:border-white/15 transition-all text-left space-y-3">
                <div className="p-2 bg-white/5 rounded-lg text-white w-fit">
                  <Icon className="h-4 w-4" />
                </div>
                <h3 className="text-xs font-mono uppercase tracking-widest text-white leading-none font-bold">{val.name}</h3>
                <p className="text-xxs text-white/60 leading-relaxed">{val.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* 3. OUR TEAM FEATURE */}

    </div>
  );
}
