/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { 
  Map, 
  Layers, 
  Cpu, 
  Compass, 
  Code2, 
  Network, 
  CheckCircle,
  FileSpreadsheet,
  Terminal,
  Activity,
  Globe2
} from 'lucide-react';

export default function ServicesView() {
  const serviceCategories = [
    {
      id: 'gis-mapping',
      title: 'GIS & Mapping',
      icon: Map,
      bullets: [
        'National Shapefiles',
        'Custom Study Area Maps',
        'Watershed Mapping',
        'Catchment Delineation'
      ],
      description: ''
    },
    {
      id: 'satellite-solutions',
      title: 'Satellite Data Solutions',
      icon: Layers,
      bullets: [
        'Raster/TIFF Data',
        'Satellite Imagery Processing',
        'Remote Sensing Analysis',
        'Change Detection'
      ],
      description: ''
    },
    {
      id: 'ml-classification',
      title: 'Machine Learning & Classification',
      icon: Cpu,
      bullets: [
        'Land Use Land Cover Maps',
        'Supervised Classification'
      ],
      description: ''
    },
    {
      id: 'env-intelligence',
      title: 'Environmental Intelligence',
      icon: Compass,
      bullets: [
        'Spatial Predictions'
      ],
      description: ''
    },
    {
      id: 'research-dev',
      title: 'Research & Development',
      icon: Network,
      bullets: [
        'Flowcharts',
        'Spatial Data Visualization',
        'Academic Research Support',
        'Publication Mapping'
      ],
      description: ''
    },
    {
      id: 'coding-automation',
      title: 'Coding & Automation',
      icon: Code2,
      bullets: [
        'Google Earth Engine',
        'Python',
        'JavaScript',
        'Google Colab',
        'Jupyter Notebook',
        'R Studio'
      ],
      description: ''
    }
  ];

  return (
    <div className="space-y-16 animate-fade-in px-4 max-w-7xl mx-auto text-left">
      
      {/* Page Title & Introductory Statement */}
      <section className="space-y-4 max-w-4xl">
        <div className="inline-flex items-center space-x-2 text-[10px] bg-white/10 text-white/90 px-3 py-1.5 rounded-full font-mono tracking-widest uppercase">
          <Terminal className="h-3 w-3" />
          <span>Operational Portfolio Index</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-sans font-medium tracking-tight text-white leading-tight">
          Scientific water models & <em className="font-serif italic font-normal text-white/85">custom cloud scripts</em>
        </h1>
        <p className="text-xs sm:text-sm text-white/60 leading-relaxed font-sans max-w-2xl">
          HGS implements precision geo-spatial solutions that help students, research teams, and environmental managers. 
        </p>
      </section>

      {/* Modern service cards grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
        {serviceCategories.map((cat) => {
          const Icon = cat.icon;
          return (
            <div 
              key={cat.id} 
              className="liquid-glass rounded-3xl p-6 sm:p-8 space-y-6 flex flex-col justify-between hover:border-white/15 transition-all duration-300 hover:scale-[1.01] h-full"
            >
              <div className="space-y-4">
                {/* Header with Icon */}
                <div className="flex items-center space-x-3.5 border-b border-white/5 pb-4">
                  <div className="h-10 w-10 rounded-xl bg-white/5 flex items-center justify-center text-white border border-white/10">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-white font-sans leading-tight">
                    {cat.title}
                  </h3>
                </div>

                <p className="text-xxs text-white/60 leading-relaxed">
                  {cat.description}
                </p>

                {/* Bullets mapping */}
                <div className="space-y-2 pt-2">
                  <span className="text-[8px] font-mono tracking-widest text-white/40 block uppercase">
                    Deliverable Modules
                  </span>
                  
                  <ul className="space-y-2">
                    {cat.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <CheckCircle className="h-3 w-3 text-white/80 shrink-0 mt-0.5" />
                        <span className="text-xxs text-white/85 leading-snug">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Status footer line */}
              <div className="pt-4 border-t border-white/5 text-[8px] font-mono text-white/40 uppercase tracking-widest">
                OGC & SANS Standard Compliant
              </div>

            </div>
          );
        })}
      </section>
    </div>
  );
}
